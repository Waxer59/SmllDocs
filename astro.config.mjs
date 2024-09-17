// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

const site = "https://docs.smll.app"
const ogUrl = new URL('og.png', site).href

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the OpenAPI documentation pages.
        // starlightOpenAPI([])
      ],
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
      sidebar: [...openAPISidebarGroups]
    })
  ]
})
