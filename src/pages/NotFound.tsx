import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center bg-slate-900 text-white px-4"
      style={{
        backgroundImage:
          'url("https://bagageirosecia.com.br/wp/wp-content/uploads/2021/03/background-Fallback-404.1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-8 rounded-3xl bg-slate-900/80 border border-slate-700/80 shadow-2xl animate-fade-in">
        <span className="text-6xl sm:text-7xl font-black text-amber-500 tracking-tight block">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Página não encontrada</h1>
          <p className="text-sm sm:text-base text-slate-300">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Página Anterior
          </button>
        </div>
      </div>
    </div>
  )
}
