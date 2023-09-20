import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
    return rss({
        title: "Sangres | Blog",
        description: "My journey learning Astro",
        site: "https://sangres-astro-blog.netlify.app/",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: '<language>en-us</language>'
    })
}