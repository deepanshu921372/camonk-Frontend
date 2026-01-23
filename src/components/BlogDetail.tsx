import { useQuery } from '@tanstack/react-query'
import { fetchBlogById } from '@/lib/api'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface BlogDetailProps {
  blogId: string | null
}

function DetailSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Skeleton className="w-full h-64" />
      <div className="p-6">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-10 w-32 mb-6" />
        <div className="flex gap-4 mb-6">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  })

  if (!blogId) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Select an article</h3>
        <p className="text-gray-500">Choose an article from the list to read</p>
      </div>
    )
  }

  if (isLoading) return <DetailSkeleton />

  if (error || !blog) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 text-center">
        <p className="text-red-500 font-medium">Failed to load blog</p>
        <p className="text-sm text-red-400 mt-1">Please try again later</p>
      </div>
    )
  }

  // calculate read time based on word count
  const wordCount = blog.content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="h-64 md:h-80">
        <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="text-indigo-600 font-medium">{blog.category[0]}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500">{readTime} min read</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share Article
        </Button>

        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase mb-1">Category</p>
            <p className="font-medium text-gray-900">{blog.category.join(' & ')}</p>
          </div>
          <div className="text-center border-x border-gray-200">
            <p className="text-xs text-gray-500 uppercase mb-1">Read Time</p>
            <p className="font-medium text-gray-900">{readTime} Mins</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase mb-1">Date</p>
            <p className="font-medium text-gray-900">{formattedDate}</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          {blog.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed mb-4">{para}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="bg-gray-100 text-gray-700">{cat}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
