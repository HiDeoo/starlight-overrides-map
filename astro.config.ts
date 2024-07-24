import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      components: {
        FallbackContentNotice: './src/components/FallbackContentNotice.astro',
        PageFrame: './src/components/PageFrame.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-overrides-map/edit/main/',
      },
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
})
