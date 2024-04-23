// Basado en: https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts

import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  urlname: string
  tags: string[]
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

const getUrlName = (url) => {
  const name = url.split('/')[2].slice(0, -5)
  return name
}

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        urlname: getUrlName(url),
        tags: frontmatter.tags,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }
}