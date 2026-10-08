export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  dateISO: string
  commentCount: number
  capacityText: string
  thumbnailUrl: string
  images: {
    url: string
    alt: string
  }[]
  excerpt: string
  showTechSpecs?: boolean
  availableCapacities?: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cherry-tiggo-8-com-bagageiros',
    title: 'Cherry Tiggo 8 com Bagageiros',
    subtitle: 'Cherry Tiggo 8 com Bagageiro de 460 Litros',
    date: '27 de abril de 2022',
    dateISO: '2022-04-27',
    commentCount: 0,
    capacityText: '460 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/TIGGO8-460-02-300x165.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/TIGGO8-460-02.jpeg',
        alt: 'Cherry Tiggo 8 com Bagageiro de 460 Litros - Lateral',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/TIGGO8-460-01.jpeg',
        alt: 'Cherry Tiggo 8 com Bagageiro de 460 Litros - Frente',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/TIGGO8-460-03.jpeg',
        alt: 'Cherry Tiggo 8 com Bagageiro de 460 Litros - Traseira',
      },
    ],
    excerpt:
      'Cherry Tiggo 8 com Bagageiro de 460 Litros. Trabalhamos com os mais diversos tamanhos de Bagageiros: 300, 400, 460, 510 e 600 litros.',
    showTechSpecs: true,
    availableCapacities: ['600 litros', '460 litros'],
  },
  {
    slug: 'i30-com-bagageiros',
    title: 'Commander com Bagageiros',
    subtitle: 'commander com Bagageiros - Bagageiros 600 litros',
    date: '27 de abril de 2022',
    dateISO: '2022-04-27',
    commentCount: 0,
    capacityText: '600 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/COMMANDER-600-300x163.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/COMMANDER-600-1024x556.jpeg',
        alt: 'Jeep Commander com Bagageiro 600 Litros - Lateral',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/commander-600-FRENTE-.jpg',
        alt: 'Jeep Commander com Bagageiro 600 Litros - Frente',
      },
    ],
    excerpt:
      'commander com Bagageiros Bagageiros 600 litros. Trabalhamos com aluguel e venda de bagageiros de alta capacidade.',
    showTechSpecs: true,
    availableCapacities: ['600 litros'],
  },
  {
    slug: 'fiesta-com-bagageiros',
    title: 'Fiesta com Bagageiros',
    subtitle: 'Fiesta com bagageiro de 400 Litros',
    date: '22 de julho de 2021',
    dateISO: '2021-07-22',
    commentCount: 0,
    capacityText: '400 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/FIESTA-400-L-300x168.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/FIESTA-400-L.jpeg',
        alt: 'Ford Fiesta com Bagageiro de 400 Litros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/FIESTA-400-FRENTE.jpeg',
        alt: 'Ford Fiesta com Bagageiro de 400 Litros - Vista Dianteira',
      },
    ],
    excerpt:
      'Fiesta com bagageiro de 400 Litros. Perfeito para viagens curtas e longas com conforto e segurança extra.',
    showTechSpecs: true,
    availableCapacities: ['400 litros'],
  },
  {
    slug: 'civic-com-bagageiros',
    title: 'Honda Civic com Bagageiros',
    subtitle: 'Honda Civic com Bagageiros - Com Bagageiro de 510 litros',
    date: '29 de abril de 2022',
    dateISO: '2022-04-29',
    commentCount: 0,
    capacityText: '510 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-lateral-motorista-300x169.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-lateral-motorista-1024x576.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Lateral motorista',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-lateral-motorista-teto-1024x768.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Lateral teto',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-frente-1024x768.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Frente',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-frente-teto-1024x576.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Frente teto',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-trazeira.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Traseira',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/civic-510-trazeira-teto-1024x576.jpeg',
        alt: 'Honda Civic com Bagageiro 510L - Traseira teto',
      },
    ],
    excerpt:
      'Honda Civic com Bagageiros Com Bagageiro de 510 litros. Excelente capacidade de carga sem perder a elegância do sedã.',
    showTechSpecs: true,
    availableCapacities: ['510 litros'],
  },
  {
    slug: 'hyundai-santa-fe-com-bagageiros',
    title: 'Hyundai Santa Fé com Bagageiros',
    subtitle: 'Hyundai Santa Fé com Bagageiro de 600 Litros',
    date: '27 de abril de 2022',
    dateISO: '2022-04-27',
    commentCount: 0,
    capacityText: '600 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/09/WhatsApp-Image-2022-04-20-at-09.34.41-3-300x171.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/09/WhatsApp-Image-2022-04-20-at-09.34.41-3.jpeg',
        alt: 'Hyundai Santa Fé com Bagageiro de 600 Litros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/09/WhatsApp-Image-2022-04-20-at-09.34.41-1.jpeg',
        alt: 'Hyundai Santa Fé com Bagageiro de 600 Litros - Lateral',
      },
    ],
    excerpt:
      'Hyundai Santa Fé com Bagageiro de 600 Litros. Maior espaço para viagens em família com total estabilidade.',
    showTechSpecs: true,
    availableCapacities: ['600 litros'],
  },
  {
    slug: 'onix-com-bagageiros',
    title: 'Onix com Bagageiros',
    subtitle: 'Onix com Bagageiros - Bagageiros 400 litros',
    date: '27 de abril de 2022',
    dateISO: '2022-04-27',
    commentCount: 0,
    capacityText: '400 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/ONIX-400L-300x161.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/ONIX-400L.jpeg',
        alt: 'Chevrolet Onix com Bagageiro de 400 Litros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/04/ONIX-400L-FRENTE.jpeg',
        alt: 'Chevrolet Onix com Bagageiro de 400 Litros - Frente',
      },
    ],
    excerpt:
      'Onix com Bagageiros Bagageiros 400 litros. Dobra o espaço para bagagens no hatch mais popular do Brasil.',
    showTechSpecs: true,
    availableCapacities: ['400 litros'],
  },
  {
    slug: 'peugeot-206-e-207-com-bagageiros',
    title: 'Peugeot 206 e 207 com Bagageiros',
    subtitle: 'Peugeot 206, 207 e Passion com Rack e Bagageiros',
    date: '25 de agosto de 2022',
    dateISO: '2022-08-25',
    commentCount: 0,
    capacityText: '460 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/08/20211103_120935-300x146.jpg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/08/20211103_120935.jpg',
        alt: 'Peugeot 206 e 207 com Rack e Bagageiros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2022/08/20211103_120948.jpg',
        alt: 'Peugeot 206 e 207 com Rack e Bagageiros - Traseira',
      },
    ],
    excerpt:
      'Peugeot 206, 207 e Passion com Rack e Bagageiros. Trabalhamos com os mais diversos tamanhos: 300, 400, 460, 510 e 600 litros.',
    showTechSpecs: true,
    availableCapacities: ['400 litros', 'Apenas com Rack'],
  },
  {
    slug: 'spin-com-bagageiros',
    title: 'Spin com Bagageiros',
    subtitle: 'Bagageiros instalado na SPIN - Bagageiros 600 litros',
    date: '22 de julho de 2021',
    dateISO: '2021-07-22',
    commentCount: 0,
    capacityText: '600 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-SPIN-MOVIDA-300x169.jpg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-SPIN-1024x498.jpg',
        alt: 'Chevrolet Spin com Bagageiro 600 Litros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-SPIN-MOVIDA-1024x576.jpg',
        alt: 'Chevrolet Spin com Bagageiro 600 Litros - Vista ampla',
      },
    ],
    excerpt:
      'Bagageiros instalado na SPIN Bagageiros 600 litros. Ideal para quem usa os 7 lugares e precisa de espaço para malas.',
    showTechSpecs: true,
    availableCapacities: ['600 litros'],
  },
  {
    slug: 'trailblazer-com-bagageiros',
    title: 'Trailblazer com Bagageiros',
    subtitle: 'Trailblazer com Bagageiro de 600 Litros',
    date: '22 de julho de 2021',
    dateISO: '2021-07-22',
    commentCount: 0,
    capacityText: '600 Litros',
    thumbnailUrl:
      'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-TRAILBLAZER-300x146.jpeg',
    images: [
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-TRAILBLAZER.jpeg',
        alt: 'Chevrolet Trailblazer com Bagageiro de 600 Litros',
      },
      {
        url: 'https://bagageirosecia.com.br/wp/wp-content/uploads/2021/07/600-TRAILBLAZER-FRENTE.jpeg',
        alt: 'Chevrolet Trailblazer com Bagageiro de 600 Litros - Frente',
      },
    ],
    excerpt:
      'Trailblazer com Bagageiro de 600 Litros. Espaço extremo para aventuras, ecoturismo e viagens longas com a família.',
    showTechSpecs: true,
    availableCapacities: ['600 litros'],
  },
]

