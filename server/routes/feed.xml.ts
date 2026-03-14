import { queryCollection } from '#imports'

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog').order('date', 'DESC').all()

  const siteUrl = 'https://philiplambok.com'
  const title = 'slice of life blog'
  const description = "Philip Lambok's blog"

  const items = posts
    .map((post) => {
      const link = `${siteUrl}${post.path}`
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${new Date(post.date + 'T00:00:00').toUTCString()}</pubDate>
      ${post.description ? `<description><![CDATA[${post.description}]]></description>` : ''}
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${siteUrl}</link>
    <description>${description}</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return feed
})
