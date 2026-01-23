import { useState } from 'react'
import { Header } from '@/components/Header'
import { BlogList } from '@/components/BlogList'
import { BlogDetail } from '@/components/BlogDetail'
import { CreateBlogForm } from '@/components/CreateBlogForm'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import type { Blog } from '@/types/blog'

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CA Monk Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-6">
          <Button onClick={() => setIsCreateOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Blog
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <BlogList selectedBlogId={selectedBlog?.id || null} onSelectBlog={setSelectedBlog} />
            </div>
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            <BlogDetail blogId={selectedBlog?.id || null} />
          </div>
        </div>
      </main>

      <Footer />

      {isCreateOpen && <CreateBlogForm onClose={() => setIsCreateOpen(false)} />}
    </div>
  )
}

export default App
