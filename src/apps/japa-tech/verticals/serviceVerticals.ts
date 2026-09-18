export type ServiceVertical = {
  route: string
  equipment: string
  eyebrow: string
  heading: string
  supporting: string
  scope: string
  placeholder: string
  whatsappMessage: string
}

export const serviceVerticals = {
  notebook: {
    route: '/assistencia-tecnica/notebook',
    equipment: 'notebook',
    eyebrow: 'ASSISTÊNCIA TÉCNICA DE NOTEBOOK',
    heading: 'Assistência técnica de notebook no DF e Entorno',
    supporting: 'Avaliação e reparo de notebooks pela Japa Tech, com atendimento no Distrito Federal e Entorno.',
    scope: 'Seu notebook pode ser avaliado pela Japa Tech para identificação do problema e definição do reparo adequado.',
    placeholder: 'ESPAÇO RESERVADO PARA IMAGEM DE NOTEBOOK',
    whatsappMessage: 'Olá, Japa Tech. Preciso de assistência para meu notebook.',
  },
  computador: {
    route: '/assistencia-tecnica/computador',
    equipment: 'computador',
    eyebrow: 'ASSISTÊNCIA TÉCNICA DE COMPUTADOR',
    heading: 'Assistência técnica de computador no DF e Entorno',
    supporting: 'Avaliação e reparo de computadores e desktops pela Japa Tech, com atendimento no Distrito Federal e Entorno.',
    scope: 'Seu computador pode ser avaliado pela Japa Tech para identificação do problema e definição do reparo adequado.',
    placeholder: 'ESPAÇO RESERVADO PARA IMAGEM DE COMPUTADOR',
    whatsappMessage: 'Olá, Japa Tech. Preciso de assistência para meu computador.',
  },
  monitor: {
    route: '/assistencia-tecnica/monitor',
    equipment: 'monitor',
    eyebrow: 'ASSISTÊNCIA TÉCNICA DE MONITOR',
    heading: 'Assistência técnica de monitor no DF e Entorno',
    supporting: 'Avaliação e reparo de monitores pela Japa Tech, com atendimento no Distrito Federal e Entorno.',
    scope: 'Seu monitor pode ser avaliado pela Japa Tech para identificação do problema e definição do reparo adequado.',
    placeholder: 'ESPAÇO RESERVADO PARA IMAGEM DE MONITOR',
    whatsappMessage: 'Olá, Japa Tech. Preciso de assistência para meu monitor.',
  },
  audio: {
    route: '/assistencia-tecnica/audio',
    equipment: 'áudio',
    eyebrow: 'ASSISTÊNCIA TÉCNICA DE ÁUDIO',
    heading: 'Assistência técnica de áudio no DF e Entorno',
    supporting: 'Avaliação e reparo de caixas de som e equipamentos de áudio pela Japa Tech, com atendimento no Distrito Federal e Entorno.',
    scope: 'Sua caixa de som ou equipamento de áudio pode ser avaliado pela Japa Tech para identificação do problema e definição do reparo adequado.',
    placeholder: 'ESPAÇO RESERVADO PARA IMAGEM DE ÁUDIO',
    whatsappMessage: 'Olá, Japa Tech. Preciso de assistência para meu equipamento de áudio.',
  },
} as const satisfies Record<string, ServiceVertical>

export type ServiceVerticalKey = keyof typeof serviceVerticals
