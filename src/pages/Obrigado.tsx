import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle2, MessageCircle, ArrowLeft, Home } from 'lucide-react'

export default function Obrigado() {
  const location = useLocation()
  const name = (location.state as { name?: string })?.name

  useEffect(() => {
    document.title = 'Mensagem Enviada - Bagageiros e Cia'
  }, [])

  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Sucesso!
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {name ? `Obrigado, ${name}!` : 'Obrigado pelo Contato!'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Recebemos a sua mensagem com sucesso. Nossa equipe entrará em contato o mais breve
            possível com as informações e orçamento para sua viagem.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 space-y-3">
          <p className="text-xs text-slate-500 font-medium">
            Precisa de resposta imediata? Chame-nos diretamente pelo WhatsApp:
          </p>
          <a
            href="https://wa.me/554399957139/?text=Ol%C3%A1,%20acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Conversar Agora no WhatsApp
          </a>

          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
          >
            <Home className="w-3.5 h-3.5" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
