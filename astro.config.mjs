import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://gentle-starlight-ddb672.netlify.app/",
  integrations: [preact()]
});