// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // TODO: 公開ドメインに置き換えてください（canonical / OGP の絶対URLに使用）
  site: 'https://www.higashiyama-shinei.com',
  integrations: [icon()],
});
