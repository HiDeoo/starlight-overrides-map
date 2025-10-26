import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

const site =
  (process.env['CONTEXT'] === 'production' ? process.env['URL'] : process.env['DEPLOY_PRIME_URL']) ??
  'https://starlight-overrides-map.netlify.app/'

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      components: {
        FallbackContentNotice: './src/components/FallbackContentNotice.astro',
        PageFrame: './src/components/PageFrame.astro',
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-overrides-map/edit/main/',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: new URL('og.jpg', site).href },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'An interactive map of Starlight component overrides.' },
        },
      ],
      lastUpdated: true,
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },
      sidebar: [
        { slug: 'example' },
        {
          label: 'Resources',
          items: [
            { label: 'Starlight', link: 'https://starlight.astro.build/' },
            { label: 'Astro', link: 'https://astro.build/' },
          ],
        },
      ],
      social: {
        github: 'https://github.com/HiDeoo/starlight-overrides-map',
      },
      title: 'Starlight Overrides Map',
    }),
  ],
  site,
})
