import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Menu, X, MessageCircle, Phone, MapPin, ChevronRight } from 'lucide-react'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const consent = localStorage.getItem('bagageiros_cookie_consent')
    if (!consent) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleDismissCookie = () => {
    localStorage.setItem('bagageiros_cookie_consent', 'dismissed')
    setShowCookieBanner(false)
  }

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setMobileMenuOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${hash}`)
      }
    } else {
      // Let standard Link navigate to /#hash
    }
  }

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Bagageiros', path: '/#bagageiros', isAnchor: true, anchorId: 'bagageiros' },
    { label: 'Portifólio', path: '/portifolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash
    if (path.startsWith('/#'))
      return location.pathname === '/' && location.hash === path.substring(1)
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-white font-sans antialiased selection:bg-amber-500 selection:text-white">
      {/* Top Banner / Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Atendemos Londrina e Região — Aluguel e Venda
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              (43) 99995-7139
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/554399957139/?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20bagageiros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chame no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              <span className="text-amber-400">B</span>&amp;C
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none group-hover:text-amber-600 transition-colors">
                BAGAGEIROS <span className="text-amber-500 font-light">&amp;</span> CIA
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                Aluguel &amp; Venda • Londrina/PR
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.anchorId!)}
                    className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors relative py-1"
                  >
                    {link.label}
                  </a>
                )
              }
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    active ? 'text-amber-600 font-bold' : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full animate-fade-in" />
                  )}
                </Link>
              )
            })}

            <a
              href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20alugar%20um%20bagageiro."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in">
            {navLinks.map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.anchorId!)}
                    className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100"
                  >
                    {link.label}
                  </a>
                )
              }
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                    active
                      ? 'bg-amber-50 text-amber-600 font-bold'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20alugar%20um%20bagageiro."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base shadow"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Quero Comprar ou Alugar Agora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">{children || <Outlet />}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: About */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-amber-500 flex items-center justify-center text-slate-900 font-extrabold text-lg">
                  B&amp;C
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  BAGAGEIROS E CIA
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Aluguel e venda de bagageiros, racks automotivos, travessas e transbikes em Londrina
                e Região. Viaje com conforto, espaço e segurança total para sua família.
              </p>
              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20alugar%20um%20bagageiro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded bg-slate-800 text-amber-400 border border-slate-700 hover:bg-slate-700 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp: (43) 99995-7139
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                Navegação
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portifolio"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Portifólio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Contato
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termos"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Termos &amp; Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Capacidades & Veículos */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                Modelos Atendidos
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Bagageiros de 300, 400, 460, 510 e 600 litros instalados em:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Cherry Tiggo 8
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Commander
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Fiesta
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Civic
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Santa Fé
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Onix
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Spin
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Trailblazer
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  Peugeot
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2021 Todo direito Reservado</p>
            <p>
              <a
                href="http://www.invictoweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Feito com ❤ por InvictoWEB
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <aside aria-label="Atendimento pelo WhatsApp">
        <a
          href="https://wa.me/554399957139/?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20bagageiros"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 group"
        >
          <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
          <span className="font-semibold text-sm hidden sm:inline-block pr-1">WhatsApp</span>
        </a>
      </aside>

      {/* Cookie / Privacy Banner (Dismissable & stored in localStorage) */}
      {showCookieBanner && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-md text-slate-200 border-t border-slate-700 p-4 shadow-2xl animate-slide-up">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="leading-relaxed text-slate-300 text-center sm:text-left">
              Utilizamos seus dados para analisar e personalizar nossos conteúdos e anúncios,
              fornecer recursos de mídia social e analisar nosso tráfego durante a sua navegação em
              nossos sites, em serviços de terceiros e parceiros. Ao navegar pelo site, você
              autoriza a Bagageiros e Cia a coletar tais informações e utilizá-las para estas
              finalidades. Em caso de dúvidas, acesse nossa{' '}
              <Link
                to="/termos"
                className="underline font-bold text-amber-400 hover:text-amber-300"
              >
                Política de Privacidade.
              </Link>
            </p>
            <button
              onClick={handleDismissCookie}
              className="shrink-0 px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition shadow"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
