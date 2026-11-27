// Brazilian Portuguese copy, written from en-US. Mostly impersonal, with "você"
// only where Brazilian Portuguese needs it. Task names, tabs and settings use the
// app's own pt-BR strings.

import type { SiteContent } from './types';
import enUS from './en-US';
import tools from './tools/pt-BR';

const ptBR: SiteContent = {
  home: {
    meta: {
      title: 'Tarefas: app de tarefas periódicas para iPhone, iPad e Mac',
      description: 'Tarefas de casa, contas, remédios do pet e manutenção. O app Tarefas avisa quando cada tarefa periódica vence e guarda o histórico. Grátis para começar.',
    },
    heroAccentBefore: 'Fique em dia com cada ',
    heroAccent: 'tarefa recorrente',
    heroAccentAfter: '',
    intro: 'Tarefas de casa, contas, remédios do pet e manutenção da casa. O app Tarefas avisa quando algo vence e lembra de cada vez que foi feito.',
    useCasesTitle: 'Um app para tudo o que se repete',
    useCasesIntro: 'Do dia do lixo à consulta anual no veterinário, cada tarefa tem a própria agenda e o próprio histórico.',
    historyKicker: 'Histórico',
    historyTitle: 'Saiba exatamente quando foi a última vez',
    historyBody: 'Cada conclusão fica registrada com a data e uma nota opcional, para ver quando o filtro foi trocado, o que o veterinário receitou ou quanto custou o último conserto. Pulou uma semana? Isso também fica registrado.',
    bullets: [
      'Repetição por calendário ou um tempo fixo depois da última conclusão',
      'Lembretes antes do vencimento, no dia e quando estiver atrasada',
      'Widgets para a Tela de Início e a Tela Bloqueada',
      'Compartilhe tarefas com a família pelo iCloud e veja quem fez o quê',
      'Sincroniza entre iPhone, iPad e Mac',
    ],
    reviewsTitle: 'Adorado por manter a rotina em dia',
    reviews: [],
    freeTitle: 'Grátis para começar',
    freeBody: 'Acompanhe até 5 tarefas de graça. O Recurrence Premium desbloqueia tarefas ilimitadas e compartilhadas, com assinatura mensal ou anual, ou uma compra única vitalícia.',
    faqTitle: 'Perguntas',
    faq: [
      { q: 'Qual a diferença entre o app Tarefas e uma lista de tarefas?', a: 'Uma lista de tarefas esquece a tarefa assim que ela é marcada. O app Tarefas agenda a próxima vez e guarda um registro de cada conclusão, com notas, para você saber sempre quando foi a última vez.' },
      { q: 'Posso compartilhar tarefas com minha família?', a: 'Sim. Compartilhe qualquer tarefa pelo iCloud, e as pessoas convidadas também podem concluí-la. O histórico de cada tarefa mostra quem a concluiu e quando.' },
      { q: 'O que acontece se eu perder uma tarefa?', a: 'Ela vai para “Atrasadas” e continua lembrando. Para tarefas que devem simplesmente recomeçar quando forem feitas, escolha “Após a última conclusão”, e as semanas perdidas não se acumulam.' },
    ],
  },

  features: {
    meta: {
      title: 'Recursos: agendas, lembretes e histórico | Tarefas',
      description: 'Repetições flexíveis, lembretes antes e depois do vencimento, histórico com notas, widgets e tarefas compartilhadas pelo iCloud no iPhone, iPad e Mac.',
    },
    h1: 'Tudo o que é preciso para dar conta do que se repete',
    intro: 'O app Tarefas nasceu de uma ideia: uma tarefa periódica nunca termina de verdade. Ela volta, e ajuda saber quando foi feita pela última vez.',
    sections: [
      {
        title: 'Repita em qualquer agenda',
        body: 'Faça uma tarefa se repetir em datas do calendário, como toda quinta-feira ou todo dia 1º, ou um tempo fixo depois da última vez, como 6 semanas depois do último corte de cabelo.',
        points: ['Agendas diárias, semanais, mensais e anuais', 'Repetição um tempo fixo depois da última conclusão', 'Bloqueie uma tarefa para que não seja concluída antes do vencimento'],
        screen: 'add',
      },
      {
        title: 'Um histórico completo para cada rotina',
        body: 'Cada conclusão é guardada com a data e uma nota opcional. As puladas também ficam registradas, para o histórico ser fiel.',
        points: ['Notas em cada conclusão', 'Concluída ou pulada, fica registrada', 'Veja com que frequência uma tarefa é realmente feita'],
        screen: 'history',
      },
      {
        title: 'Lembretes do jeito de cada tarefa',
        body: 'Receba uma notificação dias antes do vencimento, no dia ou quando estiver atrasada. Defina os padrões uma vez ou ajuste cada tarefa.',
        points: ['Antes, no dia e depois do vencimento', 'Notificações configuráveis por tarefa', 'Conclua tarefas com Atalhos da Siri'],
        screen: 'home',
      },
      {
        title: 'Sua lista num relance',
        body: 'Os widgets mostram o que está atrasado, o que vence hoje e o que vem por aí, direto na Tela de Início ou na Tela Bloqueada.',
        points: ['Widgets para a Tela de Início e a Tela Bloqueada', 'Filtre um widget por uma categoria', 'Categorias, busca e filtros no app'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Organize tarefas de casa, contas, pets e mais | Tarefas',
      description: 'Ideias para acompanhar com o app Tarefas: tarefas de casa, contas, remédios do pet, manutenção da casa e do carro, plantas, autocuidado e tarefas em família.',
    },
    h1: 'O que você quer acompanhar?',
    intro: 'O app Tarefas serve para tudo o que se repete. Estas são as formas mais populares de usar, cada uma com uma lista pronta para começar.',
  },

  useCases: {
    chores: {
      meta: { title: 'App de tarefas domésticas e rotina de limpeza | Tarefas', description: 'Dia do lixo, roupa e limpeza em dia. O app Tarefas organiza as tarefas domésticas, avisa quando vencem e mostra quando cada uma foi feita pela última vez.' },
      name: 'Tarefas domésticas',
      blurb: 'Lixo, roupa, limpeza',
      h1: 'Uma lista de tarefas domésticas que lembra quando foi a última vez',
      intro: 'Algumas tarefas têm dia fixo, como levar o lixo para fora. Outras só precisam ser feitas de vez em quando, como lavar os lençóis. O app Tarefas cuida das duas e guarda um histórico, para ninguém ter que adivinhar.',
      sampleTitle: 'Uma lista de tarefas domésticas para começar',
      sample: [
        { name: 'Levar o lixo para fora', schedule: 'Toda quinta-feira' },
        { name: 'Lavar os lençóis', schedule: '1 semana depois de fazer' },
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
        { name: 'Trocar o filtro de ar', schedule: '3 meses depois de fazer' },
      ],
      points: [
        { title: 'Dias fixos ou intervalos flexíveis', body: 'O lixo sai toda quinta-feira. Os lençóis são lavados uma semana depois da última vez, seja quando for.' },
        { title: 'Divida o trabalho', body: 'Compartilhe tarefas com a casa e veja quem cuidou de cada uma.' },
        { title: 'Nada se acumula depois de uma semana agitada', body: 'Tarefas que se repetem a partir da última conclusão simplesmente recomeçam quando são feitas.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'App de lembrete de contas e assinaturas | Tarefas', description: 'Não esqueça mais o aluguel, a fatura do cartão ou uma renovação. O app Tarefas avisa antes do vencimento de cada conta e guarda um registro de cada pagamento.' },
      name: 'Contas e assinaturas',
      blurb: 'Aluguel, cartão, renovações',
      h1: 'Lembretes antes de cada conta vencer, e um registro depois',
      intro: 'Defina a data de vencimento de cada conta e receba um lembrete dias antes. Marque como paga e adicione uma nota, como o valor ou o número de confirmação, para consultar depois.',
      sampleTitle: 'Uma lista de contas para começar',
      sample: [
        { name: 'Pagar o aluguel', schedule: 'Todo dia 1º' },
        { name: 'Pagar a fatura do cartão', schedule: 'Todo dia 20' },
        { name: 'Revisar assinaturas', schedule: '3 meses depois de fazer' },
      ],
      points: [
        { title: 'Lembretes com dias de antecedência', body: 'Escolha com quanta antecedência quer saber de cada conta.' },
        { title: 'Notas em cada pagamento', body: 'Guarde o valor ou o número de confirmação a cada conclusão.' },
        { title: 'Renovações fáceis de esquecer', body: 'Renovações anuais e revisões trimestrais ficam ao lado das contas mensais.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Lembrete de remédios e cuidados com o pet | Tarefas', description: 'Lembre do remédio contra dirofilariose, do antipulgas, do banho e tosa e do veterinário. O app Tarefas avisa na hora certa e registra cada dose e cada consulta.' },
      name: 'Pets',
      blurb: 'Remédios, banho e tosa, veterinário',
      h1: 'Lembretes para o seu pet, com registro de cada dose',
      intro: 'Remédios mensais, banho e tosa a cada poucas semanas e a consulta anual são fáceis de perder de vista. O app Tarefas lembra e registra cada um, para você dizer ao veterinário exatamente quando foi a última dose.',
      sampleTitle: 'Uma lista para o seu pet',
      sample: [
        { name: 'Remédio contra dirofilariose', schedule: 'Todo dia 1º' },
        { name: 'Antipulgas e carrapatos', schedule: 'Todo dia 15' },
        { name: 'Banho e tosa do cachorro', schedule: '6 semanas depois de fazer' },
        { name: 'Consulta no veterinário', schedule: '1 ano depois de fazer' },
      ],
      points: [
        { title: 'Saiba quando foi a última dose', body: 'O histórico mostra cada conclusão, então nada de dose dupla nem esquecida.' },
        { title: 'Notas do veterinário', body: 'Anote o peso ou o que foi receitado em cada consulta.' },
        { title: 'Compartilhado com a casa', body: 'Quem dá o remédio marca como concluído, e todos veem.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'App de manutenção da casa com lembretes | Tarefas', description: 'Acompanhe filtros de ar e de água, testes de detectores de fumaça e tarefas sazonais. O app Tarefas avisa quando a manutenção vence e guarda um registro completo.' },
      name: 'Manutenção da casa',
      blurb: 'Filtros, detectores de fumaça, estações',
      h1: 'Lembretes para a manutenção que só acontece algumas vezes por ano',
      intro: 'Filtros, detectores de fumaça e tarefas sazonais aparecem tão raramente que é fácil esquecer. O app Tarefas conta a partir da última vez e avisa quando é hora de novo.',
      sampleTitle: 'Uma lista de manutenção para começar',
      sample: [
        { name: 'Trocar o filtro de ar', schedule: '3 meses depois de fazer' },
        { name: 'Trocar o filtro de água', schedule: '6 meses depois de fazer' },
        { name: 'Testar detectores de fumaça', schedule: '6 meses depois de fazer' },
      ],
      points: [
        { title: 'Conta a partir da última vez', body: 'Trocou o filtro com atraso? O próximo lembrete acompanha.' },
        { title: 'Um registro da casa', body: 'Anote o tamanho do filtro ou o nome do técnico em cada serviço.' },
        { title: 'Nada na sua agenda', body: 'Tarefas raras ficam fora do calendário até vencerem.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'App de lembretes de manutenção do carro | Tarefas', description: 'Lembre da troca de óleo, da calibragem dos pneus e das palhetas. O app Tarefas avisa quando a manutenção do carro vence e registra a quilometragem e notas.' },
      name: 'Manutenção do carro',
      blurb: 'Óleo, pneus, palhetas',
      h1: 'Lembretes de manutenção do carro, com a quilometragem nas notas',
      intro: 'Troca de óleo, calibragem dos pneus e palhetas novas têm prazos diferentes. O app Tarefas reúne tudo num só lugar e lembra o que foi feito da última vez.',
      sampleTitle: 'Uma lista para o seu carro',
      sample: [
        { name: 'Troca de óleo', schedule: '6 meses depois de fazer' },
        { name: 'Calibrar os pneus', schedule: '1 mês depois de fazer' },
        { name: 'Trocar as palhetas', schedule: '1 ano depois de fazer' },
        { name: 'Lavar o carro', schedule: '2 semanas depois de fazer' },
      ],
      points: [
        { title: 'Quilometragem em cada revisão', body: 'Anote a leitura do hodômetro como nota ao concluir uma tarefa.' },
        { title: 'Todos os carros numa lista', body: 'Use uma categoria por carro para não misturar.' },
        { title: 'Lembretes com antecedência', body: 'Saiba antes que uma revisão vença, não depois.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'App de lembrete para regar plantas | Tarefas', description: 'Regue cada planta no próprio ritmo. O app Tarefas avisa quando uma planta precisa de água, conta a partir da última rega e mostra quem regou.' },
      name: 'Plantas e jardim',
      blurb: 'Rega, adubo, troca de vaso',
      h1: 'Lembretes de rega que contam a partir da última rega',
      intro: 'Plantas não seguem o calendário. O app Tarefas avisa um tempo fixo depois da última rega, então regar com atraso adia a próxima também.',
      sampleTitle: 'Uma lista para as suas plantas',
      sample: [
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
      ],
      points: [
        { title: 'A partir da última rega', body: 'O próximo lembrete começa quando a planta foi regada de verdade.' },
        { title: 'Veja quem regou', body: 'Quando uma tarefa de plantas é compartilhada, o histórico mostra quem regou e quando.' },
        { title: 'Notas para cada planta', body: 'Registre adubação ou troca de vaso junto com o histórico de rega.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Lembretes de autocuidado: cabelo, dentista e mais | Tarefas', description: 'Corte de cabelo, consulta no dentista, escova de dentes nova e vitaminas: o app Tarefas avisa na hora certa e lembra quando foi a última vez.' },
      name: 'Autocuidado',
      blurb: 'Cabelo, dentista, vitaminas',
      h1: 'Lembretes para os compromissos que é fácil adiar',
      intro: 'Cortar o cabelo a cada seis semanas, ir ao dentista duas vezes por ano e trocar a escova de dentes a cada três meses. O app Tarefas guarda as datas para você.',
      sampleTitle: 'Uma lista de autocuidado para começar',
      sample: [
        { name: 'Cortar o cabelo', schedule: '6 semanas depois de fazer' },
        { name: 'Trocar a escova de dentes', schedule: '3 meses depois de fazer' },
        { name: 'Consulta no dentista', schedule: '6 meses depois de fazer' },
        { name: 'Tomar vitaminas', schedule: 'Todos os dias' },
      ],
      points: [
        { title: 'Saiba quando foi a última vez', body: 'O histórico responde “quando foi minha última consulta?” num segundo.' },
        { title: 'Todo dia ou duas vezes por ano', body: 'Hábitos diários e compromissos raros ficam numa lista só.' },
        { title: 'Privado por padrão', body: 'Suas tarefas ficam na sua conta do iCloud, a menos que você as compartilhe.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'App de tarefas compartilhadas em família | Tarefas', description: 'Compartilhe tarefas periódicas com a família pelo iCloud. Todos podem concluí-las, e o histórico de cada tarefa mostra quem fez e quando.' },
      name: 'Tarefas em família',
      blurb: 'Veja quem fez e quando',
      h1: 'Tarefas periódicas compartilhadas para a casa toda',
      intro: 'Compartilhe tarefas pelo iCloud e todas as pessoas convidadas podem concluí-las. O histórico mostra quem cuidou de cada uma, e acabou o “você deu comida pro cachorro?”',
      sampleTitle: 'Uma lista compartilhada para a casa',
      sample: [
        { name: 'Levar o lixo para fora', schedule: 'Toda quinta-feira' },
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
        { name: 'Remédio contra dirofilariose', schedule: 'Todo dia 1º' },
      ],
      points: [
        { title: 'Compartilhado pelo iCloud', body: 'Convide familiares para qualquer tarefa com o compartilhamento do iCloud. Eles só precisam do app Tarefas e de uma conta do iCloud.' },
        { title: 'Veja quem fez', body: 'Cada conclusão de uma tarefa compartilhada mostra quem a marcou.' },
        { title: 'Todos recebem lembretes', body: 'Cada pessoa configura os lembretes que funcionam para ela.' },
      ],
      screen: 'history',
      related: ['chores', 'pets', 'plants'],
    },
  },

  // Comparison pages are English drafts until phase 4.
  compareHub: enUS.compareHub,
  compare: enUS.compare,

  support: {
    meta: {
      title: 'Suporte e ajuda | Tarefas',
      description: 'Ajuda com o app Tarefas: sincronização, compartilhamento, lembretes, widgets e Premium. Respostas às dúvidas mais comuns e como falar conosco.',
    },
    h1: 'Como podemos ajudar?',
    intro: 'Respostas às perguntas mais comuns sobre o app Tarefas.',
    contact: { q: 'Tem outra pergunta?', a: 'Envie um e-mail para support@shayesapps.com.' },
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'Minhas tarefas não estão sincronizando entre os dispositivos.', a: 'O app Tarefas sincroniza pelo iCloud. Em cada dispositivo, confira se a sessão do iCloud está iniciada com a mesma Conta Apple, se há conexão com a internet e se o armazenamento do iCloud não está cheio. Confira também se o app Tarefas tem permissão para usar o iCloud no app Ajustes, em seu nome > iCloud. No app Tarefas, Ajustes > iCloud mostra o status da sincronização. Se ainda não sincronizar, toque em “Compartilhar relatório de sincronização” nessa tela e envie o relatório para nós.' },
      { q: 'Como compartilho tarefas com alguém?', a: 'Toque e segure uma tarefa na lista e escolha “Compartilhar”, ou toque no botão de compartilhar no topo da tarefa. Escolha quem convidar e se a pessoa pode fazer alterações ou só ver. As pessoas convidadas precisam do app Tarefas e de uma conta do iCloud. Para parar de compartilhar, abra o mesmo menu, que agora mostra “Compartilhamento”. Apagar uma tarefa compartilhada apaga a tarefa para todos.' },
      { q: 'Não estou recebendo lembretes.', a: 'Primeiro confira se as notificações do app Tarefas estão permitidas no app Ajustes, em Notificações, e se nenhum modo Foco está silenciando os alertas. No app Tarefas, Ajustes > Notificações mostra se a permissão está ativada. Cada tarefa tem os próprios lembretes na seção Notificações ao editar: antes do vencimento, no dia ou quando estiver atrasada. Ajustes > Padrões > Notificações define os lembretes com que as novas tarefas começam. O iOS limita quantos lembretes um app pode agendar com antecedência, então abra o app Tarefas de vez em quando para continuar recebendo.' },
      { q: 'Como restauro minha compra do Premium?', a: 'No app Tarefas, vá em Ajustes, toque em “Explorar” no banner do Recurrence Premium e depois em “Restaurar” na parte de baixo da tela. Confira se a sessão está iniciada com a Conta Apple usada na compra do Premium.' },
      { q: 'Posso testar o Premium antes?', a: 'Sim. O Recurrence Premium inclui um teste grátis, mostrado na App Store antes de assinar.' },
      { q: 'O Premium funciona em todos os meus dispositivos?', a: 'Sim. Uma compra desbloqueia o Premium no iPhone, iPad e Mac, e pode ser compartilhada com a família pelo Compartilhamento Familiar.' },
      { q: 'Como cancelo minha assinatura?', a: 'As assinaturas são gerenciadas nos ajustes da sua Conta Apple e podem ser canceladas a qualquer momento, até 24 horas antes da próxima renovação.' },
    ],
  },

  press: {
    meta: {
      title: 'Kit de imprensa | Tarefas',
      description: 'Kit de imprensa do app Tarefas: descrição do app, dados principais, capturas de tela, ícone e contato para jornalistas e avaliadores.',
    },
    h1: 'Kit de imprensa',
    intro: 'Tarefas é um app de tarefas periódicas para iPhone, iPad e Mac, da Shayes Apps, um desenvolvedor independente. Ele avisa quando cada tarefa vence e guarda o histórico de cada conclusão.',
    facts: [
      { label: 'Desenvolvedor', value: 'Shayes Apps' },
      { label: 'Plataformas', value: 'iPhone, iPad, Mac' },
      { label: 'Preço', value: 'Grátis, com assinatura opcional' },
      { label: 'Idiomas', value: '16' },
      { label: 'Avaliação na App Store', value: '4,7+ estrelas' },
    ],
    kitTitle: 'Baixe o kit',
    kitBody: 'Capturas de tela, capturas com moldura, o ícone do app e um banner (em inglês).',
    kitLink: 'Baixar kit de imprensa (ZIP, 12 MB)',
    contactTitle: 'Contato para imprensa',
    contactBody: 'support@shayesapps.com',
  },

  tools,
  screenAlt: {
    home: 'Lista de tarefas do app Tarefas no iPhone com tarefas atrasadas, de hoje e próximas',
    history: 'O histórico de uma tarefa com datas e notas',
    widgets: 'Widgets do app Tarefas na Tela de Início do iPhone',
    add: 'Edição de uma tarefa que se repete 4 semanas depois da última conclusão',
  },

  labels: {
    sampleList: 'Lista de exemplo',
    whatYouGet: 'Por que funciona',
    relatedUseCases: 'Mais ideias',
    allUseCases: 'Todas as ideias',
    comparedOn: 'O que comparamos',
    feature: 'Recurso',
    whenOtherTitle: 'Quando o outro app pode ser melhor para você',
    verdictTitle: 'Resumindo',
    lastChecked: 'Última verificação',
    lastUpdated: 'Última atualização',
    faqTitle: 'Perguntas',
    readMore: 'Saiba mais',
    fiveStars: '5 de 5 estrelas',
  },
};

export default ptBR;
