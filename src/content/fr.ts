// French (France) copy, written from en-US. Formal "vous", matching the app.
// Task names, tabs and settings use the app's own French strings.
// Spaces before ? ! ; : and inside « » are non-breaking, per French typography.

import type { SiteContent } from './types';
import enUS from './en-US';
import tools from './tools/fr';

const fr: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence : tâches récurrentes pour iPhone, iPad et Mac',
      description: 'Ménage, factures, animaux, entretien : Recurrence vous rappelle vos tâches récurrentes et garde une trace de chaque fois que vous les faites. Gratuit pour commencer.',
    },
    heroAccentBefore: 'Ne laissez filer aucune ',
    heroAccent: 'tâche récurrente',
    heroAccentAfter: '',
    intro: 'Ménage, factures, traitements des animaux et entretien de la maison. Recurrence vous rappelle quand c’est le moment et se souvient de chaque fois que vous l’avez fait.',
    useCasesTitle: 'Une seule app pour tout ce qui se répète',
    useCasesIntro: 'Du jour des poubelles à la visite annuelle chez le vétérinaire, chaque tâche garde son propre calendrier et son historique.',
    historyKicker: 'Historique',
    historyTitle: 'Sachez exactement quand vous l’avez fait pour la dernière fois',
    historyBody: 'Chaque réalisation est enregistrée avec la date et une note facultative. Vous savez ainsi quand le filtre a été changé, ce que le vétérinaire a prescrit ou combien a coûté la dernière réparation. Une semaine sautée ? C’est noté aussi.',
    bullets: [
      'Répétition selon un calendrier, ou un délai fixe après la dernière fois',
      'Rappels avant l’échéance, le jour même et en cas de retard',
      'Widgets pour l’écran d’accueil et l’écran verrouillé',
      'Partage des tâches en famille via iCloud, pour voir qui a fait quoi',
      'Synchronisation entre iPhone, iPad et Mac',
    ],
    reviewsTitle: 'Apprécié pour garder le quotidien en ordre',
    reviews: [],
    freeTitle: 'Gratuit pour commencer',
    freeBody: 'Suivez jusqu’à 5 tâches gratuitement. Recurrence Premium débloque les tâches illimitées et partagées, avec un abonnement mensuel ou annuel, ou un achat unique à vie.',
    faqTitle: 'Questions',
    faq: [
      { q: 'En quoi Recurrence est-il différent d’une liste de tâches ?', a: 'Une liste de tâches oublie une tâche dès que vous la cochez. Recurrence planifie la prochaine fois et garde une trace de chaque réalisation, avec des notes, pour que vous sachiez toujours quand vous l’avez faite pour la dernière fois.' },
      { q: 'Puis-je partager des tâches avec ma famille ?', a: 'Oui. Partagez n’importe quelle tâche via iCloud, et les personnes invitées peuvent aussi la cocher. L’historique de chaque tâche indique qui l’a terminée et quand.' },
      { q: 'Que se passe-t-il si je manque une tâche ?', a: 'Elle passe dans « En retard » et continue de vous le rappeler. Pour les tâches qui doivent simplement repartir quand vous les faites, choisissez « À partir de la dernière réalisation » : les semaines manquées ne s’accumulent pas.' },
    ],
  },

  features: {
    meta: {
      title: 'Fonctionnalités : rappels, répétitions, historique | Recurrence',
      description: 'Répétitions flexibles, rappels avant et après l’échéance, historique complet avec notes, widgets, partage iCloud et synchronisation sur iPhone, iPad et Mac.',
    },
    h1: 'Tout ce qu’il faut pour suivre ce qui se répète',
    intro: 'Recurrence repose sur une idée : une tâche récurrente n’est jamais vraiment terminée. Elle revient, et il est utile de savoir quand vous l’avez faite pour la dernière fois.',
    sections: [
      {
        title: 'Répétez selon n’importe quel calendrier',
        body: 'Faites revenir une tâche à des dates fixes, comme tous les jeudis ou le 1er de chaque mois, ou après un délai fixe depuis la dernière fois, comme 6 semaines après votre dernière coupe de cheveux.',
        points: ['Calendriers quotidiens, hebdomadaires, mensuels et annuels', 'Répétition après un délai fixe depuis la dernière réalisation', 'Verrouillez une tâche pour qu’elle ne puisse pas être cochée avant l’échéance'],
        screen: 'add',
      },
      {
        title: 'Un historique complet pour chaque routine',
        body: 'Chaque réalisation est enregistrée avec sa date et une note facultative. Les tâches ignorées sont notées aussi, pour un historique fidèle.',
        points: ['Une note pour chaque réalisation', 'Terminée ou ignorée, tout est noté', 'Voyez à quelle fréquence une tâche est vraiment faite'],
        screen: 'history',
      },
      {
        title: 'Des rappels adaptés à chaque tâche',
        body: 'Recevez une notification quelques jours avant l’échéance, le jour même ou une fois en retard. Définissez des valeurs par défaut une fois, ou réglez chaque tâche.',
        points: ['Avant, le jour même et après l’échéance', 'Notifications réglables pour chaque tâche', 'Terminez des tâches avec les Raccourcis Siri'],
        screen: 'home',
      },
      {
        title: 'Votre liste en un coup d’œil',
        body: 'Les widgets montrent ce qui est en retard, ce qui est prévu aujourd’hui et ce qui arrive, directement sur l’écran d’accueil ou l’écran verrouillé.',
        points: ['Widgets pour l’écran d’accueil et l’écran verrouillé', 'Filtrez un widget sur une catégorie', 'Catégories, recherche et filtres dans l’app'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Suivez ménage, factures, animaux et plus | Recurrence',
      description: 'Que suivre avec Recurrence : ménage, factures, animaux, entretien de la maison et de la voiture, plantes, bien-être et tâches familiales, avec des listes prêtes.',
    },
    h1: 'Que voulez-vous suivre ?',
    intro: 'Recurrence convient à tout ce qui se répète. Voici les usages les plus courants, chacun avec une liste prête à l’emploi.',
  },

  useCases: {
    chores: {
      meta: { title: 'Application de tâches ménagères et planning ménage | Recurrence', description: 'Poubelles, lessive, ménage : Recurrence planifie vos tâches ménagères récurrentes, vous les rappelle et montre quand chacune a été faite.' },
      name: 'Tâches ménagères',
      blurb: 'Poubelles, lessive, ménage',
      h1: 'Un planning de ménage qui se souvient de la dernière fois',
      intro: 'Certaines tâches tombent un jour fixe, comme la sortie des poubelles. D’autres doivent juste être faites de temps en temps, comme laver les draps. Recurrence gère les deux et garde un historique, pour que personne n’ait à deviner.',
      sampleTitle: 'Une liste de tâches ménagères pour commencer',
      sample: [
        { name: 'Sortir les poubelles', schedule: 'Tous les jeudis' },
        { name: 'Laver les draps', schedule: '1 semaine après la dernière fois' },
        { name: 'Arroser les plantes', schedule: '1 semaine après la dernière fois' },
        { name: 'Changer le filtre à air', schedule: '3 mois après la dernière fois' },
      ],
      points: [
        { title: 'Jours fixes ou intervalles souples', body: 'Les poubelles sortent tous les jeudis. Les draps sont lavés une semaine après la dernière fois, quelle qu’en soit la date.' },
        { title: 'Partagez la charge', body: 'Partagez les tâches avec votre foyer et voyez qui s’est occupé de chacune.' },
        { title: 'Pas d’accumulation après une semaine chargée', body: 'Les tâches qui se répètent à partir de la dernière réalisation repartent simplement quand vous les faites.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'Application de rappel de factures et abonnements | Recurrence', description: 'Ne manquez plus le loyer, la carte de crédit ou un renouvellement. Recurrence vous prévient avant chaque échéance et garde une trace de chaque paiement.' },
      name: 'Factures et abonnements',
      blurb: 'Loyer, carte de crédit, renouvellements',
      h1: 'Un rappel avant chaque facture, et une trace après',
      intro: 'Réglez chaque facture sur sa date d’échéance et recevez un rappel quelques jours avant. Marquez-la comme payée et ajoutez une note, comme le montant ou un numéro de confirmation, pour la retrouver plus tard.',
      sampleTitle: 'Une liste de factures pour commencer',
      sample: [
        { name: 'Payer le loyer', schedule: 'Le 1er de chaque mois' },
        { name: 'Payer la carte de crédit', schedule: 'Le 20 de chaque mois' },
        { name: 'Vérifier les abonnements', schedule: '3 mois après la dernière fois' },
      ],
      points: [
        { title: 'Rappels quelques jours avant', body: 'Choisissez quand vous voulez être prévenu de chaque facture.' },
        { title: 'Une note pour chaque paiement', body: 'Gardez le montant ou le numéro de confirmation avec chaque réalisation.' },
        { title: 'Les renouvellements qu’on oublie', body: 'Renouvellements annuels et vérifications trimestrielles côtoient les factures mensuelles.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Rappels de traitements et soins pour animaux | Recurrence', description: 'Traitements contre le ver du cœur et les puces, toilettage, vétérinaire : Recurrence vous les rappelle à temps et enregistre chaque dose et chaque visite.' },
      name: 'Animaux',
      blurb: 'Traitements, toilettage, vétérinaire',
      h1: 'Des rappels pour vos animaux, avec une trace de chaque dose',
      intro: 'Traitements mensuels, toilettage toutes les quelques semaines et visite annuelle : il est facile de s’y perdre. Recurrence vous les rappelle et note chacun, pour dire au vétérinaire exactement quand a eu lieu la dernière dose.',
      sampleTitle: 'Une liste pour vos animaux',
      sample: [
        { name: 'Traitement contre le ver du cœur', schedule: 'Le 1er de chaque mois' },
        { name: 'Traitement antipuces et antitiques', schedule: 'Le 15 de chaque mois' },
        { name: 'Toiletter le chien', schedule: '6 semaines après la dernière fois' },
        { name: 'Visite chez le vétérinaire', schedule: '1 an après la dernière fois' },
      ],
      points: [
        { title: 'Sachez quand a eu lieu la dernière dose', body: 'L’historique montre chaque réalisation : ni dose en double, ni oubli.' },
        { title: 'Les notes du vétérinaire', body: 'Notez le poids ou la prescription à chaque visite.' },
        { title: 'Partagé avec le foyer', body: 'Celui qui donne le traitement le coche, et tout le monde le voit.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'Entretien de la maison : application de rappels | Recurrence', description: 'Filtres à air, filtres à eau, tests des détecteurs de fumée et travaux saisonniers : Recurrence vous rappelle l’entretien de la maison et en garde un journal.' },
      name: 'Entretien de la maison',
      blurb: 'Filtres, détecteurs de fumée, saisons',
      h1: 'Des rappels pour l’entretien que l’on ne fait que quelques fois par an',
      intro: 'Filtres, détecteurs de fumée et travaux saisonniers reviennent assez rarement pour qu’on les oublie. Recurrence compte à partir de la dernière fois et vous dit quand c’est à refaire.',
      sampleTitle: 'Une liste d’entretien pour commencer',
      sample: [
        { name: 'Changer le filtre à air', schedule: '3 mois après la dernière fois' },
        { name: 'Changer le filtre à eau', schedule: '6 mois après la dernière fois' },
        { name: 'Tester les détecteurs de fumée', schedule: '6 mois après la dernière fois' },
      ],
      points: [
        { title: 'Compté depuis la dernière fois', body: 'Filtre changé en retard ? Le prochain rappel se décale aussi.' },
        { title: 'Un journal pour la maison', body: 'Notez la taille du filtre ou le nom de l’artisan à chaque intervention.' },
        { title: 'Rien dans votre calendrier', body: 'Les tâches rares restent hors de votre calendrier jusqu’à leur échéance.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'Entretien de la voiture : application de rappels | Recurrence', description: 'Vidange, pression des pneus, essuie-glaces : Recurrence vous rappelle l’entretien de la voiture au bon moment et garde le kilométrage et vos notes.' },
      name: 'Entretien de la voiture',
      blurb: 'Vidange, pneus, essuie-glaces',
      h1: 'Des rappels d’entretien auto, avec le kilométrage en note',
      intro: 'Vidange, pression des pneus et nouveaux essuie-glaces n’ont pas le même rythme. Recurrence les réunit au même endroit et se souvient de ce que vous avez fait la dernière fois.',
      sampleTitle: 'Une liste d’entretien auto pour commencer',
      sample: [
        { name: 'Vidange', schedule: '6 mois après la dernière fois' },
        { name: 'Vérifier la pression des pneus', schedule: '1 mois après la dernière fois' },
        { name: 'Remplacer les essuie-glaces', schedule: '1 an après la dernière fois' },
        { name: 'Laver la voiture', schedule: '2 semaines après la dernière fois' },
      ],
      points: [
        { title: 'Le kilométrage à chaque entretien', body: 'Ajoutez le relevé du compteur en note quand vous terminez une tâche.' },
        { title: 'Toutes vos voitures dans une liste', body: 'Utilisez une catégorie par voiture pour les distinguer.' },
        { title: 'Prévenu à l’avance', body: 'Soyez averti avant l’échéance d’un entretien, pas après.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'Application de rappel d’arrosage des plantes | Recurrence', description: 'Arrosez chaque plante à son rythme. Recurrence vous rappelle quand elle a besoin d’eau, compte à partir du dernier arrosage et montre qui l’a arrosée.' },
      name: 'Plantes et jardin',
      blurb: 'Arrosage, engrais, rempotage',
      h1: 'Des rappels d’arrosage qui comptent depuis le dernier arrosage',
      intro: 'Les plantes ne suivent pas le calendrier. Recurrence vous prévient un certain temps après le dernier arrosage : un arrosage en retard repousse donc le suivant.',
      sampleTitle: 'Une liste pour vos plantes',
      sample: [
        { name: 'Arroser les plantes', schedule: '1 semaine après la dernière fois' },
      ],
      points: [
        { title: 'Compté depuis le dernier arrosage', body: 'Le prochain rappel part du moment où vous avez vraiment arrosé.' },
        { title: 'Voyez qui a arrosé', body: 'Quand une tâche de plante est partagée, l’historique montre qui a arrosé et quand.' },
        { title: 'Des notes pour chaque plante', body: 'Notez l’engrais ou le rempotage à côté du journal d’arrosage.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Rappels bien-être : coiffeur, dentiste et plus | Recurrence', description: 'Coiffeur, contrôle chez le dentiste, nouvelle brosse à dents, vitamines : Recurrence vous les rappelle à temps et garde la date de chaque visite.' },
      name: 'Bien-être',
      blurb: 'Coiffeur, dentiste, vitamines',
      h1: 'Des rappels pour les rendez-vous que l’on repousse facilement',
      intro: 'Le coiffeur toutes les six semaines, le dentiste deux fois par an et une nouvelle brosse à dents tous les trois mois. Recurrence retient les dates à votre place.',
      sampleTitle: 'Une liste bien-être pour commencer',
      sample: [
        { name: 'Se faire couper les cheveux', schedule: '6 semaines après la dernière fois' },
        { name: 'Remplacer la brosse à dents', schedule: '3 mois après la dernière fois' },
        { name: 'Contrôle chez le dentiste', schedule: '6 mois après la dernière fois' },
        { name: 'Prendre ses vitamines', schedule: 'Tous les jours' },
      ],
      points: [
        { title: 'Retrouvez votre dernière visite', body: 'L’historique répond à « C’était quand, mon dernier contrôle ? » en une seconde.' },
        { title: 'Chaque jour ou deux fois par an', body: 'Habitudes quotidiennes et rendez-vous rares tiennent dans une seule liste.' },
        { title: 'Privé par défaut', body: 'Vos tâches restent dans votre compte iCloud, sauf si vous les partagez.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'Application de tâches partagées en famille | Recurrence', description: 'Partagez vos tâches récurrentes en famille via iCloud. Tout le monde peut les cocher, et l’historique de chaque tâche montre qui l’a faite et quand.' },
      name: 'Tâches partagées en famille',
      blurb: 'Voyez qui l’a fait, et quand',
      h1: 'Des tâches récurrentes partagées pour tout le foyer',
      intro: 'Partagez des tâches via iCloud, et chaque personne invitée peut les terminer. L’historique montre qui s’est occupé de quoi. Fini les « Tu as nourri le chien ? »',
      sampleTitle: 'Une liste partagée pour le foyer',
      sample: [
        { name: 'Sortir les poubelles', schedule: 'Tous les jeudis' },
        { name: 'Arroser les plantes', schedule: '1 semaine après la dernière fois' },
        { name: 'Traitement contre le ver du cœur', schedule: 'Le 1er de chaque mois' },
      ],
      points: [
        { title: 'Partagé via iCloud', body: 'Invitez des membres de la famille à n’importe quelle tâche avec le partage iCloud. Il leur suffit de Recurrence et d’un compte iCloud.' },
        { title: 'Voyez qui l’a fait', body: 'Chaque réalisation d’une tâche partagée indique qui l’a cochée.' },
        { title: 'Chacun reçoit ses rappels', body: 'Chaque personne règle les rappels qui lui conviennent.' },
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
      title: 'Assistance et aide | Recurrence',
      description: 'Aide pour Recurrence : synchronisation, partage, rappels, widgets et Premium. Réponses aux questions fréquentes et comment nous contacter.',
    },
    h1: 'Comment pouvons-nous vous aider ?',
    intro: 'Les réponses aux questions les plus fréquentes sur Recurrence.',
    contact: { q: 'Vous avez une autre question ?', a: 'Écrivez-nous à support@shayesapps.com.' },
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Mes tâches ne se synchronisent pas entre mes appareils.', a: 'Recurrence se synchronise via iCloud. Sur chaque appareil, vérifiez que vous êtes connecté à iCloud avec le même compte Apple, que vous êtes en ligne et que votre stockage iCloud n’est pas plein. Vérifiez aussi que Recurrence peut utiliser iCloud dans l’app Réglages, sous votre nom > iCloud. Dans Recurrence, Réglages > iCloud affiche l’état de la synchronisation. Si elle ne fonctionne toujours pas, touchez « Partager le rapport de synchronisation » sur cet écran et envoyez-nous le rapport.' },
      { q: 'Comment partager des tâches avec quelqu’un ?', a: 'Touchez longuement une tâche dans votre liste et choisissez « Partager », ou touchez le bouton de partage en haut de la tâche. Choisissez qui inviter et si ces personnes peuvent modifier la tâche ou seulement la consulter. Les personnes invitées ont besoin de Recurrence et d’un compte iCloud. Pour arrêter le partage, ouvrez le même menu, qui affiche désormais « Partage ». Supprimer une tâche partagée la supprime pour tout le monde.' },
      { q: 'Je ne reçois pas de rappels.', a: 'Vérifiez d’abord que les notifications sont autorisées pour Recurrence dans l’app Réglages, sous Notifications, et qu’aucun mode de concentration ne les fait taire. Dans Recurrence, Réglages > Notifications indique si l’autorisation est activée. Chaque tâche a ses propres rappels dans la section Notifications quand vous la modifiez : avant l’échéance, le jour même ou une fois en retard. Réglages > Valeurs par défaut > Notifications définit les rappels des nouvelles tâches. iOS limite le nombre de rappels qu’une app peut programmer à l’avance : ouvrez donc Recurrence de temps en temps pour continuer à les recevoir.' },
      { q: 'Comment restaurer mon achat Premium ?', a: 'Dans Recurrence, allez dans Réglages, touchez « Découvrir » sur la bannière Recurrence Premium, puis touchez « Restaurer » en bas de l’écran. Vérifiez que vous êtes connecté avec le compte Apple utilisé pour acheter Premium.' },
      { q: 'Puis-je essayer Premium d’abord ?', a: 'Oui. Recurrence Premium comprend un essai gratuit, indiqué dans l’App Store avant que vous vous abonniez.' },
      { q: 'Premium fonctionne-t-il sur tous mes appareils ?', a: 'Oui. Un seul achat débloque Premium sur iPhone, iPad et Mac, et peut être partagé avec votre famille grâce au Partage familial.' },
      { q: 'Comment résilier mon abonnement ?', a: 'Les abonnements se gèrent dans les réglages de votre compte Apple et peuvent être résiliés à tout moment, au moins 24 heures avant le prochain renouvellement.' },
    ],
  },

  press: {
    meta: {
      title: 'Kit presse | Recurrence',
      description: 'Kit presse de Recurrence : description de l’app, chiffres clés, captures d’écran, icône et contact pour les journalistes et les testeurs.',
    },
    h1: 'Kit presse',
    intro: 'Recurrence est une app de suivi des tâches récurrentes pour iPhone, iPad et Mac, créée par Shayes Apps, un développeur indépendant. Elle rappelle les tâches qui reviennent et garde l’historique de chaque réalisation.',
    facts: [
      { label: 'Développeur', value: 'Shayes Apps' },
      { label: 'Plateformes', value: 'iPhone, iPad, Mac' },
      { label: 'Prix', value: 'Gratuit, avec abonnement facultatif' },
      { label: 'Langues', value: '16' },
      { label: 'Note sur l’App Store', value: '4,7+ étoiles' },
    ],
    kitTitle: 'Télécharger le kit',
    kitBody: 'Captures d’écran, captures avec cadre, l’icône de l’app et une bannière (en anglais).',
    kitLink: 'Télécharger le kit presse (ZIP, 12 Mo)',
    contactTitle: 'Contact presse',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: 'Confidentialité et conditions d’utilisation | Recurrence', description: 'Recurrence ne vous suit pas et ne collecte aucune donnée personnelle. Vos tâches se synchronisent via iCloud. Et les conditions des abonnements Premium.' },
    h1: 'Politique de confidentialité et conditions d’utilisation',
    docs: [
      {
        id: 'privacy',
        title: 'Politique de confidentialité',
        updated: '26 novembre 2026',
        sections: [
          { title: 'En bref', body: ['Notre politique est courte et simple, car nous tenons à vos informations et à votre vie privée. Recurrence ne vous suit pas et ne collecte aucune donnée personnelle identifiable. Nous faisons de notre mieux pour limiter le nombre de services tiers sur lesquels nous nous appuyons.'] },
          { title: 'Paiements', body: ['Les paiements des achats intégrés et des abonnements passent par l’App Store, nous n’avons donc jamais accès à vos informations de carte bancaire. Recurrence intègre le SDK RevenueCat. Veuillez consulter ses politiques.'] },
          { title: 'Synchronisation et partage', body: ['La synchronisation des données passe par iCloud (CloudKit d’Apple). CloudKit est entièrement chiffré et toutes les données sont stockées sur l’infrastructure d’Apple. Personne d’autre que vous n’a accès à vos données, à l’exception des personnes avec qui vous choisissez de partager des tâches.'] },
          { title: 'Demandes de remboursement', body: ['En utilisant Recurrence et en effectuant des achats intégrés, vous consentez à ce que nous partagions avec Apple des données sur votre utilisation des contenus achetés, dans le cadre du traitement des demandes de remboursement. Ces informations peuvent inclure des détails sur la manière dont vous avez accédé aux contenus achetés et interagi avec eux. Ce partage a pour but d’aider Apple à prendre une décision éclairée sur les demandes de remboursement. Nous veillons à ce qu’il respecte les règles d’Apple et se limite à ce qui est nécessaire pour traiter vos demandes.'] },
          { title: 'Questions', body: ['Pour toute question ou préoccupation concernant notre politique de confidentialité, contactez-nous à support@shayesapps.com.'] },
        ],
      },
      {
        id: 'terms',
        title: 'Conditions d’utilisation',
        updated: '26 novembre 2026',
        sections: [
          { title: 'Conditions de l’abonnement Premium', body: ['Les abonnements se renouvellent automatiquement, sauf résiliation au moins 24 heures avant la fin de la période en cours. Vous pouvez résilier à tout moment dans les réglages de votre compte Apple. Toute partie inutilisée d’un essai gratuit est perdue si vous souscrivez un abonnement.'] },
          { title: 'Questions', body: ['Pour toute question ou préoccupation concernant nos conditions d’utilisation, contactez-nous à support@shayesapps.com.'] },
        ],
      },
    ],
  },

  tools,
  screenAlt: {
    home: 'Liste de tâches Recurrence sur iPhone, avec les tâches en retard, du jour et à venir',
    history: 'L’historique d’une tâche avec dates et notes',
    widgets: 'Widgets Recurrence sur l’écran d’accueil de l’iPhone',
    add: 'Modification d’une tâche qui se répète 4 semaines après la dernière réalisation',
  },

  labels: {
    sampleList: 'Exemple de liste',
    whatYouGet: 'Pourquoi ça marche',
    relatedUseCases: 'Autres idées',
    allUseCases: 'Toutes les idées',
    comparedOn: 'Points comparés',
    feature: 'Fonctionnalité',
    whenOtherTitle: 'Quand l’autre app peut mieux vous convenir',
    verdictTitle: 'En bref',
    lastChecked: 'Dernière vérification',
    lastUpdated: 'Dernière mise à jour',
    faqTitle: 'Questions',
    readMore: 'En savoir plus',
    fiveStars: '5 étoiles sur 5',
  },
};

export default fr;
