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

  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedBlog(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">CA Monk Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile View */}
        <div className="lg:hidden">
          {selectedBlog ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-indigo-600 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to articles
                </button>
                <Button onClick={() => setIsCreateOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Blog
                </Button>
              </div>
              <BlogDetail blogId={selectedBlog.id} />
            </div>
          ) : (
            <div>
              <div className="flex justify-end mb-4">
                <Button onClick={() => setIsCreateOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Blog
                </Button>
              </div>
              <BlogList selectedBlogId={null} onSelectBlog={handleSelectBlog} />
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex justify-end mb-6">
            <Button onClick={() => setIsCreateOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Blog
            </Button>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <BlogList selectedBlogId={selectedBlog?.id || null} onSelectBlog={handleSelectBlog} />
              </div>
            </div>
            <div className="lg:col-span-8 xl:col-span-9">
              <BlogDetail blogId={selectedBlog?.id || null} />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {isCreateOpen && <CreateBlogForm onClose={() => setIsCreateOpen(false)} />}
    </div>
  )
}

export default App
