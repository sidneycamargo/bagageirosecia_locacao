export const DEFAULT_WHATSAPP_PHONE = '5543999957139'
export const DEFAULT_WHATSAPP_DISPLAY = '(43) 99995-7139'
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, gostaria de saber mais sobre bagageiros'

/**
 * Retorna o link interno do site para a página intermediária de contagem /whatsapp
 * Exemplo: getWhatsAppRoute('Olá, gostaria de saber mais...') => '/whatsapp?mensagem=Ol%C3%A1...'
 */
export function getWhatsAppRoute(mensagem?: string, origem?: string): string {
  const params = new URLSearchParams()
  if (mensagem) {
    params.set('mensagem', mensagem)
  }
  if (origem) {
    params.set('origem', origem)
  }
  const query = params.toString()
  return query ? `/whatsapp?${query}` : '/whatsapp'
}

/**
 * Constrói a URL final direta para o wa.me preservando o número e mensagem codificada.
 */
export function buildExternalWhatsAppUrl(mensagem?: string, telefone?: string): string {
  // Limpa caracteres não numéricos
  const rawPhone = telefone || DEFAULT_WHATSAPP_PHONE
  const cleanPhone = rawPhone.replace(/\D/g, '') || DEFAULT_WHATSAPP_PHONE
  const msg = mensagem ?? DEFAULT_WHATSAPP_MESSAGE
  return `https://wa.me/${cleanPhone}/?text=${encodeURIComponent(msg)}`
}
