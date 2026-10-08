import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Mail, MapPin, Send, PhoneCall } from 'lucide-react'

export default function Contato() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Contato - Bagageiros e Cia'
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Also build a whatsapp fallback or redirect to confirmation page
    setTimeout(() => {
      navigate('/obrigado', { state: { from: 'contato', name: form.name } })
    }, 400)
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Page Top */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-md inline-block mb-3">
            Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contate-nos
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Entre em contato conosco para tirar as suas dúvidas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/554399957139/?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20bagageiros"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chame pelo Whatsapp
            </a>
            <a
              href="#outrosmeios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm shadow-sm transition"
            >
              Outros meios
            </a>
          </div>
        </div>

        {/* Contact Form & Box */}
        <div id="outrosmeios" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Info Side */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900">Tem alguma pergunta?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Se você tem alguma pergunta ou sugestões contate-nos usando seu método preferido.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/554399957139/?text=Ol%C3%A1,%20Pode%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 block">WhatsApp Oficial</span>
                  <span className="text-sm font-semibold group-hover:underline">
                    (43) 99995-7139
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 text-slate-800 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block">Localização</span>
                  <span className="text-sm font-semibold">Londrina e Região — Paraná</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 text-slate-800 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block">
                    Horário de Atendimento
                  </span>
                  <span className="text-sm font-semibold">
                    Segunda a Sábado, mediante agendamento
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Envie uma mensagem direta</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Como podemos te ajudar? Deseja alugar ou comprar um bagageiro ou rack?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-sm shadow transition flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Enviando...' : 'Enviar Contato'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
