// Latin American Spanish copy, written from en-US. Informal "tú", matching the app.
// Task names, tabs and settings use the app's own Spanish strings.

import type { SiteContent } from './types';
import enUS from './en-US';
import tools from './tools/es';

const es: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence: tareas recurrentes para iPhone, iPad y Mac',
      description: 'Quehaceres, pagos, mascotas y mantenimiento del hogar. Recurrence te recuerda cada tarea recurrente y registra cada vez que la hiciste. Gratis para empezar.',
    },
    heroAccentBefore: 'Mantente al día con cada ',
    heroAccent: 'tarea recurrente',
    heroAccentAfter: '',
    intro: 'Quehaceres, pagos, medicinas de tu mascota y mantenimiento del hogar. Recurrence te avisa cuando algo toca y recuerda cada vez que lo hiciste.',
    useCasesTitle: 'Una app para todo lo que se repite',
    useCasesIntro: 'Desde el día de la basura hasta la visita anual al veterinario, cada tarea tiene su propio calendario e historial.',
    historyKicker: 'Historial',
    historyTitle: 'Sabe exactamente cuándo lo hiciste por última vez',
    historyBody: 'Cada vez que completas una tarea se registra la fecha y una nota opcional, así puedes ver cuándo cambiaste el filtro, qué recetó el veterinario o cuánto costó la última reparación. ¿Te saltaste una semana? También queda registrado.',
    bullets: [
      'Repite según calendario o un tiempo fijo después de la última vez',
      'Recordatorios antes de la fecha, el mismo día y cuando está atrasada',
      'Widgets para la pantalla de inicio y la pantalla bloqueada',
      'Comparte tareas con tu familia por iCloud y ve quién hizo qué',
      'Se sincroniza entre iPhone, iPad y Mac',
    ],
    reviewsTitle: 'Muy querida por mantener todo en orden',
    reviews: [],
    freeTitle: 'Gratis para empezar',
    freeBody: 'Registra hasta 5 tareas gratis. Recurrence Premium desbloquea tareas ilimitadas y compartidas, con una suscripción mensual o anual, o una compra única de por vida.',
    faqTitle: 'Preguntas',
    faq: [
      { q: '¿En qué se diferencia Recurrence de una lista de pendientes?', a: 'Una lista de pendientes se olvida de una tarea en cuanto la marcas. Recurrence programa la próxima vez y guarda un registro de cada vez que la completas, con notas, para que siempre sepas cuándo la hiciste por última vez.' },
      { q: '¿Puedo compartir tareas con mi familia?', a: 'Sí. Comparte cualquier tarea por iCloud y las personas que invites también podrán marcarla. El historial de cada tarea muestra quién la completó y cuándo.' },
      { q: '¿Qué pasa si se me pasa una tarea?', a: 'Pasa a “Atrasadas” y te lo sigue recordando. Para tareas que simplemente deben reiniciarse cuando las haces, elige “Desde la última vez”, así las semanas perdidas no se acumulan.' },
    ],
  },

  features: {
    meta: {
      title: 'Funciones: calendarios, recordatorios e historial | Recurrence',
      description: 'Repeticiones flexibles, recordatorios antes y después de la fecha, historial con notas, widgets y tareas compartidas por iCloud, en iPhone, iPad y Mac.',
    },
    h1: 'Todo lo que necesitas para estar al día con lo que se repite',
    intro: 'Recurrence se basa en una idea: una tarea recurrente nunca está terminada del todo. Vuelve, y ayuda saber cuándo la hiciste por última vez.',
    sections: [
      {
        title: 'Repite con cualquier calendario',
        body: 'Haz que una tarea se repita en fechas del calendario, como todos los jueves o el día 1 de cada mes, o un tiempo fijo después de la última vez, como 6 semanas después de tu último corte de pelo.',
        points: ['Calendarios diarios, semanales, mensuales y anuales', 'Repetición un tiempo fijo después de completarla', 'Bloquea una tarea para que no se pueda marcar antes de tiempo'],
        screen: 'add',
      },
      {
        title: 'Un historial completo para cada rutina',
        body: 'Cada vez que la completas se guarda con su fecha y una nota opcional. Las omitidas también quedan registradas, para que el historial sea fiel.',
        points: ['Notas en cada registro', 'Completada u omitida, queda registrada', 'Ve con qué frecuencia se hace realmente una tarea'],
        screen: 'history',
      },
      {
        title: 'Recordatorios a la medida de cada tarea',
        body: 'Recibe una notificación días antes de la fecha, el mismo día o cuando ya está atrasada. Define los valores predeterminados una vez o ajusta cada tarea.',
        points: ['Antes, el mismo día y después de la fecha', 'Notificaciones configurables por tarea', 'Completa tareas con Atajos de Siri'],
        screen: 'home',
      },
      {
        title: 'Tu lista de un vistazo',
        body: 'Los widgets muestran lo atrasado, lo de hoy y lo que viene, directamente en tu pantalla de inicio o pantalla bloqueada.',
        points: ['Widgets para la pantalla de inicio y la pantalla bloqueada', 'Filtra un widget por categoría', 'Categorías, búsqueda y filtros en la app'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Organiza quehaceres, pagos, mascotas y más | Recurrence',
      description: 'Ideas para registrar con Recurrence: quehaceres, pagos, medicinas de mascotas, mantenimiento del hogar y del auto, plantas, cuidado personal y tareas en familia.',
    },
    h1: '¿Qué quieres tener al día?',
    intro: 'Recurrence sirve para todo lo que se repite. Estas son las formas más populares de usarla, cada una con una lista preparada para empezar.',
  },

  useCases: {
    chores: {
      meta: { title: 'App de quehaceres y limpieza del hogar | Recurrence', description: 'Lleva al día la basura, la ropa y la limpieza. Recurrence organiza tus quehaceres recurrentes, te avisa cuando tocan y muestra cuándo se hizo cada uno.' },
      name: 'Quehaceres del hogar',
      blurb: 'Basura, ropa, limpieza',
      h1: 'Una lista de quehaceres que recuerda cuándo los hiciste',
      intro: 'Algunos quehaceres tienen un día fijo, como sacar la basura. Otros solo hay que hacerlos de vez en cuando, como lavar las sábanas. Recurrence se encarga de ambos y guarda un historial para que nadie tenga que adivinar.',
      sampleTitle: 'Una lista de quehaceres para empezar',
      sample: [
        { name: 'Sacar la basura', schedule: 'Todos los jueves' },
        { name: 'Lavar las sábanas', schedule: '1 semana después de hacerla' },
        { name: 'Regar las plantas', schedule: '1 semana después de hacerla' },
        { name: 'Cambiar filtro de aire', schedule: '3 meses después de hacerla' },
      ],
      points: [
        { title: 'Días fijos o intervalos flexibles', body: 'La basura sale todos los jueves. Las sábanas se lavan una semana después de la última vez, cuando haya sido.' },
        { title: 'Reparte el trabajo', body: 'Comparte quehaceres con tu hogar y ve quién se encargó de cada uno.' },
        { title: 'Nada se acumula tras una semana ocupada', body: 'Las tareas que se repiten desde la última vez simplemente se reinician cuando las haces.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'App de recordatorio de pagos y suscripciones | Recurrence', description: 'No vuelvas a olvidar el alquiler, la tarjeta de crédito o una renovación. Recurrence te avisa antes de cada fecha de pago y guarda un registro de cada pago.' },
      name: 'Pagos y suscripciones',
      blurb: 'Alquiler, tarjetas, renovaciones',
      h1: 'Recordatorios antes de cada pago, y un registro después',
      intro: 'Asigna a cada pago su fecha límite y recibe un recordatorio días antes. Márcalo como pagado y agrega una nota, como el monto o un número de confirmación, para consultarlo después.',
      sampleTitle: 'Una lista de pagos para empezar',
      sample: [
        { name: 'Pagar el alquiler', schedule: 'El día 1 de cada mes' },
        { name: 'Pagar la tarjeta de crédito', schedule: 'El día 20 de cada mes' },
        { name: 'Revisar suscripciones', schedule: '3 meses después de hacerla' },
      ],
      points: [
        { title: 'Recordatorios días antes', body: 'Elige con cuánta anticipación quieres enterarte de cada pago.' },
        { title: 'Notas en cada pago', body: 'Guarda el monto o el número de confirmación cada vez que lo completes.' },
        { title: 'Renovaciones que olvidarías', body: 'Las renovaciones anuales y las revisiones trimestrales conviven con los pagos mensuales.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Recordatorio de medicinas y cuidado de mascotas | Recurrence', description: 'Recuerda la medicina contra el gusano del corazón, el antipulgas, el baño y el veterinario. Recurrence te avisa a tiempo y registra cada dosis y cada visita.' },
      name: 'Mascotas',
      blurb: 'Medicinas, baño, veterinario',
      h1: 'Recordatorios para tu mascota, con registro de cada dosis',
      intro: 'Las medicinas mensuales, el baño cada pocas semanas y la revisión anual son fáciles de perder de vista. Recurrence te los recuerda y registra cada uno, para que le digas al veterinario exactamente cuándo fue la última dosis.',
      sampleTitle: 'Una lista para tu mascota',
      sample: [
        { name: 'Medicina contra el gusano del corazón', schedule: 'El día 1 de cada mes' },
        { name: 'Antipulgas y antigarrapatas', schedule: 'El día 15 de cada mes' },
        { name: 'Bañar y peinar al perro', schedule: '6 semanas después de hacerla' },
        { name: 'Revisión con el veterinario', schedule: '1 año después de hacerla' },
      ],
      points: [
        { title: 'Sabe cuándo fue la última dosis', body: 'El historial muestra cada registro, así no hay dosis dobles ni olvidos.' },
        { title: 'Notas del veterinario', body: 'Anota el peso o lo que te recetaron en cada revisión.' },
        { title: 'Compartido con tu hogar', body: 'Quien da la medicina la marca, y todos lo ven.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'App de mantenimiento del hogar con recordatorios | Recurrence', description: 'Lleva el control de filtros de aire y agua, pruebas de detectores de humo y tareas de temporada. Recurrence te avisa cuando toca y guarda un registro completo.' },
      name: 'Mantenimiento del hogar',
      blurb: 'Filtros, detectores de humo, temporada',
      h1: 'Recordatorios para el mantenimiento que solo haces unas veces al año',
      intro: 'Los filtros, los detectores de humo y las tareas de temporada llegan tan de vez en cuando que se olvidan. Recurrence cuenta desde la última vez que hiciste cada una y te avisa cuando toca de nuevo.',
      sampleTitle: 'Una lista de mantenimiento para empezar',
      sample: [
        { name: 'Cambiar filtro de aire', schedule: '3 meses después de hacerla' },
        { name: 'Cambiar filtro de agua', schedule: '6 meses después de hacerla' },
        { name: 'Probar detectores de humo', schedule: '6 meses después de hacerla' },
      ],
      points: [
        { title: 'Cuenta desde la última vez', body: '¿Cambiaste el filtro tarde? El próximo recordatorio se mueve con él.' },
        { title: 'Un registro para la casa', body: 'Anota el tamaño del filtro o el nombre del técnico en cada trabajo.' },
        { title: 'Nada en tu calendario', body: 'Las tareas poco frecuentes no ocupan tu calendario hasta que toca hacerlas.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'App de recordatorios de mantenimiento del auto | Recurrence', description: 'Recuerda el cambio de aceite, la presión de los neumáticos y los limpiaparabrisas. Recurrence te avisa cuando toca cada mantenimiento y guarda el kilometraje.' },
      name: 'Mantenimiento del auto',
      blurb: 'Aceite, neumáticos, limpiaparabrisas',
      h1: 'Recordatorios de mantenimiento del auto, con el kilometraje en las notas',
      intro: 'El cambio de aceite, la revisión de neumáticos y los limpiaparabrisas nuevos tienen calendarios distintos. Recurrence los reúne en un solo lugar y recuerda lo que hiciste la última vez.',
      sampleTitle: 'Una lista para tu auto',
      sample: [
        { name: 'Cambio de aceite', schedule: '6 meses después de hacerla' },
        { name: 'Revisar la presión de los neumáticos', schedule: '1 mes después de hacerla' },
        { name: 'Cambiar limpiaparabrisas', schedule: '1 año después de hacerla' },
        { name: 'Lavar el auto', schedule: '2 semanas después de hacerla' },
      ],
      points: [
        { title: 'Kilometraje en cada servicio', body: 'Agrega la lectura del odómetro como nota al completar una tarea.' },
        { title: 'Todos tus autos en una lista', body: 'Usa una categoría por auto para distinguirlos.' },
        { title: 'Avisos con anticipación', body: 'Entérate antes de que toque un servicio, no después.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'App para recordar regar las plantas | Recurrence', description: 'Riega cada planta a su ritmo. Recurrence te avisa cuando una planta necesita agua, cuenta desde el último riego y muestra quién la regó.' },
      name: 'Plantas y jardín',
      blurb: 'Riego, abono, trasplante',
      h1: 'Recordatorios de riego que cuentan desde el último riego',
      intro: 'Las plantas no siguen el calendario. Recurrence te avisa un tiempo fijo después del último riego, así que si riegas tarde, el siguiente también se mueve.',
      sampleTitle: 'Una lista para tus plantas',
      sample: [
        { name: 'Regar las plantas', schedule: '1 semana después de hacerla' },
      ],
      points: [
        { title: 'Desde el último riego', body: 'El próximo recordatorio empieza cuando de verdad regaste.' },
        { title: 'Ve quién regó', body: 'Cuando una tarea de plantas está compartida, el historial muestra quién regó y cuándo.' },
        { title: 'Notas para cada planta', body: 'Anota el abono o el trasplante junto al registro de riego.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Cuidado personal: recordatorios de dentista y más | Recurrence', description: 'Corte de pelo, dentista, cepillo de dientes nuevo y vitaminas: Recurrence te avisa a tiempo y recuerda cuándo fuiste por última vez.' },
      name: 'Cuidado personal',
      blurb: 'Pelo, dentista, vitaminas',
      h1: 'Recordatorios para las citas que es fácil posponer',
      intro: 'Un corte de pelo cada seis semanas, el dentista dos veces al año y un cepillo de dientes nuevo cada tres meses. Recurrence recuerda las fechas por ti.',
      sampleTitle: 'Una lista de cuidado personal para empezar',
      sample: [
        { name: 'Cortarse el pelo', schedule: '6 semanas después de hacerla' },
        { name: 'Cambiar el cepillo de dientes', schedule: '3 meses después de hacerla' },
        { name: 'Revisión con el dentista', schedule: '6 meses después de hacerla' },
        { name: 'Tomar vitaminas', schedule: 'Todos los días' },
      ],
      points: [
        { title: 'Sabe cuándo fuiste por última vez', body: 'El historial responde “¿cuándo fue mi última revisión?” en un segundo.' },
        { title: 'A diario o dos veces al año', body: 'Los hábitos diarios y las citas poco frecuentes viven en una sola lista.' },
        { title: 'Privado por defecto', body: 'Tus tareas se quedan en tu cuenta de iCloud a menos que las compartas.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'App de tareas compartidas en familia | Recurrence', description: 'Comparte tareas recurrentes con tu familia por iCloud. Todos pueden marcarlas, y el historial de cada tarea muestra quién la hizo y cuándo.' },
      name: 'Tareas en familia',
      blurb: 'Ve quién lo hizo y cuándo',
      h1: 'Tareas recurrentes compartidas para todo el hogar',
      intro: 'Comparte tareas por iCloud y todas las personas que invites podrán completarlas. El historial muestra quién se encargó de cada una, así se acaba el “¿le diste de comer al perro?”',
      sampleTitle: 'Una lista compartida para el hogar',
      sample: [
        { name: 'Sacar la basura', schedule: 'Todos los jueves' },
        { name: 'Regar las plantas', schedule: '1 semana después de hacerla' },
        { name: 'Medicina contra el gusano del corazón', schedule: 'El día 1 de cada mes' },
      ],
      points: [
        { title: 'Compartidas por iCloud', body: 'Invita a tu familia a cualquier tarea con el uso compartido de iCloud. Solo necesitan Recurrence y una cuenta de iCloud.' },
        { title: 'Ve quién lo hizo', body: 'Cada registro de una tarea compartida muestra quién la marcó.' },
        { title: 'Todos reciben recordatorios', body: 'Cada persona configura los recordatorios que le funcionan.' },
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
      title: 'Soporte y ayuda | Recurrence',
      description: 'Ayuda con Recurrence: sincronización, tareas compartidas, recordatorios, widgets y Premium. Respuestas a preguntas frecuentes y cómo contactarnos.',
    },
    h1: '¿Cómo podemos ayudarte?',
    intro: 'Respuestas a las preguntas más frecuentes sobre Recurrence.',
    contact: { q: '¿Tienes otra pregunta?', a: 'Escríbenos a support@shayesapps.com.' },
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: 'Mis tareas no se sincronizan entre dispositivos.', a: 'Recurrence se sincroniza mediante iCloud. En cada dispositivo, asegúrate de haber iniciado sesión en iCloud con la misma cuenta de Apple, de tener conexión y de que tu almacenamiento de iCloud no esté lleno. Comprueba también que Recurrence tenga permiso para usar iCloud en la app Configuración, en tu nombre > iCloud. En Recurrence, Configuración > iCloud muestra el estado de la sincronización. Si sigue sin sincronizar, toca “Compartir informe de sincronización” en esa pantalla y envíanos el informe.' },
      { q: '¿Cómo comparto tareas con alguien?', a: 'Mantén presionada una tarea en tu lista y elige “Compartir”, o toca el botón de compartir en la parte superior de la tarea. Elige a quién invitar y si podrá hacer cambios o solo verla. Las personas que invites necesitan Recurrence y una cuenta de iCloud. Para dejar de compartir, abre el mismo menú. Si eliminas una tarea compartida, se elimina para todos.' },
      { q: 'No me llegan los recordatorios.', a: 'Primero revisa que las notificaciones de Recurrence estén permitidas en la app Configuración, en Notificaciones, y que ningún modo de enfoque las silencie. En Recurrence, Configuración > Notificaciones muestra si el permiso está activado. Cada tarea tiene sus propios recordatorios en la sección Notificaciones al editarla: antes de la fecha, el mismo día o cuando ya está atrasada. Configuración > Valores predeterminados > Notificaciones define con qué recordatorios empiezan las tareas nuevas. iOS limita cuántos recordatorios puede programar una app por adelantado, así que abre Recurrence de vez en cuando para que sigan llegando.' },
      { q: '¿Cómo restauro mi compra de Premium?', a: 'En Recurrence, ve a Configuración, toca “Explorar” en el banner de Recurrence Premium y luego toca “Restaurar” en la parte inferior de la pantalla. Asegúrate de haber iniciado sesión con la cuenta de Apple con la que compraste Premium.' },
      { q: '¿Puedo probar Premium primero?', a: 'Sí. Recurrence Premium incluye una prueba gratuita, que se muestra en el App Store antes de suscribirte.' },
      { q: '¿Premium funciona en todos mis dispositivos?', a: 'Sí. Una sola compra desbloquea Premium en iPhone, iPad y Mac, y se puede compartir con tu familia mediante Compartir en familia.' },
      { q: '¿Cómo cancelo mi suscripción?', a: 'Las suscripciones se administran en la configuración de tu cuenta de Apple y puedes cancelarlas en cualquier momento, al menos 24 horas antes de la siguiente renovación.' },
    ],
  },

  press: {
    meta: {
      title: 'Kit de prensa | Recurrence',
      description: 'Kit de prensa de Recurrence: descripción de la app, datos clave, capturas de pantalla, ícono y contacto para periodistas y reseñadores.',
    },
    h1: 'Kit de prensa',
    intro: 'Recurrence es una app para llevar el control de tareas recurrentes en iPhone, iPad y Mac, creada por Shayes Apps, un desarrollador independiente. Avisa cuándo toca cada tarea y guarda un historial de cada vez que se completa.',
    facts: [
      { label: 'Desarrollador', value: 'Shayes Apps' },
      { label: 'Plataformas', value: 'iPhone, iPad, Mac' },
      { label: 'Precio', value: 'Gratis, con suscripción opcional' },
      { label: 'Idiomas', value: '16' },
      { label: 'Calificación en el App Store', value: '4.7+ estrellas' },
    ],
    kitTitle: 'Descarga el kit',
    kitBody: 'Capturas de pantalla, capturas con marco, el ícono de la app y un banner (en inglés).',
    kitLink: 'Descargar kit de prensa (ZIP, 12 MB)',
    contactTitle: 'Contacto de prensa',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: 'Política de privacidad y términos de uso | Recurrence', description: 'Recurrence no te rastrea ni recopila información personal identificable. Tus tareas se sincronizan con iCloud. Además, los términos de las suscripciones Premium.' },
    h1: 'Política de privacidad y términos de uso',
    docs: [
      {
        id: 'privacy',
        title: 'Política de privacidad',
        updated: '26 de noviembre de 2026',
        sections: [
          { title: 'Breve y sencilla', body: ['Nuestra política es breve y sencilla porque valoramos tu información y tu privacidad. Recurrence no te rastrea ni recopila información personal identificable. Hacemos lo posible por limitar la cantidad de terceros de los que dependemos.'] },
          { title: 'Pagos', body: ['Los pagos de compras dentro de la app y suscripciones se realizan a través del App Store, así que nunca tenemos acceso a los datos de tu tarjeta de crédito. Recurrence incluye el SDK de RevenueCat. Consulta sus políticas.'] },
          { title: 'Sincronización y uso compartido', body: ['La sincronización de datos se realiza con iCloud (CloudKit de Apple). CloudKit está totalmente cifrado y todos los datos se guardan en la infraestructura de Apple. Nadie más que tú tiene acceso a tus datos, excepto las personas con las que decidas compartir tareas.'] },
          { title: 'Solicitudes de reembolso', body: ['Al usar Recurrence y hacer compras dentro de la app, aceptas que compartamos con Apple datos sobre tu uso y consumo del contenido comprado, como parte de nuestros esfuerzos para resolver solicitudes de reembolso. Esta información puede incluir detalles sobre cómo accediste al contenido comprado e interactuaste con él. El propósito de compartir estos datos es ayudar a Apple a tomar una decisión informada sobre las solicitudes de reembolso. Nos aseguramos de que este intercambio de datos cumpla con las políticas de Apple y se haga solo en la medida necesaria para procesar tus solicitudes.'] },
          { title: 'Preguntas', body: ['Si tienes preguntas o inquietudes sobre nuestra política de privacidad, escríbenos a support@shayesapps.com.'] },
        ],
      },
      {
        id: 'terms',
        title: 'Términos de uso',
        updated: '26 de noviembre de 2026',
        sections: [
          { title: 'Términos de la suscripción Premium', body: ['Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del periodo actual. Puedes cancelarlas en cualquier momento en la configuración de tu cuenta de Apple. Cualquier parte no utilizada de una prueba gratuita se perderá si compras una suscripción.'] },
          { title: 'Preguntas', body: ['Si tienes preguntas o inquietudes sobre nuestros términos de uso, escríbenos a support@shayesapps.com.'] },
        ],
      },
    ],
  },

  tools,
  screenAlt: {
    home: 'Lista de tareas de Recurrence en iPhone con tareas atrasadas, de hoy y próximas',
    history: 'El historial de una tarea con fechas y notas',
    widgets: 'Widgets de Recurrence en la pantalla de inicio del iPhone',
    add: 'Edición de una tarea que se repite 4 semanas después de la última vez',
  },

  labels: {
    sampleList: 'Lista de ejemplo',
    whatYouGet: 'Por qué funciona',
    relatedUseCases: 'Más ideas',
    allUseCases: 'Todas las ideas',
    comparedOn: 'Qué comparamos',
    feature: 'Función',
    whenOtherTitle: 'Cuándo te puede convenir más la otra app',
    verdictTitle: 'En resumen',
    lastChecked: 'Última revisión',
    lastUpdated: 'Última actualización',
    faqTitle: 'Preguntas',
    readMore: 'Más información',
    fiveStars: '5 de 5 estrellas',
  },
};

export default es;
