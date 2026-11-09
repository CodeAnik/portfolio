import type { IconName } from '@/components/ui/icons';

export interface SocialLink {
  name: string;
  href: string;
  handle: string;
  icon: IconName;
}

/** Profiles linked from the original site. Marketplace links that pointed to generic homepages were dropped. */
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/CodeAnik', handle: 'CodeAnik', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/connectanik/', handle: 'connectanik', icon: 'linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/codeanik', handle: 'codeanik', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/codeanik', handle: 'codeanik', icon: 'instagram' },
  { name: 'X (Twitter)', href: 'https://x.com/code_anik', handle: 'code_anik', icon: 'brand-x' },
];
