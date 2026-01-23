import type { Blog, CreateBlogData } from '@/types/blog'

const BASE_URL = 'http://localhost:3001'

export async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${BASE_URL}/blogs`)
  if (!res.ok) throw new Error('Failed to fetch blogs')
  return res.json()
}

export async function fetchBlogById(id: string): Promise<Blog> {
  const res = await fetch(`${BASE_URL}/blogs/${id}`)
  if (!res.ok) throw new Error('Failed to fetch blog')
  return res.json()
}

export async function createBlog(data: CreateBlogData): Promise<Blog> {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to create blog')
  return res.json()
}
