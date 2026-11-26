// German copy, written from en-US. Informal "du", matching the app and its
// store listing. Task names, tabs and settings use the app's own German strings.

import type { SiteContent } from './types';
import enUS from './en-US';

const de: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence: Wiederkehrende Aufgaben für iPhone, iPad & Mac',
      description: 'Behalte Haushalt, Rechnungen, Haustiere und Wartung im Blick. Recurrence erinnert dich an wiederkehrende Aufgaben und merkt sich jedes Erledigen. Kostenlos starten.',
    },
    heroAccentBefore: 'Jede ',
    heroAccent: 'wiederkehrende Aufgabe',
    heroAccentAfter: ' im Griff',
    intro: 'Haushalt, Rechnungen, Medikamente fürs Haustier und Wartung. Recurrence erinnert dich, wenn etwas fällig ist, und merkt sich jedes Mal, wann du es erledigt hast.',
    useCasesTitle: 'Eine App für alles, was sich wiederholt',
    useCasesIntro: 'Vom Mülltag bis zum jährlichen Tierarztbesuch: Jede Aufgabe hat ihren eigenen Zeitplan und Verlauf.',
    historyKicker: 'Verlauf',
    historyTitle: 'Wisse genau, wann du es zuletzt erledigt hast',
    historyBody: 'Jedes Erledigen wird mit Datum und optionaler Notiz gespeichert. So siehst du, wann der Filter gewechselt wurde, was der Tierarzt verschrieben hat oder was die letzte Reparatur gekostet hat. Eine Woche übersprungen? Auch das steht im Verlauf.',
    bullets: [
      'Wiederholung nach Kalender oder eine feste Zeit nach dem letzten Erledigen',
      'Erinnerungen vor der Fälligkeit, am Tag selbst und bei Überfälligkeit',
      'Widgets für Home-Bildschirm und Sperrbildschirm',
      'Aufgaben per iCloud mit der Familie teilen und sehen, wer was erledigt hat',
      'Synchronisiert zwischen iPhone, iPad und Mac',
    ],
    reviewsTitle: 'Beliebt, weil es den Alltag ordnet',
    reviews: [],
    freeTitle: 'Kostenlos starten',
    freeBody: 'Bis zu 5 Aufgaben sind kostenlos. Recurrence Premium schaltet unbegrenzte und geteilte Aufgaben frei, als Monats- oder Jahresabo oder als einmaliger Kauf auf Lebenszeit.',
    faqTitle: 'Fragen',
    faq: [
      { q: 'Was unterscheidet Recurrence von einer To-do-Liste?', a: 'Eine To-do-Liste vergisst eine Aufgabe, sobald du sie abhakst. Recurrence plant das nächste Mal und speichert jedes Erledigen mit Notizen, damit du immer weißt, wann du etwas zuletzt gemacht hast.' },
      { q: 'Kann ich Aufgaben mit meiner Familie teilen?', a: 'Ja. Teile eine beliebige Aufgabe über iCloud, und die eingeladenen Personen können sie ebenfalls abhaken. Der Verlauf jeder Aufgabe zeigt, wer sie wann erledigt hat.' },
      { q: 'Was passiert, wenn ich eine Aufgabe verpasse?', a: 'Sie landet unter „Überfällig“ und erinnert dich weiter. Für Aufgaben, die einfach neu starten sollen, sobald du sie erledigst, wähle „Ab letzter Erledigung“. Dann stauen sich verpasste Wochen nicht.' },
    ],
  },

  features: {
    meta: {
      title: 'Funktionen: Zeitpläne, Erinnerungen & Verlauf | Recurrence',
      description: 'Flexible Wiederholungen, Erinnerungen vor und nach der Fälligkeit, Verlauf mit Notizen, Widgets, Teilen per iCloud und Sync auf iPhone, iPad und Mac.',
    },
    h1: 'Alles, was du brauchst, um bei Wiederkehrendem den Überblick zu behalten',
    intro: 'Recurrence beruht auf einer Idee: Eine wiederkehrende Aufgabe ist nie wirklich erledigt. Sie kommt wieder, und es hilft zu wissen, wann du sie zuletzt gemacht hast.',
    sections: [
      {
        title: 'Wiederholen nach jedem Zeitplan',
        body: 'Lass eine Aufgabe an festen Kalendertagen wiederkehren, etwa jeden Donnerstag oder am 1. des Monats, oder eine feste Zeit nach dem letzten Erledigen, etwa 6 Wochen nach dem letzten Friseurbesuch.',
        points: ['Tägliche, wöchentliche, monatliche und jährliche Kalenderpläne', 'Wiederholung eine feste Zeit nach dem letzten Erledigen', 'Aufgaben sperren, damit sie nicht vor der Fälligkeit abgehakt werden'],
        screen: 'add',
      },
      {
        title: 'Ein vollständiger Verlauf für jede Routine',
        body: 'Jedes Erledigen wird mit Datum und optionaler Notiz gespeichert. Übersprungenes wird ebenfalls festgehalten, damit der Verlauf ehrlich bleibt.',
        points: ['Notizen zu jedem Erledigen', 'Erledigt oder übersprungen, alles wird festgehalten', 'Sieh, wie oft eine Aufgabe wirklich erledigt wird'],
        screen: 'history',
      },
      {
        title: 'Erinnerungen, die zur Aufgabe passen',
        body: 'Lass dich Tage vor der Fälligkeit, am Tag selbst oder bei Überfälligkeit benachrichtigen. Lege Standardwerte einmal fest oder passe jede Aufgabe einzeln an.',
        points: ['Vor, am und nach dem Fälligkeitstag', 'Mitteilungen pro Aufgabe einstellen', 'Aufgaben mit Siri-Kurzbefehlen erledigen'],
        screen: 'home',
      },
      {
        title: 'Deine Liste auf einen Blick',
        body: 'Widgets zeigen, was überfällig ist, was heute ansteht und was als Nächstes kommt, direkt auf dem Home-Bildschirm oder Sperrbildschirm.',
        points: ['Widgets für Home-Bildschirm und Sperrbildschirm', 'Widget auf eine Kategorie filtern', 'Kategorien, Suche und Filter in der App'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Haushalt, Rechnungen, Haustiere & mehr planen | Recurrence',
      description: 'Ideen für Recurrence: Haushalt, Rechnungen, Medikamente fürs Haustier, Haus- und Autowartung, Pflanzen, Selbstfürsorge und Familienaufgaben, jeweils mit Startliste.',
    },
    h1: 'Was willst du im Blick behalten?',
    intro: 'Recurrence passt zu allem, was sich wiederholt. Hier sind die beliebtesten Einsatzbereiche, jeweils mit einer fertigen Liste zum Loslegen.',
  },

  useCases: {
    chores: {
      meta: { title: 'Putzplan-App für wiederkehrende Hausarbeit | Recurrence', description: 'Behalte Mülltag, Wäsche und Putzen im Blick. Recurrence plant wiederkehrende Hausarbeit, erinnert dich bei Fälligkeit und zeigt, wann sie zuletzt erledigt wurde.' },
      name: 'Haushalt',
      blurb: 'Mülltag, Wäsche, Putzen',
      h1: 'Ein Putzplan, der sich merkt, wann du es zuletzt gemacht hast',
      intro: 'Manche Hausarbeit hat einen festen Tag, wie der Müll am Donnerstag. Anderes muss einfach ab und zu sein, wie das Bettwäschewaschen. Recurrence kann beides und führt einen Verlauf, damit niemand raten muss.',
      sampleTitle: 'Eine Startliste für den Haushalt',
      sample: [
        { name: 'Müll rausbringen', schedule: 'Jeden Donnerstag' },
        { name: 'Bettwäsche waschen', schedule: '1 Woche nach dem Erledigen' },
        { name: 'Pflanzen gießen', schedule: '1 Woche nach dem Erledigen' },
        { name: 'Luftfilter wechseln', schedule: '3 Monate nach dem Erledigen' },
      ],
      points: [
        { title: 'Feste Tage oder flexible Abstände', body: 'Der Müll geht jeden Donnerstag raus. Die Bettwäsche wird eine Woche nach dem letzten Mal gewaschen, wann immer das war.' },
        { title: 'Die Arbeit teilen', body: 'Teile Hausarbeit mit deinem Haushalt und sieh, wer was erledigt hat.' },
        { title: 'Kein Stau nach einer vollen Woche', body: 'Aufgaben, die ab der letzten Erledigung zählen, starten einfach neu, sobald du sie erledigst.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'Rechnungs-Erinnerung: App für Zahlungen & Abos | Recurrence', description: 'Verpasse keine Miete, Kreditkartenabrechnung oder Verlängerung. Recurrence erinnert dich vor der Fälligkeit und speichert jede Zahlung.' },
      name: 'Rechnungen und Abos',
      blurb: 'Miete, Kreditkarte, Verlängerungen',
      h1: 'Erinnerungen vor jeder Rechnung und ein Nachweis danach',
      intro: 'Lege für jede Rechnung den Fälligkeitstag fest und lass dich Tage vorher erinnern. Hake sie als bezahlt ab und notiere den Betrag oder eine Bestätigungsnummer, damit du später nachsehen kannst.',
      sampleTitle: 'Eine Startliste für Rechnungen',
      sample: [
        { name: 'Miete zahlen', schedule: 'Monatlich am 1.' },
        { name: 'Kreditkartenrechnung bezahlen', schedule: 'Monatlich am 20.' },
        { name: 'Abos überprüfen', schedule: '3 Monate nach dem Erledigen' },
      ],
      points: [
        { title: 'Erinnerung Tage vorher', body: 'Lege fest, wie früh du von jeder Rechnung hören willst.' },
        { title: 'Notizen zu jeder Zahlung', body: 'Speichere Betrag oder Bestätigungsnummer bei jedem Erledigen.' },
        { title: 'Verlängerungen, die du sonst vergisst', body: 'Jährliche Verlängerungen und vierteljährliche Checks stehen neben den monatlichen Rechnungen.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Haustier-App: Erinnerung an Medikamente & Pflege | Recurrence', description: 'Denk an Herzwurm-Prophylaxe, Floh- und Zeckenmittel, Fellpflege und Tierarzt. Recurrence erinnert dich pünktlich und speichert jede Gabe mit Notizen.' },
      name: 'Haustiere',
      blurb: 'Medikamente, Fellpflege, Tierarzt',
      h1: 'Erinnerungen fürs Haustier, mit einem Nachweis jeder Gabe',
      intro: 'Monatliche Mittel, Fellpflege alle paar Wochen und die jährliche Kontrolle geraten leicht durcheinander. Recurrence erinnert dich und speichert jede Gabe, damit du dem Tierarzt genau sagen kannst, wann die letzte war.',
      sampleTitle: 'Eine Startliste fürs Haustier',
      sample: [
        { name: 'Herzwurm-Prophylaxe', schedule: 'Monatlich am 1.' },
        { name: 'Floh- und Zeckenmittel', schedule: 'Monatlich am 15.' },
        { name: 'Hundefell pflegen', schedule: '6 Wochen nach dem Erledigen' },
        { name: 'Tierarztkontrolle', schedule: '1 Jahr nach dem Erledigen' },
      ],
      points: [
        { title: 'Wissen, wann die letzte Gabe war', body: 'Der Verlauf zeigt jedes Erledigen, also nichts doppelt und nichts vergessen.' },
        { title: 'Notizen vom Tierarzt', body: 'Notiere bei jeder Kontrolle das Gewicht oder was verschrieben wurde.' },
        { title: 'Für den ganzen Haushalt', body: 'Wer das Mittel gibt, hakt es ab, und alle sehen es.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'Wartungsplan fürs Haus: App mit Erinnerungen | Recurrence', description: 'Behalte Luftfilter, Wasserfilter, Rauchmeldertests und saisonale Arbeiten im Blick. Recurrence erinnert dich bei Fälligkeit und führt ein vollständiges Protokoll.' },
      name: 'Hauswartung',
      blurb: 'Filter, Rauchmelder, Saisonarbeiten',
      h1: 'Erinnerungen für Arbeiten am Haus, die nur ein paar Mal im Jahr anfallen',
      intro: 'Filter, Rauchmelder und Saisonarbeiten kommen so selten, dass man sie vergisst. Recurrence zählt ab dem letzten Mal und sagt dir, wann es wieder so weit ist.',
      sampleTitle: 'Eine Startliste für die Hauswartung',
      sample: [
        { name: 'Luftfilter wechseln', schedule: '3 Monate nach dem Erledigen' },
        { name: 'Wasserfilter wechseln', schedule: '6 Monate nach dem Erledigen' },
        { name: 'Rauchmelder testen', schedule: '6 Monate nach dem Erledigen' },
      ],
      points: [
        { title: 'Zählt ab dem letzten Mal', body: 'Filter zu spät gewechselt? Die nächste Erinnerung verschiebt sich mit.' },
        { title: 'Ein Protokoll fürs Haus', body: 'Notiere bei jeder Arbeit die Filtergröße oder den Namen des Handwerkers.' },
        { title: 'Nichts im Kalender', body: 'Seltene Arbeiten bleiben aus deinem Kalender, bis sie fällig sind.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'Auto-Wartung: App mit Erinnerungen | Recurrence', description: 'Denk an Ölwechsel, Reifendruck und neue Scheibenwischer. Recurrence erinnert dich, wenn die Autowartung fällig ist, und speichert Kilometerstand und Notizen.' },
      name: 'Autowartung',
      blurb: 'Ölwechsel, Reifen, Scheibenwischer',
      h1: 'Erinnerungen für die Autowartung, mit Kilometerstand in der Notiz',
      intro: 'Ölwechsel, Reifendruck und neue Scheibenwischer haben unterschiedliche Abstände. Recurrence hält sie an einem Ort zusammen und merkt sich, was du zuletzt gemacht hast.',
      sampleTitle: 'Eine Startliste fürs Auto',
      sample: [
        { name: 'Ölwechsel', schedule: '6 Monate nach dem Erledigen' },
        { name: 'Reifendruck prüfen', schedule: '1 Monat nach dem Erledigen' },
        { name: 'Scheibenwischer wechseln', schedule: '1 Jahr nach dem Erledigen' },
        { name: 'Auto waschen', schedule: '2 Wochen nach dem Erledigen' },
      ],
      points: [
        { title: 'Kilometerstand bei jedem Service', body: 'Trag den Kilometerstand als Notiz ein, wenn du eine Aufgabe erledigst.' },
        { title: 'Alle Autos in einer Liste', body: 'Nutze eine Kategorie pro Auto, um sie auseinanderzuhalten.' },
        { title: 'Rechtzeitig erinnert', body: 'Du erfährst vor dem nächsten Service davon, nicht danach.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'Gieß-Erinnerung: App für Zimmerpflanzen | Recurrence', description: 'Gieße jede Pflanze nach ihrem eigenen Plan. Recurrence erinnert dich, wenn Pflanzen Wasser brauchen, zählt ab dem letzten Gießen und zeigt, wer gegossen hat.' },
      name: 'Pflanzen und Garten',
      blurb: 'Gießen, Düngen, Umtopfen',
      h1: 'Gieß-Erinnerungen, die ab dem letzten Gießen zählen',
      intro: 'Pflanzen halten sich nicht an den Kalender. Recurrence erinnert dich eine feste Zeit nach dem letzten Gießen, also verschiebt spätes Gießen auch das nächste Mal.',
      sampleTitle: 'Eine Startliste für Pflanzen',
      sample: [
        { name: 'Pflanzen gießen', schedule: '1 Woche nach dem Erledigen' },
      ],
      points: [
        { title: 'Ab dem letzten Gießen gezählt', body: 'Die nächste Erinnerung startet, wenn du wirklich gegossen hast.' },
        { title: 'Sieh, wer gegossen hat', body: 'Ist eine Pflanzenaufgabe geteilt, zeigt der Verlauf, wer wann gegossen hat.' },
        { title: 'Notizen zu jeder Pflanze', body: 'Halte Düngen oder Umtopfen neben dem Gießprotokoll fest.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Erinnerungen für Friseur, Zahnarzt & mehr | Recurrence', description: 'Denk an Friseur, Zahnarztkontrolle, eine neue Zahnbürste und tägliche Vitamine. Recurrence erinnert dich pünktlich und merkt sich, wann du zuletzt dort warst.' },
      name: 'Selbstfürsorge',
      blurb: 'Friseur, Zahnarzt, Vitamine',
      h1: 'Erinnerungen an Termine, die man gern aufschiebt',
      intro: 'Alle sechs Wochen zum Friseur, zweimal im Jahr zum Zahnarzt und alle drei Monate eine neue Zahnbürste. Recurrence merkt sich die Termine, damit du es nicht musst.',
      sampleTitle: 'Eine Startliste für die Selbstfürsorge',
      sample: [
        { name: 'Zum Friseur gehen', schedule: '6 Wochen nach dem Erledigen' },
        { name: 'Zahnbürste wechseln', schedule: '3 Monate nach dem Erledigen' },
        { name: 'Zahnarztkontrolle', schedule: '6 Monate nach dem Erledigen' },
        { name: 'Vitamine nehmen', schedule: 'Jeden Tag' },
      ],
      points: [
        { title: 'Wissen, wann du zuletzt dort warst', body: 'Der Verlauf beantwortet „Wann war meine letzte Kontrolle?“ in einer Sekunde.' },
        { title: 'Täglich oder zweimal im Jahr', body: 'Tägliche Gewohnheiten und seltene Termine stehen in einer Liste.' },
        { title: 'Standardmäßig privat', body: 'Deine Aufgaben bleiben in deinem iCloud-Konto, solange du sie nicht teilst.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'Familien-App für geteilte Aufgaben im Haushalt | Recurrence', description: 'Teile wiederkehrende Aufgaben per iCloud mit deiner Familie. Alle können abhaken, und der Verlauf jeder Aufgabe zeigt, wer sie wann erledigt hat.' },
      name: 'Geteilte Familienaufgaben',
      blurb: 'Sieh, wer es wann erledigt hat',
      h1: 'Geteilte wiederkehrende Aufgaben für den ganzen Haushalt',
      intro: 'Teile Aufgaben per iCloud, und alle Eingeladenen können sie erledigen. Der Verlauf zeigt, wer sich um was gekümmert hat. Schluss mit „Hast du den Hund gefüttert?“',
      sampleTitle: 'Eine geteilte Haushaltsliste',
      sample: [
        { name: 'Müll rausbringen', schedule: 'Jeden Donnerstag' },
        { name: 'Pflanzen gießen', schedule: '1 Woche nach dem Erledigen' },
        { name: 'Herzwurm-Prophylaxe', schedule: 'Monatlich am 1.' },
      ],
      points: [
        { title: 'Geteilt per iCloud', body: 'Lade Familienmitglieder per iCloud-Freigabe zu jeder Aufgabe ein. Sie brauchen nur Recurrence und ein iCloud-Konto.' },
        { title: 'Sieh, wer es war', body: 'Jedes Erledigen in einer geteilten Aufgabe zeigt, wer sie abgehakt hat.' },
        { title: 'Alle werden erinnert', body: 'Jede Person stellt die Erinnerungen ein, die zu ihr passen.' },
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
      title: 'Hilfe & Support | Recurrence',
      description: 'Hilfe zu Recurrence: Synchronisierung, Teilen, Erinnerungen, Widgets und Premium. Antworten auf häufige Fragen und wie du uns erreichst.',
    },
    h1: 'Wie können wir helfen?',
    intro: 'Antworten auf die häufigsten Fragen zu Recurrence.',
    contact: { q: 'Noch eine Frage?', a: 'Schreib uns an support@shayesapps.com.' },
    faqTitle: 'Häufige Fragen',
    faq: [
      { q: 'Meine Aufgaben werden nicht zwischen Geräten synchronisiert.', a: 'Recurrence synchronisiert über iCloud. Prüfe auf jedem Gerät, dass du mit demselben Apple Account bei iCloud angemeldet bist, online bist und dein iCloud-Speicher nicht voll ist. Prüfe außerdem in der App „Einstellungen“ unter deinem Namen > iCloud, dass Recurrence iCloud verwenden darf. In Recurrence zeigt Einstellungen > iCloud den Synchronisierungsstatus. Klappt es immer noch nicht, tippe dort auf „Synchronisierungsbericht teilen“ und schick uns den Bericht.' },
      { q: 'Wie teile ich Aufgaben mit jemandem?', a: 'Drücke in deiner Liste lange auf eine Aufgabe und wähle „Teilen“, oder tippe oben in der Aufgabe auf die Teilen-Taste. Wähle, wen du einlädst und ob die Person Änderungen machen oder nur ansehen darf. Eingeladene brauchen Recurrence und ein iCloud-Konto. Um das Teilen zu beenden, öffne dasselbe Menü erneut. Wenn du eine geteilte Aufgabe löschst, wird sie für alle gelöscht.' },
      { q: 'Ich bekomme keine Erinnerungen.', a: 'Prüfe zuerst in der App „Einstellungen“ unter „Mitteilungen“, dass Recurrence Mitteilungen senden darf und kein Fokus sie stummschaltet. In Recurrence zeigt Einstellungen > Mitteilungen, ob die Berechtigung aktiv ist. Jede Aufgabe hat beim Bearbeiten eigene Erinnerungen im Bereich „Mitteilungen“: vorher, am Tag selbst oder bei Überfälligkeit. Unter Einstellungen > Standardwerte > Mitteilungen legst du fest, mit welchen Erinnerungen neue Aufgaben starten. iOS begrenzt, wie viele Erinnerungen eine App im Voraus planen kann. Öffne Recurrence also ab und zu, damit sie weiter kommen.' },
      { q: 'Wie stelle ich meinen Premium-Kauf wieder her?', a: 'Öffne in Recurrence die Einstellungen, tippe im Banner „Recurrence Premium“ auf „Entdecken“ und dann unten auf „Wiederherstellen“. Achte darauf, mit dem Apple Account angemeldet zu sein, mit dem du Premium gekauft hast.' },
      { q: 'Kann ich Premium zuerst testen?', a: 'Ja. Recurrence Premium enthält einen kostenlosen Testzeitraum, der dir im App Store vor dem Abschluss angezeigt wird.' },
      { q: 'Funktioniert Premium auf allen meinen Geräten?', a: 'Ja. Ein Kauf schaltet Premium auf iPhone, iPad und Mac frei und lässt sich über die Familienfreigabe mit deiner Familie teilen.' },
      { q: 'Wie kündige ich mein Abo?', a: 'Abos verwaltest du in den Einstellungen deines Apple Accounts. Du kannst jederzeit kündigen, spätestens 24 Stunden vor der nächsten Verlängerung.' },
    ],
  },

  press: {
    meta: {
      title: 'Pressematerial | Recurrence',
      description: 'Pressematerial zu Recurrence: App-Beschreibung, wichtige Fakten, Screenshots, App-Symbol und Kontakt für Journalisten und Tester.',
    },
    h1: 'Pressematerial',
    intro: 'Recurrence ist eine App für wiederkehrende Aufgaben auf iPhone, iPad und Mac von Shayes Apps, einem unabhängigen Entwickler. Sie erinnert an fällige Aufgaben und speichert jedes Erledigen im Verlauf.',
    facts: [
      { label: 'Entwickler', value: 'Shayes Apps' },
      { label: 'Plattformen', value: 'iPhone, iPad, Mac' },
      { label: 'Preis', value: 'Kostenlos, optionales Abo' },
      { label: 'Sprachen', value: '16' },
      { label: 'Bewertung im App Store', value: '4,7+ Sterne' },
    ],
    kitTitle: 'Material herunterladen',
    kitBody: 'Screenshots, gerahmte Screenshots, das App-Symbol und ein Banner (auf Englisch).',
    kitLink: 'Pressematerial laden (ZIP, 12 MB)',
    contactTitle: 'Pressekontakt',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: 'Datenschutz & Nutzungsbedingungen | Recurrence', description: 'Recurrence erfasst keine personenbezogenen Daten und verfolgt dich nicht. Deine Aufgaben werden über iCloud synchronisiert. Dazu die Bedingungen für Premium-Abos.' },
    h1: 'Datenschutz & Nutzungsbedingungen',
    docs: [
      {
        id: 'privacy',
        title: 'Datenschutzerklärung',
        updated: '26. November 2026',
        sections: [
          { title: 'Kurz und knapp', body: ['Unsere Erklärung ist kurz und knapp, weil uns deine Daten und deine Privatsphäre wichtig sind. Recurrence verfolgt dich nicht und erfasst keine personenbezogenen Daten. Wir verlassen uns auf so wenige Drittanbieter wie möglich.'] },
          { title: 'Zahlungen', body: ['Zahlungen für In-App-Käufe und Abos laufen über den App Store, daher haben wir nie Zugriff auf deine Kreditkartendaten. Recurrence enthält das RevenueCat SDK. Bitte beachte die Richtlinien von RevenueCat.'] },
          { title: 'Synchronisierung und Teilen', body: ['Die Synchronisierung läuft über iCloud (Apples CloudKit). CloudKit ist vollständig verschlüsselt, und alle Daten liegen auf Apples Infrastruktur. Niemand außer dir hat Zugriff auf deine Daten, abgesehen von den Personen, mit denen du Aufgaben teilst.'] },
          { title: 'Rückerstattungen', body: ['Indem du Recurrence nutzt und In-App-Käufe tätigst, stimmst du zu, dass wir Daten über deine Nutzung gekaufter Inhalte mit Apple teilen, um Anfragen zur Rückerstattung zu bearbeiten. Dazu können Angaben gehören, wie du auf die gekauften Inhalte zugegriffen und sie genutzt hast. Diese Daten helfen Apple, über Rückerstattungen fundiert zu entscheiden. Wir teilen sie nur im Einklang mit Apples Richtlinien und nur, soweit es für deine Anfrage nötig ist.'] },
          { title: 'Fragen', body: ['Bei Fragen oder Bedenken zu unserer Datenschutzerklärung erreichst du uns unter support@shayesapps.com.'] },
        ],
      },
      {
        id: 'terms',
        title: 'Nutzungsbedingungen',
        updated: '26. November 2026',
        sections: [
          { title: 'Bedingungen für das Premium-Abo', body: ['Abos verlängern sich automatisch, wenn sie nicht spätestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt werden. Du kannst jederzeit in den Einstellungen deines Apple Accounts kündigen. Ein nicht genutzter Teil eines kostenlosen Testzeitraums verfällt, wenn du ein Abo abschließt.'] },
          { title: 'Fragen', body: ['Bei Fragen oder Bedenken zu unseren Nutzungsbedingungen erreichst du uns unter support@shayesapps.com.'] },
        ],
      },
    ],
  },

  screenAlt: {
    home: 'Aufgabenliste von Recurrence auf dem iPhone mit überfälligen, heutigen und anstehenden Aufgaben',
    history: 'Der Verlauf einer Aufgabe mit Daten und Notizen',
    widgets: 'Recurrence-Widgets auf dem Home-Bildschirm des iPhone',
    add: 'Eine Aufgabe, die 4 Wochen nach der letzten Erledigung wiederkehrt, wird bearbeitet',
  },

  labels: {
    sampleList: 'Beispielliste',
    whatYouGet: 'Warum es funktioniert',
    relatedUseCases: 'Passt auch dazu',
    allUseCases: 'Alle Einsatzbereiche',
    comparedOn: 'Verglichen nach',
    feature: 'Funktion',
    whenOtherTitle: 'Wann die andere App besser passt',
    verdictTitle: 'Kurz gesagt',
    lastChecked: 'Zuletzt geprüft',
    lastUpdated: 'Zuletzt aktualisiert',
    faqTitle: 'Fragen',
    readMore: 'Mehr erfahren',
    fiveStars: '5 von 5 Sternen',
  },
};

export default de;
