interface ImportMetaEnv {
  /** Public URL of the serverless contact endpoint (see contact-api/). Never a secret. */
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
