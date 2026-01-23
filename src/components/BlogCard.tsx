import { Badge } from '@/components/ui/badge'
import type { Blog } from '@/types/blog'

interface BlogCardProps {
  blog: Blog
  isSelected: boolean
  onClick: () => void
}

const categoryIcons: Record<string, string> = {
  FINANCE: '📈',
  CAREER: '💼',
  REGULATIONS: '📋',
  SKILLS: '🎯',
  TECH: '💻',
  TECHNOLOGY: '💻',
  EDUCATION: '📚',
  LIFESTYLE: '🌟',
}

function getTimeAgo(date: string) {
  const now = new Date()
  const past = new Date(date)
  const diffMs = now.getTime() - past.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)

  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffWeeks < 4) return `${diffWeeks} weeks ago`
  return past.toLocaleDateString()
}

export function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
  const category = blog.category[0]

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all border-l-4 bg-white shadow-sm hover:shadow-md ${
        isSelected
          ? 'border-l-indigo-600 bg-indigo-50/50'
          : 'border-l-transparent hover:border-l-indigo-400'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{categoryIcons[category] || '📄'}</span>
          <span className="text-xs font-medium text-indigo-600 uppercase">{category}</span>
        </div>
        <span className="text-xs text-gray-400">{getTimeAgo(blog.date)}</span>
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{blog.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {blog.category.slice(0, 2).map((cat) => (
          <Badge key={cat} variant="secondary" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200">
            {cat.charAt(0) + cat.slice(1).toLowerCase()}
          </Badge>
        ))}
      </div>
    </div>
  )
}