export const COMMON_FAQ = [
  {
    q: 'Como funciona a locação?',
    a: 'O valor da locação depende da quantidade de dias, quanto mais dias menos você irá pagar pela diária.',
  },
  {
    q: 'Como é contado a diária?',
    a: 'O valor é calculado por pernoite desde o dia da instalação até o dia da devolução.',
  },
  {
    q: 'E a instalação, como é?',
    a: 'Não se preocupe, nós entregamos instalado e retiramos no dia da devolução.',
  },
  {
    q: 'Tenho que levar o carro para instalar?',
    a: 'Sim, tem que trazer o carro até nossa loja para fazermos a instalação e para a devolução também.',
  },
  {
    q: 'Preciso entregar limpo o bagageiro ou o rack?',
    a: 'Não, nós fazemos a limpeza, basta fazer a entrega no dia da devolução.',
  },
  {
    q: 'Se eu precisar ficar mais dias, o que preciso fazer?',
    a: 'Caso necessite ficar mais dias que o contratado, é necessário entrar em contato conosco para verificar a disponibilidade, havendo disponibilidade será cobrado apenas as diárias a mais.',
  },
  {
    q: 'Tem que ter autorização ou carteira especial para utilizar o bagageiro?',
    a: 'Não, a legislação não requer qualquer tipo de autorização ou carteira especial para utilizar o bagageiro, apenas seguir as normas de trânsito.',
  },
]

