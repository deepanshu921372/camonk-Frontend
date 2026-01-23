import { useQuery } from '@tanstack/react-query'
import { fetchBlogs } from '@/lib/api'
import { BlogCard } from './BlogCard'
import { Skeleton } from '@/components/ui/skeleton'
import type { Blog } from '@/types/blog'

interface BlogListProps {
  selectedBlogId: string | null
  onSelectBlog: (blog: Blog) => void
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
          <div className="flex justify-between mb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3 mb-3" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  })

  if (isLoading) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Articles</h2>
        <LoadingSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600 font-medium">Failed to load blogs</p>
        <p className="text-red-500 text-sm mt-1">Make sure the server is running on port 3001</p>
      </div>
    )
  }

  if (!blogs?.length) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No blogs found</p>
      </div>
    )
  }

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Articles</h2>
      <div className="space-y-3">
        {sortedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isSelected={selectedBlogId === blog.id}
            onClick={() => onSelectBlog(blog)}
          />
        ))}
      </div>
    </div>
  )
}
