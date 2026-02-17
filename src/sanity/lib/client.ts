import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '36hj0d6k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

const isSanityConfigured = projectId && projectId !== 'YOUR_PROJECT_ID' && /^[a-z0-9-]+$/.test(projectId)

export const client = isSanityConfigured 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) throw new Error('Sanity not configured')
  return builder.image(source)
}

export async function getPosts() {
  if (!client) return []
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      "category": category->title,
      "author": author->name
    }`,
    {},
    { next: { tags: ['post'] } }
  )
}

export async function getPost(slug: string) {
  if (!client) return null
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      publishedAt,
      readTime,
      "category": category->{title, slug},
      "author": author->{name, image, bio}
    }`,
    { slug },
    { next: { tags: ['post', `post:${slug}`] } }
  )
}

export async function getCategories() {
  if (!client) return []
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }`,
    {},
    { next: { tags: ['category'] } }
  )
}