export const TECH_SPECS = {
  description: [
    'Maleiro fabricado em plástico ABS virgem com proteção UV.',
    'Design totalmente novo e moderno.',
    'Produto de alta qualidade.',
    'Proporciona segurança e comodidade ao transportar a bagagem no teto do veículo.',
    'Sistema de abertura lateral com duplo amortecedor a gás.',
    'Fechamento lateral utilizando um sistema exclusivo de chaveamento da Motobul.',
    'Além da trava lateral com chave, possui mais duas travas de segurança, sendo uma dianteira e uma traseira.',
    'Modelo LIGHT da marca Motobul.',
    'Capacidade de 460 L (ou 300L, 400L, 510L, 600L de acordo com o modelo).',
    'Cor preta.',
    'Garantia de 6 meses.',
  ],
  specs: [
    'Maleiro fabricado em plástico ABS com proteção UV pesando apenas 10,1 Kg.',
    'Capacidade máxima de carga distribuída de 45 Kg.',
    'Mede 1,42 x 0,92 x 0,45 m.',
    'Sistema de abertura com 02 amortecedores a gás.',
    'Travamento central com chave (acompanha 2 chaves).',
    'Tripla trava de segurança, sendo uma lateral com chave, uma dianteira e uma traseira.',
  ],
  packageContent: ['01 maleiro.', '04 ganchos para fixação.', 'Manual.'],
  installation: [
    'Fixado diretamente no rack ou na travessa do veículo.',
    'Necessita furar o maleiro para colocar o gancho na posição correta do rack ou da travessa.',
  ],
  application: 'Produto universal.',
}
