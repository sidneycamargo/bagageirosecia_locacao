import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ChevronRight } from 'lucide-react'

export default function Termos() {
  useEffect(() => {
    document.title = 'Termos de Uso e Política de privacidade - Bagageiros e Cia'
  }, [])

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-amber-600 transition">
            Início
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium">
            Termos de Uso e Política de privacidade
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700">
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Documento Legal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Termos de Uso e Política de privacidade
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Bagageiros e Cia • Atualizado e mantido em conformidade
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Quem somos</h2>
            <p className="text-sm leading-relaxed">
              O endereço do nosso site é:{' '}
              <span className="font-mono text-amber-700 font-medium">
                https://bagageirosecia.com.br/wp
              </span>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Comentários</h2>
            <p className="text-sm leading-relaxed">
              Quando os visitantes deixam comentários no site, coletamos os dados mostrados no
              formulário de comentários, além do endereço de IP e de dados do navegador do
              visitante, para auxiliar na detecção de spam.
            </p>
            <p className="text-sm leading-relaxed">
              Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também chamada
              de hash) poderá ser enviada para o Gravatar para verificar se você usa o serviço. A
              política de privacidade do Gravatar está disponível aqui:{' '}
              <a
                href="https://automattic.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 underline"
              >
                https://automattic.com/privacy/
              </a>
              . Depois da aprovação do seu comentário, a foto do seu perfil fica visível
              publicamente junto de seu comentário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Mídia</h2>
            <p className="text-sm leading-relaxed">
              Se você envia imagens para o site, evite enviar as que contenham dados de localização
              incorporados (EXIF GPS). Visitantes podem baixar estas imagens do site e extrair delas
              seus dados de localização.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
            <p className="text-sm leading-relaxed">
              Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site
              nos cookies. Isso visa seu conforto, assim você não precisará preencher seus dados
              novamente quando fizer outro comentário. Estes cookies duram um ano.
            </p>
            <p className="text-sm leading-relaxed">
              Se você tem uma conta e acessa este site, um cookie temporário será criado para
              determinar se seu navegador aceita cookies. Ele não contém nenhum dado pessoal e será
              descartado quando você fechar seu navegador.
            </p>
            <p className="text-sm leading-relaxed">
              Quando você acessa sua conta no site, também criamos vários cookies para salvar os
              dados da sua conta e suas escolhas de exibição de tela. Cookies de login são mantidos
              por dois dias e cookies de opções de tela por um ano. Se você selecionar “Lembrar-me”,
              seu acesso será mantido por duas semanas. Se você se desconectar da sua conta, os
              cookies de login serão removidos.
            </p>
            <p className="text-sm leading-relaxed">
              Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador.
              Este cookie não inclui nenhum dado pessoal e simplesmente indica o ID do post
              referente ao artigo que você acabou de editar. Ele expira depois de 1 dia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Mídia incorporada de outros sites</h2>
            <p className="text-sm leading-relaxed">
              Artigos neste site podem incluir conteúdo incorporado como, por exemplo, vídeos,
              imagens, artigos, etc. Conteúdos incorporados de outros sites se comportam exatamente
              da mesma forma como se o visitante estivesse visitando o outro site.
            </p>
            <p className="text-sm leading-relaxed">
              Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento
              adicional de terceiros e monitorar sua interação com este conteúdo incorporado,
              incluindo sua interação com o conteúdo incorporado se você tem uma conta e está
              conectado com o site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Com quem partilhamos seus dados</h2>
            <p className="text-sm leading-relaxed">
              Se você solicitar uma redefinição de senha, seu endereço de IP será incluído no e-mail
              de redefinição de senha.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Por quanto tempo mantemos os seus dados
            </h2>
            <p className="text-sm leading-relaxed">
              Se você deixar um comentário, o comentário e os seus metadados são conservados
              indefinidamente. Fazemos isso para que seja possível reconhecer e aprovar
              automaticamente qualquer comentário posterior ao invés de retê-lo para moderação.
            </p>
            <p className="text-sm leading-relaxed">
              Para usuários que se registram no nosso site (se houver), também guardamos as
              informações pessoais que fornecem no seu perfil de usuário. Todos os usuários podem
              ver, editar ou excluir suas informações pessoais a qualquer momento (só não é possível
              alterar o seu username). Os administradores de sites também podem ver e editar estas
              informações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Quais os seus direitos sobre seus dados
            </h2>
            <p className="text-sm leading-relaxed">
              Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um
              arquivo exportado dos dados pessoais que mantemos sobre você, inclusive quaisquer
              dados que nos tenha fornecido. Também pode solicitar que removamos qualquer dado
              pessoal que mantemos sobre você. Isto não inclui nenhuns dados que somos obrigados a
              manter para propósitos administrativos, legais ou de segurança.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Para onde enviamos seus dados</h2>
            <p className="text-sm leading-relaxed">
              Comentários de visitantes podem ser marcados por um serviço automático de detecção de
              spam.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
