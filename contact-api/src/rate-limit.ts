export interface RateLimiter {
  /** Records a hit and returns how many seconds the caller must wait, or 0 if allowed. */
  hit(key: string, now?: number): number;
}

/**
 * Sliding-window limiter held in memory.
 * Serverless instances are short-lived and not shared, so this is a best-effort guard against
 * bursts from one client. For a hard global limit, back it with a store such as Upstash Redis.
 */
export function createMemoryRateLimiter({ limit = 5, windowMs = 15 * 60 * 1000 } = {}): RateLimiter {
  const hits = new Map<string, number[]>();

  return {
    hit(key, now = Date.now()) {
      const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        const oldest = recent[0] ?? now;
        return Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
      }
      recent.push(now);
      hits.set(key, recent);

      // Keep memory bounded on long-lived instances.
      if (hits.size > 5000) {
        for (const [k, times] of hits) {
          if (!times.some((t) => now - t < windowMs)) hits.delete(k);
        }
      }
      return 0;
    },
  };
}
