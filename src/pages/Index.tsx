import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Luggage,
  CalendarCheck,
  CheckCircle2,
  Send,
  HelpCircle,
} from 'lucide-react'
import { BLOG_POSTS, COMMON_FAQ } from '@/data/blogData'

export default function Index() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Bagageiros e Cia - Alugue Bagageiro, rack e transbike para seu carro.'
  }, [])

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      navigate('/obrigado', { state: { from: 'home', name: formState.name } })
    }, 400)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bagageirosecia.com.br/wp/wp-content/uploads/elementor/thumbs/car-with-roof-baggage-trunk-parked-side-street-parking-lot-scaled-p51nmp262wtcatpjksz4ikl8lxt08t0s4c17436jv4.jpg"
            alt="Carro com bagageiro de teto"
            className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105 transform motion-safe:animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Londrina e Região • Locação e Venda
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Viaje com Conforto e Segurança
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Nada mais agradável que viajar tranquilo, com conforto e acima de tudo saber que tem
              segurança para você e sua família.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#bagageiros"
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                Saiba mais
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20alugar%20um%20bagageiro."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-amber-400" />
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Aprecie uma viagem agradável... */}
      <section id="bagageiros" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-100/70 px-3 py-1 rounded-md inline-block">
                Mais Espaço para Sua Viagem
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                Aprecie uma viagem agradável utilizando nossos bagageiros para levar tudo o que
                precisa.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Sabemos que é dificil levar tudo o que queremos em nossa viagem, sempre falta
                espaço. Por mais que tenhamos um bom porta malas ou &ldquo;locais
                estratégicos&rdquo; não é suficiente para guardar tudo aquilo que queremos ou
                precisamos levar.
              </p>
              <div className="pt-2">
                <a
                  href="#home-contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all"
                >
                  Quero saber mais
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src="https://bagageirosecia.com.br/wp/wp-content/uploads/elementor/thumbs/car-with-roof-baggage-trunk-parked-side-street-parking-lot-scaled-p51nmp262wtcatpjksz4ikl8lxt08t0s4c17436jv4.jpg"
                  alt="Carro com bagageiro de teto estacionado"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium drop-shadow">
                  Praticidade e amplo espaço extra
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group sm:translate-y-4">
                <img
                  src="https://bagageirosecia.com.br/wp/wp-content/uploads/elementor/thumbs/young-woman-taking-green-suitcase-out-from-car-roof-rack-travel-vacations-concept-LARGE-p9el990b2boai9e3y9fdb6lr6td9k0jk6b8j85wsg6.jpg"
                  alt="Jovem retirando mala verde do bagageiro de teto"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium drop-shadow">
                  Acesso fácil às bagagens da família
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Temos o que você precisa: Racks, Bagageiros e Transbike */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Temos o que você precisa: Racks, Bagageiros e Transbike.
            </h2>
            <p className="text-lg text-slate-600">
              Racks (travessas) para carros, vários tamanhos de bagageiros e Transbikes.
            </p>
            <div className="pt-2">
              <a
                href="#home-contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all uppercase tracking-wide"
              >
                quero mais informação
              </a>
            </div>
          </div>

          {/* Cards for Racks, Bagageiros, Transbikes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Luggage className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bagageiros de Teto</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Capacidades de 300, 400, 460, 510 e 600 litros. Plástico ABS virgem com proteção UV,
                travas de segurança e amortecedores.
              </p>
              <Link
                to="/portifolio"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                Ver fotos em carros &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Racks &amp; Travessas</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Travessas e racks específicos para seu carro, com fixação precisa e segura sem
                riscar a pintura do veículo.
              </p>
              <Link
                to="/portifolio"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                Ver fotos &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transbike</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Suportes de bicicleta seguros para teto ou engate. Práticos e perfeitos para viagens
                de aventura e lazer.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Transbike."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                Consultar via WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Comprar ou Alugar bagageiros? (4 numbered blocks) */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
            <div>
              <span className="text-amber-400 font-extrabold uppercase text-xs tracking-wider">
                Dúvida Comum
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Comprar ou Alugar bagageiros?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=5543999957139&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20alugar%20um%20bagageiro."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quero Comprar ou Alugar Agora
              </a>
              <a
                href="#home-contact"
                className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
              >
                Mais informações?
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-amber-500/50 transition">
              <div>
                <span className="text-4xl font-black text-amber-500/40 block mb-3">01.</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Alugue se você viaja poucas vezes no ano.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Se você viaja 2 ou 3 vezes no ano, compensa você alugar o bagageiro, pois não
                  necessita fazer manutenções ou reparos quando for necessário. Não se preocupa com
                  instalação, limpeza ou desinstalação do bagageiro.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-amber-500/50 transition">
              <div>
                <span className="text-4xl font-black text-amber-500/40 block mb-3">02.</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Compre quando você viaja necessita constantemente
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Seu uso é constante ou viaja várias vezes no ano? Neste caso compensa sim adquirir
                  um bagageiro. O custo de ter um bagageiro para quem viaja bastante neste caso
                  compensa.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-amber-500/50 transition">
              <div>
                <span className="text-4xl font-black text-amber-500/40 block mb-3">03.</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Necessita utilizar para Passeio
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Se sua necessidade é para passeio, neste caso é aconselhável a sua locação, pois a
                  sua preocupação se restringe apenas vir para instalar ou devolver. Limpeza e
                  armazenamento não passa a ser sua preocupação, mas a nossa.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-amber-500/50 transition">
              <div>
                <span className="text-4xl font-black text-amber-500/40 block mb-3">04.</span>
                <h3 className="text-lg font-bold text-white mb-3">Necessita para uso em serviço</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Como geralmente o uso para serviço requer mais do bagageiro, nós não fazemos
                  locação para este tipo de uso. Neste caso aconselhamos a sua compra, mesmo porque
                  seu uso é mais corriqueiro e não seria interessante a sua locação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Por que alugar bagageiros? (4 numbered blocks) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 border-b border-slate-200 pb-6">
            <div>
              <span className="text-amber-600 font-extrabold uppercase text-xs tracking-wider">
                Vantagens Exclusivas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Por que alugar bagageiros?
              </h2>
            </div>
            <a
              href="#home-contact"
              className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
            >
              Mais informações?
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
              <span className="text-4xl font-black text-amber-500/60 block mb-3">01.</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Viagem com mais conforto</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leve tudo o que precisa sem ter que se preocupar em tentar acomodar aquilo que não
                cabe no porta malas ou ter que colocar aquilo que não coube no porta malas no colo
                ou no pé de alguém. Uma viagem confortável é bem mais tranquila, não acha?
              </p>
            </div>

            {/* 02 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
              <span className="text-4xl font-black text-amber-500/60 block mb-3">02.</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Ter acesso a um bagageiro sempre que precisar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sempre que precisar, ele está higienizado e preparado para instalar em seu carro. Só
                fazer a reserva e instalamos para você. Ah, nem se preocupe com a desinstalação e
                limpeza, fazemos tudo.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
              <span className="text-4xl font-black text-amber-500/60 block mb-3">03.</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Segurança acima de tudo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Uma viagem com segurança e tranquilidade não tem preço. Como tudo vai no porta malas
                e no bagageiro, não é mais necessário colocar dentro do carro correndo o risco de
                machucar alguém.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500 hover:shadow-md transition">
              <span className="text-4xl font-black text-amber-500/60 block mb-3">04.</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Preocupe-se somente com sua viagem
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instalação, desinstalação, limpeza, armazenamento? Esquece, cuidamos de tudo. Apenas
                curta a sua viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured cars from Portfolio */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600">
                Portifólio em Destaque
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Conheça nossos trabalhos instalados
              </h2>
            </div>
            <Link
              to="/portifolio"
              className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              Ver todos os 9 veículos &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition group flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={post.thumbnailUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.capacityText}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                    <h3 className="font-bold text-slate-900 text-lg mt-1 group-hover:text-amber-600 transition">
                      <Link to={`/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/${post.slug}`}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700"
                    >
                      Ver detalhes e fotos &raquo;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Perguntas Frequentes sobre a Locação
            </h2>
          </div>

          <div className="space-y-4">
            {COMMON_FAQ.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-slate-50/50 p-5 open:bg-white open:shadow-sm transition"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-base list-none">
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
      </section>

      {/* Section 6: Quer mais informações ou descontos? Form */}
      <section
        id="home-contact"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-amber-400 font-extrabold uppercase text-xs tracking-wider">
            Atendimento Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-2">
            Quer mais informações ou descontos?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            para receber informações, dicas e participar de nossas promoções com descontos incríveis
            de até 30%.
          </p>

          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-2xl text-left max-w-2xl mx-auto">
            <form onSubmit={handleSubmitLead} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                  Seu E-Mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Qual o modelo do seu carro e data prevista da viagem?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Resposta rápida no mesmo dia
              </span>
              <a
                href="https://wa.me/554399957139/?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20bagageiros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Prefere chamar no WhatsApp?
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
