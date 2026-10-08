import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Eye, ChevronRight } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blogData'

export default function Portifolio() {
  useEffect(() => {
    document.title = 'Fotos - Portifólio: Conheça nossos trabalhos - Bagageiros e Cia'
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
          <span className="text-slate-800 font-medium">Portifólio</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-md inline-block mb-2">
            Portifólio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conheça nossos trabalhos
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Veja as fotos de carros com bagageiros, maleiros e racks instalados por nossa equipe em
            Londrina/PR.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    to={`/${post.slug}`}
                    className="px-4 py-2 rounded-lg bg-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition"
                  >
                    <Eye className="w-4 h-4" />
                    Ver Fotos
                  </Link>
                </div>
                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {post.capacityText}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    <Link to={`/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{post.subtitle}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <Link
                    to={`/${post.slug}`}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Galeria Completa &raquo;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
