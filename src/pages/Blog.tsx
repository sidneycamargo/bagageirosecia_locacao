import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Calendar, ChevronRight } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blogData'

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog - Bagageiros e Cia'
  }, [])

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-amber-600 transition">
            Início
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium">Blog</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-md inline-block mb-3">
            Novidades &amp; Modelos
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Blog da Bagageiros e Cia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Confira as instalações de bagageiros, racks e maleiros realizadas em diversos modelos de
            veículos.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition duration-300 flex flex-col group"
            >
              <Link
                to={`/${post.slug}`}
                className="block relative aspect-[16/10] overflow-hidden bg-slate-100"
              >
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {post.capacityText}
                </span>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      {post.commentCount === 0
                        ? 'Nenhum comentário'
                        : `${post.commentCount} comentários`}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    <Link to={`/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/${post.slug}`}
                    className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Leia mais &raquo;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
