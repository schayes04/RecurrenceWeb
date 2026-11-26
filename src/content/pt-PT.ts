// European Portuguese copy, adapted from pt-BR. Formal "a sua" without "você",
// as the app does. Task names, tabs and settings use the app's pt-PT strings
// (Definições, Predefinições, Partilhar, Ignorar).

import type { SiteContent } from './types';
import enUS from './en-US';

const ptPT: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence: tarefas periódicas para iPhone, iPad e Mac',
      description: 'Lides domésticas, contas, medicamentos dos animais e manutenção. A Recurrence avisa quando cada tarefa periódica vence e guarda o histórico. Grátis para começar.',
    },
    heroAccentBefore: 'Esteja em dia com cada ',
    heroAccent: 'tarefa recorrente',
    heroAccentAfter: '',
    intro: 'Lides domésticas, contas, medicamentos dos animais e manutenção da casa. A Recurrence avisa quando algo vence e lembra-se de cada vez que foi feito.',
    useCasesTitle: 'Uma app para tudo o que se repete',
    useCasesIntro: 'Do dia do lixo à consulta anual no veterinário, cada tarefa tem o seu próprio calendário e histórico.',
    historyKicker: 'Histórico',
    historyTitle: 'Saiba exatamente quando foi a última vez',
    historyBody: 'Cada conclusão fica registada com a data e uma nota opcional, para ver quando o filtro foi mudado, o que o veterinário receitou ou quanto custou a última reparação. Ignorou uma semana? Isso também fica registado.',
    bullets: [
      'Repetição por calendário ou um tempo fixo depois da última conclusão',
      'Lembretes antes do prazo, no próprio dia e quando estiver atrasada',
      'Widgets para o ecrã principal e o ecrã bloqueado',
      'Partilhe tarefas com a família através do iCloud e veja quem fez o quê',
      'Sincroniza entre iPhone, iPad e Mac',
    ],
    reviewsTitle: 'Adorada por manter a rotina em dia',
    reviews: [],
    freeTitle: 'Grátis para começar',
    freeBody: 'Acompanhe até 5 tarefas gratuitamente. A Recurrence Premium desbloqueia tarefas ilimitadas e partilhadas, com uma subscrição mensal ou anual, ou uma compra única vitalícia.',
    faqTitle: 'Perguntas',
    faq: [
      { q: 'Qual é a diferença entre a Recurrence e uma lista de tarefas?', a: 'Uma lista de tarefas esquece a tarefa assim que é marcada. A Recurrence agenda a próxima vez e guarda um registo de cada conclusão, com notas, para saber sempre quando foi a última vez.' },
      { q: 'Posso partilhar tarefas com a minha família?', a: 'Sim. Partilhe qualquer tarefa através do iCloud, e as pessoas convidadas também a podem concluir. O histórico de cada tarefa mostra quem a concluiu e quando.' },
      { q: 'O que acontece se falhar uma tarefa?', a: 'Passa para “Atrasadas” e continua a lembrar. Para tarefas que devem simplesmente recomeçar quando forem feitas, escolha “Após a última conclusão”, e as semanas falhadas não se acumulam.' },
    ],
  },

  features: {
    meta: {
      title: 'Funcionalidades: calendários, lembretes e histórico | Recurrence',
      description: 'Repetições flexíveis, lembretes antes e depois do prazo, histórico com notas, widgets e tarefas partilhadas através do iCloud no iPhone, iPad e Mac.',
    },
    h1: 'Tudo o que precisa para dar conta do que se repete',
    intro: 'A Recurrence nasceu de uma ideia: uma tarefa periódica nunca termina realmente. Volta sempre, e ajuda saber quando foi feita pela última vez.',
    sections: [
      {
        title: 'Repita com qualquer calendário',
        body: 'Faça uma tarefa repetir-se em datas do calendário, como todas as quintas-feiras ou no dia 1 de cada mês, ou um tempo fixo depois da última vez, como 6 semanas depois do último corte de cabelo.',
        points: ['Calendários diários, semanais, mensais e anuais', 'Repetição um tempo fixo depois da última conclusão', 'Bloqueie uma tarefa para que não seja concluída antes do prazo'],
        screen: 'add',
      },
      {
        title: 'Um histórico completo para cada rotina',
        body: 'Cada conclusão é guardada com a data e uma nota opcional. As ignoradas também ficam registadas, para o histórico ser fiel.',
        points: ['Notas em cada conclusão', 'Concluída ou ignorada, fica registada', 'Veja com que frequência uma tarefa é realmente feita'],
        screen: 'history',
      },
      {
        title: 'Lembretes à medida de cada tarefa',
        body: 'Receba uma notificação dias antes do prazo, no próprio dia ou quando estiver atrasada. Defina as predefinições uma vez ou ajuste cada tarefa.',
        points: ['Antes, no dia e depois do prazo', 'Notificações configuráveis por tarefa', 'Conclua tarefas com Atalhos da Siri'],
        screen: 'home',
      },
      {
        title: 'A sua lista num relance',
        body: 'Os widgets mostram o que está atrasado, o que vence hoje e o que vem a seguir, diretamente no ecrã principal ou no ecrã bloqueado.',
        points: ['Widgets para o ecrã principal e o ecrã bloqueado', 'Filtre um widget por uma categoria', 'Categorias, pesquisa e filtros na app'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Organize lides domésticas, contas, animais e mais | Recurrence',
      description: 'Ideias para acompanhar com a Recurrence: lides domésticas, contas, medicamentos dos animais, manutenção da casa e do carro, plantas, autocuidado e família.',
    },
    h1: 'O que quer acompanhar?',
    intro: 'A Recurrence serve para tudo o que se repete. Estas são as formas mais populares de a usar, cada uma com uma lista pronta para começar.',
  },

  useCases: {
    chores: {
      meta: { title: 'App de lides domésticas e rotina de limpeza | Recurrence', description: 'Dia do lixo, roupa e limpezas em dia. A Recurrence organiza as tarefas domésticas, avisa quando vencem e mostra quando cada uma foi feita pela última vez.' },
      name: 'Lides domésticas',
      blurb: 'Lixo, roupa, limpezas',
      h1: 'Uma lista de tarefas domésticas que se lembra de quando foi a última vez',
      intro: 'Algumas tarefas têm dia fixo, como levar o lixo. Outras só precisam de ser feitas de vez em quando, como lavar os lençóis. A Recurrence trata das duas e guarda um histórico, para ninguém ter de adivinhar.',
      sampleTitle: 'Uma lista de lides domésticas para começar',
      sample: [
        { name: 'Levar o lixo', schedule: 'Todas as quintas-feiras' },
        { name: 'Lavar os lençóis', schedule: '1 semana depois de fazer' },
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
        { name: 'Mudar o filtro de ar', schedule: '3 meses depois de fazer' },
      ],
      points: [
        { title: 'Dias fixos ou intervalos flexíveis', body: 'O lixo sai todas as quintas-feiras. Os lençóis são lavados uma semana depois da última vez, seja quando for.' },
        { title: 'Divida o trabalho', body: 'Partilhe tarefas com quem vive consigo e veja quem tratou de cada uma.' },
        { title: 'Nada se acumula depois de uma semana agitada', body: 'As tarefas que se repetem a partir da última conclusão simplesmente recomeçam quando são feitas.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'App de lembretes de contas e subscrições | Recurrence', description: 'Não volte a esquecer a renda, o cartão de crédito ou uma renovação. A Recurrence avisa antes do prazo de cada conta e guarda um registo de cada pagamento.' },
      name: 'Contas e subscrições',
      blurb: 'Renda, cartão, renovações',
      h1: 'Lembretes antes de cada conta vencer, e um registo depois',
      intro: 'Defina a data de pagamento de cada conta e receba um lembrete dias antes. Marque-a como paga e adicione uma nota, como o valor ou o número de confirmação, para consultar mais tarde.',
      sampleTitle: 'Uma lista de contas para começar',
      sample: [
        { name: 'Pagar a renda', schedule: 'Todos os meses no dia 1' },
        { name: 'Pagar o cartão de crédito', schedule: 'Todos os meses no dia 20' },
        { name: 'Rever subscrições', schedule: '3 meses depois de fazer' },
      ],
      points: [
        { title: 'Lembretes com dias de antecedência', body: 'Escolha com quanta antecedência quer saber de cada conta.' },
        { title: 'Notas em cada pagamento', body: 'Guarde o valor ou o número de confirmação em cada conclusão.' },
        { title: 'Renovações fáceis de esquecer', body: 'Renovações anuais e revisões trimestrais ficam ao lado das contas mensais.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Lembretes de medicamentos e cuidados com animais | Recurrence', description: 'Lembre-se do medicamento contra a dirofilariose, do antipulgas, do banho e tosquia e do veterinário. A Recurrence avisa a tempo e regista cada dose e consulta.' },
      name: 'Animais de estimação',
      blurb: 'Medicamentos, banho e tosquia, veterinário',
      h1: 'Lembretes para o seu animal, com registo de cada dose',
      intro: 'Medicamentos mensais, banho e tosquia a cada poucas semanas e a consulta anual são fáceis de perder de vista. A Recurrence lembra e regista cada um, para dizer ao veterinário exatamente quando foi a última dose.',
      sampleTitle: 'Uma lista para o seu animal',
      sample: [
        { name: 'Medicamento contra a dirofilariose', schedule: 'Todos os meses no dia 1' },
        { name: 'Antipulgas e carraças', schedule: 'Todos os meses no dia 15' },
        { name: 'Banho e tosquia do cão', schedule: '6 semanas depois de fazer' },
        { name: 'Consulta no veterinário', schedule: '1 ano depois de fazer' },
      ],
      points: [
        { title: 'Saiba quando foi a última dose', body: 'O histórico mostra cada conclusão, por isso não há doses a dobrar nem esquecidas.' },
        { title: 'Notas do veterinário', body: 'Anote o peso ou o que foi receitado em cada consulta.' },
        { title: 'Partilhado com a família', body: 'Quem dá o medicamento marca-o como concluído, e todos veem.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'App de manutenção da casa com lembretes | Recurrence', description: 'Acompanhe filtros de ar e de água, testes dos detetores de fumo e tarefas sazonais. A Recurrence avisa quando a manutenção vence e guarda um registo completo.' },
      name: 'Manutenção da casa',
      blurb: 'Filtros, detetores de fumo, estações',
      h1: 'Lembretes para a manutenção que só acontece algumas vezes por ano',
      intro: 'Filtros, detetores de fumo e tarefas sazonais aparecem tão raramente que é fácil esquecê-los. A Recurrence conta a partir da última vez e avisa quando chega a altura de novo.',
      sampleTitle: 'Uma lista de manutenção para começar',
      sample: [
        { name: 'Mudar o filtro de ar', schedule: '3 meses depois de fazer' },
        { name: 'Mudar o filtro de água', schedule: '6 meses depois de fazer' },
        { name: 'Testar os detetores de fumo', schedule: '6 meses depois de fazer' },
      ],
      points: [
        { title: 'Conta a partir da última vez', body: 'Mudou o filtro com atraso? O próximo lembrete acompanha.' },
        { title: 'Um registo da casa', body: 'Anote o tamanho do filtro ou o nome do técnico em cada intervenção.' },
        { title: 'Nada na sua agenda', body: 'As tarefas raras ficam fora do calendário até chegar o prazo.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'App de lembretes de manutenção do carro | Recurrence', description: 'Lembre-se da mudança de óleo, da pressão dos pneus e das escovas limpa-vidros. A Recurrence avisa quando a manutenção vence e regista os quilómetros e notas.' },
      name: 'Manutenção do carro',
      blurb: 'Óleo, pneus, escovas limpa-vidros',
      h1: 'Lembretes de manutenção do carro, com os quilómetros nas notas',
      intro: 'A mudança de óleo, a pressão dos pneus e as escovas limpa-vidros novas têm prazos diferentes. A Recurrence reúne tudo num só sítio e lembra-se do que foi feito da última vez.',
      sampleTitle: 'Uma lista para o seu carro',
      sample: [
        { name: 'Mudança de óleo', schedule: '6 meses depois de fazer' },
        { name: 'Verificar a pressão dos pneus', schedule: '1 mês depois de fazer' },
        { name: 'Mudar as escovas limpa-vidros', schedule: '1 ano depois de fazer' },
        { name: 'Lavar o carro', schedule: '2 semanas depois de fazer' },
      ],
      points: [
        { title: 'Quilómetros em cada revisão', body: 'Anote a leitura do conta-quilómetros como nota ao concluir uma tarefa.' },
        { title: 'Todos os carros numa lista', body: 'Use uma categoria por carro para não os misturar.' },
        { title: 'Lembretes com antecedência', body: 'Saiba antes de uma revisão chegar ao prazo, e não depois.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'App de lembretes para regar plantas | Recurrence', description: 'Regue cada planta ao seu ritmo. A Recurrence avisa quando uma planta precisa de água, conta a partir da última rega e mostra quem a regou.' },
      name: 'Plantas e jardim',
      blurb: 'Rega, adubo, mudança de vaso',
      h1: 'Lembretes de rega que contam a partir da última rega',
      intro: 'As plantas não seguem o calendário. A Recurrence avisa um tempo fixo depois da última rega, por isso regar com atraso também adia a rega seguinte.',
      sampleTitle: 'Uma lista para as suas plantas',
      sample: [
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
      ],
      points: [
        { title: 'A partir da última rega', body: 'O próximo lembrete começa quando a planta foi realmente regada.' },
        { title: 'Veja quem regou', body: 'Quando uma tarefa de plantas é partilhada, o histórico mostra quem regou e quando.' },
        { title: 'Notas para cada planta', body: 'Registe a adubação ou a mudança de vaso junto ao histórico de rega.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Lembretes de autocuidado: cabelo, dentista e mais | Recurrence', description: 'Corte de cabelo, consulta no dentista, escova de dentes nova e vitaminas: a Recurrence avisa na altura certa e lembra-se de quando foi a última vez.' },
      name: 'Autocuidado',
      blurb: 'Cabelo, dentista, vitaminas',
      h1: 'Lembretes para os compromissos que é fácil adiar',
      intro: 'Cortar o cabelo a cada seis semanas, ir ao dentista duas vezes por ano e trocar a escova de dentes a cada três meses. A Recurrence guarda as datas por si.',
      sampleTitle: 'Uma lista de autocuidado para começar',
      sample: [
        { name: 'Cortar o cabelo', schedule: '6 semanas depois de fazer' },
        { name: 'Trocar a escova de dentes', schedule: '3 meses depois de fazer' },
        { name: 'Consulta no dentista', schedule: '6 meses depois de fazer' },
        { name: 'Tomar vitaminas', schedule: 'Todos os dias' },
      ],
      points: [
        { title: 'Saiba quando foi a última vez', body: 'O histórico responde a “quando foi a minha última consulta?” num segundo.' },
        { title: 'Todos os dias ou duas vezes por ano', body: 'Hábitos diários e compromissos raros ficam numa só lista.' },
        { title: 'Privado por predefinição', body: 'As suas tarefas ficam na sua conta iCloud, a menos que as partilhe.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'App de tarefas partilhadas em família | Recurrence', description: 'Partilhe tarefas periódicas com a família através do iCloud. Todos as podem concluir, e o histórico de cada tarefa mostra quem as fez e quando.' },
      name: 'Tarefas em família',
      blurb: 'Veja quem fez e quando',
      h1: 'Tarefas periódicas partilhadas para toda a casa',
      intro: 'Partilhe tarefas através do iCloud e todas as pessoas convidadas as podem concluir. O histórico mostra quem tratou de cada uma, e acabou o “já deste comida ao cão?”',
      sampleTitle: 'Uma lista partilhada para a casa',
      sample: [
        { name: 'Levar o lixo', schedule: 'Todas as quintas-feiras' },
        { name: 'Regar as plantas', schedule: '1 semana depois de fazer' },
        { name: 'Medicamento contra a dirofilariose', schedule: 'Todos os meses no dia 1' },
      ],
      points: [
        { title: 'Partilhado através do iCloud', body: 'Convide familiares para qualquer tarefa com a partilha do iCloud. Só precisam da Recurrence e de uma conta iCloud.' },
        { title: 'Veja quem fez', body: 'Cada conclusão numa tarefa partilhada mostra quem a marcou.' },
        { title: 'Todos recebem lembretes', body: 'Cada pessoa configura os lembretes que lhe convêm.' },
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
      title: 'Apoio e ajuda | Recurrence',
      description: 'Ajuda com a Recurrence: sincronização, partilha, lembretes, widgets e Premium. Respostas às dúvidas mais comuns e como entrar em contacto connosco.',
    },
    h1: 'Como podemos ajudar?',
    intro: 'Respostas às perguntas mais comuns sobre a Recurrence.',
    contact: { q: 'Tem outra pergunta?', a: 'Envie um e-mail para support@shayesapps.com.' },
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'As minhas tarefas não estão a sincronizar entre dispositivos.', a: 'A Recurrence sincroniza através do iCloud. Em cada dispositivo, verifique se tem sessão iniciada no iCloud com a mesma Conta Apple, se tem ligação à internet e se o armazenamento do iCloud não está cheio. Verifique também se a Recurrence tem permissão para usar o iCloud na app Definições, no seu nome > iCloud. Na Recurrence, Definições > iCloud mostra o estado da sincronização. Se continuar sem sincronizar, toque em “Share Sync Report” nesse ecrã e envie-nos o relatório.' },
      { q: 'Como partilho tarefas com alguém?', a: 'Mantenha premida uma tarefa na lista e escolha “Partilhar”, ou toque no botão de partilha no topo da tarefa. Escolha quem convidar e se essa pessoa pode fazer alterações ou apenas ver. As pessoas convidadas precisam da Recurrence e de uma conta iCloud. Para deixar de partilhar, abra o mesmo menu, que passa a mostrar “Partilha”. Apagar uma tarefa partilhada apaga-a para todos.' },
      { q: 'Não estou a receber lembretes.', a: 'Primeiro verifique se as notificações da Recurrence estão permitidas na app Definições, em Notificações, e se nenhum modo de foco as está a silenciar. Na Recurrence, Definições > Notificações mostra se a permissão está ativada. Cada tarefa tem os seus próprios lembretes na secção Notificações, ao editá-la: antes do prazo, no próprio dia ou quando estiver atrasada. Definições > Predefinições > Notificações define os lembretes com que as novas tarefas começam. O iOS limita quantos lembretes uma app pode agendar com antecedência, por isso abra a Recurrence de vez em quando para continuar a recebê-los.' },
      { q: 'Como restauro a minha compra Premium?', a: 'Na Recurrence, abra as Definições, toque em “Explorar” no banner da Recurrence Premium e depois em “Restaurar”, na parte inferior do ecrã. Confirme que tem sessão iniciada com a Conta Apple com que comprou a Premium.' },
      { q: 'Posso experimentar a Premium primeiro?', a: 'Sim. A Recurrence Premium inclui um período de experimentação gratuito, indicado na App Store antes de subscrever.' },
      { q: 'A Premium funciona em todos os meus dispositivos?', a: 'Sim. Uma compra desbloqueia a Premium no iPhone, iPad e Mac, e pode ser partilhada com a família através da Partilha com a família.' },
      { q: 'Como cancelo a minha subscrição?', a: 'As subscrições são geridas nas definições da sua Conta Apple e podem ser canceladas a qualquer momento, até 24 horas antes da renovação seguinte.' },
    ],
  },

  press: {
    meta: {
      title: 'Kit de imprensa | Recurrence',
      description: 'Kit de imprensa da Recurrence: descrição da app, dados principais, capturas de ecrã, ícone e contacto para jornalistas e críticos.',
    },
    h1: 'Kit de imprensa',
    intro: 'A Recurrence é uma app de tarefas periódicas para iPhone, iPad e Mac, da Shayes Apps, um programador independente. Avisa quando cada tarefa vence e guarda o histórico de cada conclusão.',
    facts: [
      { label: 'Programador', value: 'Shayes Apps' },
      { label: 'Plataformas', value: 'iPhone, iPad, Mac' },
      { label: 'Preço', value: 'Grátis, com subscrição opcional' },
      { label: 'Idiomas', value: '16' },
      { label: 'Classificação na App Store', value: '4,7+ estrelas' },
    ],
    kitTitle: 'Descarregue o kit',
    kitBody: 'Capturas de ecrã, capturas com moldura, o ícone da app e um banner (em inglês).',
    kitLink: 'Descarregar o kit de imprensa (ZIP, 12 MB)',
    contactTitle: 'Contacto para a imprensa',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: 'Política de privacidade e termos de utilização | Recurrence', description: 'A Recurrence não segue a sua atividade nem recolhe informações pessoais identificáveis. As tarefas sincronizam pelo iCloud. E os termos da subscrição Premium.' },
    h1: 'Política de privacidade e termos de utilização',
    docs: [
      {
        id: 'privacy',
        title: 'Política de privacidade',
        updated: '26 de novembro de 2026',
        sections: [
          { title: 'Curta e direta', body: ['A nossa política é curta e direta porque valorizamos as suas informações e a sua privacidade. A Recurrence não segue a sua atividade nem recolhe informações pessoais identificáveis. Fazemos o possível para limitar o número de terceiros dos quais dependemos.'] },
          { title: 'Pagamentos', body: ['Os pagamentos de compras na app e subscrições são feitos através da App Store, pelo que nunca temos acesso aos dados do seu cartão de crédito. A Recurrence contém o SDK da RevenueCat. Consulte as políticas da RevenueCat.'] },
          { title: 'Sincronização e partilha', body: ['A sincronização de dados é feita através do iCloud (CloudKit da Apple). O CloudKit é totalmente encriptado e todos os dados ficam na infraestrutura da Apple. Ninguém além de si tem acesso aos seus dados, exceto as pessoas com quem escolher partilhar tarefas.'] },
          { title: 'Pedidos de reembolso', body: ['Ao utilizar a Recurrence e fazer compras na app, consente que partilhemos com a Apple dados sobre a sua utilização e consumo do conteúdo comprado, no âmbito dos nossos esforços para resolver pedidos de reembolso. Estas informações podem incluir detalhes sobre a forma como acedeu e interagiu com o conteúdo comprado. O objetivo desta partilha é ajudar a Apple a tomar uma decisão informada sobre pedidos de reembolso. Garantimos que esta partilha de dados é feita de acordo com as políticas da Apple e apenas na medida necessária para processar os seus pedidos.'] },
          { title: 'Dúvidas', body: ['Se tiver dúvidas ou preocupações sobre a nossa política de privacidade, contacte-nos através de support@shayesapps.com.'] },
        ],
      },
      {
        id: 'terms',
        title: 'Termos de utilização',
        updated: '26 de novembro de 2026',
        sections: [
          { title: 'Termos da subscrição Premium', body: ['As subscrições são renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período atual. Pode cancelar a qualquer momento nas definições da sua Conta Apple. Qualquer parte não utilizada de um período de experimentação gratuito é perdida se comprar uma subscrição.'] },
          { title: 'Dúvidas', body: ['Se tiver dúvidas ou preocupações sobre os nossos termos de utilização, contacte-nos através de support@shayesapps.com.'] },
        ],
      },
    ],
  },

  screenAlt: {
    home: 'Lista de tarefas da Recurrence no iPhone com tarefas atrasadas, de hoje e próximas',
    history: 'O histórico de uma tarefa com datas e notas',
    widgets: 'Widgets da Recurrence no ecrã principal do iPhone',
    add: 'Edição de uma tarefa que se repete 4 semanas depois da última conclusão',
  },

  labels: {
    sampleList: 'Lista de exemplo',
    whatYouGet: 'Porque funciona',
    relatedUseCases: 'Mais ideias',
    allUseCases: 'Todas as ideias',
    comparedOn: 'O que comparamos',
    feature: 'Funcionalidade',
    whenOtherTitle: 'Quando a outra app pode ser melhor para si',
    verdictTitle: 'Em resumo',
    lastChecked: 'Última verificação',
    lastUpdated: 'Última atualização',
    faqTitle: 'Perguntas',
    readMore: 'Saiba mais',
    fiveStars: '5 de 5 estrelas',
  },
};

export default ptPT;
