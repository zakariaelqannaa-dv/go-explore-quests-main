/// <reference types="vite/client" />

interface ImportMeta {
  url: string;
}

declare module "lovable-tagger" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function componentTagger(): any;
}
