import React, { useEffect, useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  MessageCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Home,
} from 'lucide-react'
import {
  DEFAULT_WHATSAPP_PHONE,
  DEFAULT_WHATSAPP_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  buildExternalWhatsAppUrl,
} from '@/lib/whatsapp'

declare global {
  interface Window {
    dataLayer?: unknown[]
    fbq?: (...args: unknown[]) => void
  }
}

export default function WhatsAppRedirect() {
  const [searchParams] = useSearchParams()

  // Preserva mensagem e telefone passados por query string (suporta mensagem/text/msg/phone/tel)
  const rawMessage =
    searchParams.get('mensagem') ||
    searchParams.get('text') ||
    searchParams.get('msg') ||
    DEFAULT_WHATSAPP_MESSAGE

  const rawPhone =
    searchParams.get('phone') ||
    searchParams.get('telefone') ||
    searchParams.get('tel') ||
    DEFAULT_WHATSAPP_PHONE

  const origem = searchParams.get('origem') || 'site'

  const finalUrl = useMemo(
    () => buildExternalWhatsAppUrl(rawMessage, rawPhone),
    [rawMessage, rawPhone],
  )

  const [secondsLeft, setSecondsLeft] = useState<number>(2)
  const [redirected, setRedirected] = useState<boolean>(false)

  useEffect(() => {
    document.title = 'Conectando ao WhatsApp... - Bagageiros e Cia'

    // 1. Dispara evento no dataLayer (GTM)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'whatsapp_click',
        event_category: 'Contact',
        event_action: 'Click WhatsApp',
        event_label: origem,
        whatsapp_phone: rawPhone,
        whatsapp_message: rawMessage,
        page_path: window.location.pathname + window.location.search,
        timestamp: new Date().toISOString(),
      })

      // 2. Dispara evento no Pixel da Meta (se fbq já estiver presente no site)
      if (typeof window.fbq === 'function') {
        try {
          window.fbq('trackCustom', 'WhatsAppClick', {
            origem,
            phone: rawPhone,
          })
          window.fbq('track', 'Contact', {
            content_name: 'WhatsApp Lead',
            content_category: origem,
          })
        } catch (err) {
          console.warn('[Pixel] Erro ao registrar clique do WhatsApp:', err)
        }
      }
    }

    // Contagem regressiva visual
    const timerInterval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    // Redireciona após 1.5s a 2s (dando tempo para GTM e Meta Pixel dispararem seus beacons)
    const redirectTimeout = setTimeout(() => {
      setRedirected(true)
      window.location.href = finalUrl
    }, 1800)

    return () => {
      clearInterval(timerInterval)
      clearTimeout(redirectTimeout)
    }
  }, [finalUrl, origem, rawMessage, rawPhone])

  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6 animate-fade-in relative overflow-hidden">
        {/* Barra superior com indicador de carregamento animado */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-[#25D366] animate-pulse w-full" />
        </div>

        {/* Ícone principal com pulsar */}
        <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <MessageCircle className="w-10 h-10 fill-current" />
          </div>
        </div>

        {/* Título e status */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
            Conectando com o atendente
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Aguarde, abrindo o WhatsApp...
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            Você está sendo redirecionado para o atendimento oficial da{' '}
            <strong className="text-slate-900">Bagageiros &amp; Cia</strong> em{' '}
            {secondsLeft > 0 ? `${secondsLeft} segundo${secondsLeft > 1 ? 's' : ''}` : 'instantes'}.
          </p>
        </div>

        {/* Resumo do Atendimento */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              WhatsApp Oficial:
            </span>
            <span className="font-bold text-slate-900">{DEFAULT_WHATSAPP_DISPLAY}</span>
          </div>

          <div className="text-xs text-slate-600">
            <span className="block font-semibold text-slate-700 mb-1">Mensagem enviada:</span>
            <p className="italic bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
              &ldquo;{rawMessage}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            Atendimento seguro e direto com Londrina e Região
          </div>
        </div>

        {/* Botão de Fallback imediato */}
        <div className="pt-2 space-y-3">
          <a
            href={finalUrl}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{redirected ? 'Clique aqui se não abrir' : 'Abrir WhatsApp Agora'}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <p className="text-[11px] text-slate-400">
            Não abriu automaticamente? Clique no botão verde acima para continuar.
          </p>
        </div>

        {/* Link para voltar ao site */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-600 transition font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
