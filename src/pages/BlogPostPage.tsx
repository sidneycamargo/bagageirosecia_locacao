import React, { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Package,
  Layers,
  Wrench,
  Sparkles,
} from 'lucide-react'
import { BLOG_POSTS, COMMON_FAQ, TECH_SPECS } from '@/data/blogData'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  const [currentImageIdx, setCurrentImageIdx] = useState(0)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Bagageiros e Cia`
      window.scrollTo(0, 0)
      setCurrentImageIdx(0)
    }
  }, [post])

  if (!post) {
    return <Navigate to="/404" replace />
  }

  // Find prev/next post
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug)
  const prevPost =
    currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : BLOG_POSTS[BLOG_POSTS.length - 1]
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : BLOG_POSTS[0]

  const handlePrevImage = () => {
    setCurrentImageIdx((prev) => (prev === 0 ? post.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIdx((prev) => (prev === post.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-amber-600 transition">
            Início
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link to="/blog" className="hover:text-amber-600 transition">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              {post.commentCount === 0 ? 'Nenhum comentário' : `${post.commentCount} comentários`}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-200">
              {post.capacityText}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {post.subtitle || post.title}
          </h1>

          {/* Carousel / Image Viewer */}
          <div className="mt-8 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group shadow-md border border-slate-200">
              <img
                src={post.images[currentImageIdx]?.url || post.thumbnailUrl}
                alt={post.images[currentImageIdx]?.alt || post.title}
                className="w-full h-full object-contain sm:object-cover"
              />

              {/* Prev / Next buttons inside Carousel */}
              {post.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg transition transform hover:scale-110 active:scale-95"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg transition transform hover:scale-110 active:scale-95"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicators / Text Navigation */}
                  <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-4">
                    <button
                      onClick={handlePrevImage}
                      className="px-3 py-1 rounded-md bg-slate-900/70 hover:bg-amber-500 text-white text-xs font-semibold backdrop-blur-sm transition"
                    >
                      &laquo; Anterior
                    </button>
                    <span className="text-xs text-white/90 bg-slate-900/70 px-2.5 py-1 rounded-md backdrop-blur-sm font-medium">
                      {currentImageIdx + 1} de {post.images.length}
                    </span>
                    <button
                      onClick={handleNextImage}
                      className="px-3 py-1 rounded-md bg-slate-900/70 hover:bg-amber-500 text-white text-xs font-semibold backdrop-blur-sm transition"
                    >
                      Próximo &raquo;
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {post.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {post.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIdx(i)}
                    className={`relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition ${
                      i === currentImageIdx
                        ? 'border-amber-500 shadow-md ring-2 ring-amber-400/40'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Original Callouts & Offers */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-lg">
                Trabalhamos com os mais diversos tamanhos de Bagageiros:
              </h3>
              <p className="text-amber-600 font-extrabold text-lg">
                300, 400, 460, 510 e 600 litros.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Alugamos com ou sem rack / Travessas ou apenas o rack.
              </p>
              <p className="text-sm font-bold text-slate-800">
                Solicite um orçamento sem compromisso.
              </p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Atendemos Londrina e Região.
              </p>
            </div>

            {/* Call to action button */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between items-start">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 mb-1 block">
                  Reserve para sua viagem
                </span>
                <h4 className="text-lg font-bold text-slate-900">Deseja alugar para este carro?</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Consulte a disponibilidade de datas e faça a reserva do bagageiro com instalação
                  inclusa.
                </p>
              </div>
              <a
                href={`https://wa.me/554399957139/?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20${encodeURIComponent(
                  post.title,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Orçamento no WhatsApp
              </a>
            </div>
          </div>

          {/* Capacities Badges if present */}
          {post.availableCapacities && post.availableCapacities.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase">
                Opções para este modelo:
              </span>
              {post.availableCapacities.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs"
                >
                  Veja aqui com {cap}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tech Specs & Details (faithful to original description on post pages) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              Descrição do Bagageiro / Maleiro
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {TECH_SPECS.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Especificações técnicas
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {TECH_SPECS.specs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-500" />
                Conteúdo da embalagem
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {TECH_SPECS.packageContent.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-500" />
                Detalhes sobre a instalação
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {TECH_SPECS.installation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Aplicação</h3>
            <p className="text-sm text-slate-600 mt-1">• {TECH_SPECS.application}</p>
          </div>
        </div>

        {/* Perguntas Frequentes (Present on every post page) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="mb-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Dúvidas
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Perguntas Frequêntes</h2>
          </div>

          <div className="space-y-4">
            {COMMON_FAQ.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 open:bg-white open:shadow-sm transition"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm list-none">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Post Bottom Navigation: Anterior / Próximo */}
        <div className="flex items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <Link
            to={`/${prevPost.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition"
          >
            <ChevronLeft className="w-5 h-5 text-amber-500" />
            <span className="hidden sm:inline">Anterior:</span> {prevPost.title}
          </Link>

          <Link
            to={`/${nextPost.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition text-right"
          >
            <span className="hidden sm:inline">Próximo:</span> {nextPost.title}
            <ChevronRight className="w-5 h-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}
