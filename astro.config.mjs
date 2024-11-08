// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
const site = "https://docs.smll.app"
const ogUrl = new URL('og.png', site).href

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: ogUrl
          }
        }
      ],
      title: 'Smll Docs',
      favicon: '/favicon.png',
      social: {
        github: 'https://github.com/waxer59/SmllDocs'
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: ["getting-started"],
        },
        {
          label: "Smll",
          items: ["smll", "smll/endpoints"]
        },
        {
          label: "SmllClip",
          items: ["smll-clip", "smll-clip/endpoints"]
        }
      ]
    })
  ]
})
