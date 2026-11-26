// English (US) source copy. Every other locale is written from this file.
// Draft status: phase 1 copy, awaiting Stephen's review (phase 2 gate).

import type { SiteContent } from './types';

const en: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence: Recurring Task Tracker for iPhone, iPad & Mac',
      description: 'Track chores, bills, pet meds and home maintenance. Recurrence reminds you when a recurring task is due and remembers every time you did it. Free to start.',
    },
    heroAccentBefore: 'Stay ahead of every ',
    heroAccent: 'recurring task',
    heroAccentAfter: '',
    intro: 'Chores, bills, pet meds and home maintenance. Recurrence reminds you when something is due and remembers every time you did it.',
    useCasesTitle: 'One app for everything that repeats',
    useCasesIntro: 'From trash day to the yearly vet visit, each task keeps its own schedule and history.',
    historyKicker: 'History',
    historyTitle: 'Know exactly when you last did it',
    historyBody: 'Every completion is logged with the date and an optional note, so you can see when the filter was changed, what the vet prescribed, or how much the last repair cost. Skipped a week? That is logged too.',
    bullets: [
      'Repeat on a calendar schedule, or a set time after you last did it',
      'Reminders before a task is due, on the day, and when it is overdue',
      'Home Screen and Lock Screen widgets',
      'Share tasks with family over iCloud and see who did what (Premium)',
      'Syncs across iPhone, iPad and Mac',
    ],
    reviewsTitle: 'Loved for keeping life on track',
    reviews: [
      { quote: '[Review to be chosen]' },
      { quote: '[Review to be chosen]' },
      { quote: '[Review to be chosen]' },
    ],
    freeTitle: 'Free to start',
    freeBody: 'Track up to 5 tasks for free. Recurrence Premium unlocks unlimited tasks and shared tasks, as a monthly or yearly subscription or a one-time lifetime purchase.',
    faqTitle: 'Questions',
    faq: [
      { q: 'How is Recurrence different from a to-do list?', a: 'A to-do list forgets a task once you check it off. Recurrence schedules the next time and keeps a record of every completion, with notes, so you always know when you last did something.' },
      { q: 'Can I share tasks with my family?', a: 'Yes, with Recurrence Premium. Share a category over iCloud and everyone in it can complete its tasks. Each task’s history shows who completed it and when.' },
      { q: 'What happens if I miss a task?', a: 'It moves to Overdue and keeps reminding you. For tasks that should simply restart when you get to them, choose a schedule that repeats from your last completion, so missed weeks don’t pile up.' },
    ],
  },

  features: {
    meta: {
      title: 'Features: Schedules, Reminders & History | Recurrence',
      description: 'Flexible repeat schedules, reminders before and after due dates, a full completion history with notes, widgets, iCloud sharing and sync across iPhone, iPad and Mac.',
    },
    h1: 'Everything you need to keep up with what repeats',
    intro: 'Recurrence is built around one idea: a recurring task is never really done. It comes back, and it helps to know when you last did it.',
    sections: [
      {
        title: 'Repeat on any schedule',
        body: 'Set a task to repeat on calendar dates, like every Thursday or the 1st of the month, or a set time after you last did it, like 6 weeks after your last haircut.',
        points: ['Daily, weekly, monthly and yearly calendar schedules', 'Repeat a set time after the last completion', 'Lock a task so it can’t be checked off before it’s due'],
        screen: 'add',
      },
      {
        title: 'A complete history for every routine',
        body: 'Each completion is saved with its date and an optional note. Skipped ones are logged too, so the record stays honest.',
        points: ['Notes on every completion', 'Done or skipped, it’s logged', 'See how often a task really gets done'],
        screen: 'history',
      },
      {
        title: 'Reminders that fit the task',
        body: 'Get a notification days before something is due, on the day, or once it’s overdue. Set defaults once, or tune each task.',
        points: ['Before, on and after the due date', 'Per-task notification settings', 'Mark tasks done with Siri Shortcuts'],
        screen: 'home',
      },
      {
        title: 'Your list, at a glance',
        body: 'Widgets show what’s overdue, due today and coming up, right on your Home Screen or Lock Screen.',
        points: ['Home Screen and Lock Screen widgets', 'Filter a widget to one category', 'Categories, search and filters in the app'],
        screen: 'widgets',
      },
    ],
  },

  pricing: {
    meta: {
      title: 'Pricing: Free for 5 Tasks, Premium for Unlimited | Recurrence',
      description: 'Recurrence is free for up to 5 recurring tasks. Recurrence Premium unlocks unlimited tasks as a monthly or yearly subscription or a lifetime purchase.',
    },
    h1: 'Free to start. Premium when you need more.',
    intro: 'The free version includes reminders, widgets, history and sync. Premium removes the 5-task limit and adds shared tasks and bulk actions.',
    free: {
      title: 'Free',
      summary: 'For getting started with your most important routines.',
      items: ['Up to 5 tasks', 'Every repeat schedule', 'Full history and notes', 'Reminders and widgets', 'Sync across iPhone, iPad and Mac'],
    },
    premium: {
      title: 'Premium',
      summary: 'For keeping track of everything that repeats.',
      items: ['Everything in Free', 'Unlimited tasks', 'Shared tasks with family and friends', 'Bulk actions to edit many tasks at once'],
      plans: 'Monthly, yearly or lifetime. Prices are shown in the App Store in your local currency.',
    },
    faq: [
      { q: 'Can I try Premium first?', a: 'Yes. Recurrence Premium includes a free trial, shown in the App Store before you subscribe.' },
      { q: 'Does Premium work on all my devices?', a: 'Yes. One purchase unlocks Premium on iPhone, iPad and Mac, and it can be shared with your family through Family Sharing.' },
      { q: 'How do I cancel?', a: 'Subscriptions are managed in your Apple account settings and can be canceled at any time, at least 24 hours before the next renewal.' },
    ],
  },

  useCasesHub: {
    meta: {
      title: 'Use Cases: Chores, Bills, Pet Care & More | Recurrence',
      description: 'See how people use Recurrence to keep up with household chores, bills, pet medication, home and car maintenance, plants, self-care and shared family tasks.',
    },
    h1: 'What will you keep up with?',
    intro: 'Recurrence works for anything that repeats. Here are the most popular ways people use it, each with a ready-made list to start from.',
  },

  useCases: {
    chores: {
      meta: { title: 'Chore Tracker App for Recurring Household Chores | Recurrence', description: 'Keep up with trash day, laundry and cleaning. Recurrence tracks recurring chores, reminds you when they’re due and shows when each was last done.' },
      name: 'Household chores',
      blurb: 'Trash day, laundry, cleaning',
      h1: 'A chore tracker that remembers when you last did it',
      intro: 'Some chores happen on a fixed day, like trash night. Others just need doing every so often, like washing the sheets. Recurrence handles both, and keeps a history so nobody has to guess.',
      sampleTitle: 'A starter chore list',
      sample: [
        { name: 'Take Out Trash', schedule: 'Every Thursday' },
        { name: 'Wash Sheets', schedule: '1 week after you do it' },
        { name: 'Water Plants', schedule: '1 week after you do it' },
        { name: 'Change Air Filter', schedule: '3 months after you do it' },
      ],
      points: [
        { title: 'Fixed days or flexible intervals', body: 'Trash goes out every Thursday. Sheets get washed a week after the last time, whenever that was.' },
        { title: 'Share the load', body: 'With Premium, share a category with your household and see who took care of each chore.' },
        { title: 'No pile-up after a busy week', body: 'Tasks that repeat from the last completion simply restart when you get to them.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: 'Bill Reminder App for Bills & Subscriptions | Recurrence', description: 'Never miss rent, a credit card payment or a renewal. Recurrence reminds you before bills are due and keeps a record of every payment.' },
      name: 'Bills and subscriptions',
      blurb: 'Rent, credit cards, renewals',
      h1: 'Bill reminders before they’re due, and a record after',
      intro: 'Set each bill to its due date and get a reminder days ahead. Mark it paid and add a note, like the amount or a confirmation number, so you can look it up later.',
      sampleTitle: 'A starter bills list',
      sample: [
        { name: 'Pay Rent', schedule: 'Monthly on the 1st' },
        { name: 'Pay Credit Card', schedule: 'Monthly on the 20th' },
        { name: 'Review Subscriptions', schedule: '3 months after you do it' },
      ],
      points: [
        { title: 'Reminders days ahead', body: 'Choose how early you want to hear about each bill.' },
        { title: 'Notes on every payment', body: 'Keep the amount or confirmation number with each completion.' },
        { title: 'Renewals you’d otherwise forget', body: 'Yearly renewals and quarterly reviews sit next to monthly bills.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: 'Pet Medication Reminder & Pet Care Tracker | Recurrence', description: 'Remember heartworm and flea meds, grooming and vet visits. Recurrence reminds you on schedule and logs every dose and checkup with notes.' },
      name: 'Pet care',
      blurb: 'Meds, grooming, vet visits',
      h1: 'Pet care reminders, with a record of every dose',
      intro: 'Monthly meds, grooming every few weeks and a yearly checkup are easy to lose track of. Recurrence reminds you and logs each one, so you can tell the vet exactly when the last dose was.',
      sampleTitle: 'A starter pet care list',
      sample: [
        { name: 'Heartworm Meds', schedule: 'Monthly on the 1st' },
        { name: 'Flea & Tick Meds', schedule: 'Monthly on the 15th' },
        { name: 'Groom the Dog', schedule: '6 weeks after you do it' },
        { name: 'Vet Checkup', schedule: '1 year after you do it' },
      ],
      points: [
        { title: 'Know when the last dose was', body: 'The history shows every completion, so there’s no doubling up or skipping.' },
        { title: 'Notes from the vet', body: 'Record weight or what was prescribed with each checkup.' },
        { title: 'Shared with the household', body: 'Whoever gives the meds checks it off, and everyone sees it.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: 'Home Maintenance App & Reminder Tracker | Recurrence', description: 'Track air filters, water filters, smoke alarm tests and seasonal jobs. Recurrence reminds you when home maintenance is due and keeps a full log.' },
      name: 'Home maintenance',
      blurb: 'Filters, smoke alarms, seasonal jobs',
      h1: 'Home maintenance reminders for the jobs you only do a few times a year',
      intro: 'Filters, smoke alarms and seasonal jobs come around rarely enough to forget. Recurrence counts from the last time you did each one and tells you when it’s time again.',
      sampleTitle: 'A starter home maintenance list',
      sample: [
        { name: 'Change Air Filter', schedule: '3 months after you do it' },
        { name: 'Change Water Filter', schedule: '6 months after you do it' },
        { name: 'Test Smoke Alarms', schedule: '6 months after you do it' },
      ],
      points: [
        { title: 'Counts from the last time', body: 'Changed the filter late? The next reminder moves with it.' },
        { title: 'A log for the house', body: 'Note the filter size or the contractor’s name with each job.' },
        { title: 'Nothing on your calendar', body: 'Keep rare jobs out of your calendar until they’re due.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: 'Car Maintenance Reminder App | Recurrence', description: 'Remember oil changes, tire pressure checks and wiper replacements. Recurrence reminds you when car maintenance is due and logs mileage and notes.' },
      name: 'Car maintenance',
      blurb: 'Oil changes, tires, wipers',
      h1: 'Car maintenance reminders, with mileage in the notes',
      intro: 'Oil changes, tire checks and new wipers are due on different schedules. Recurrence keeps them in one place and remembers what you did last time.',
      sampleTitle: 'A starter car maintenance list',
      sample: [
        { name: 'Oil Change', schedule: '6 months after you do it' },
        { name: 'Check Tire Pressure', schedule: '1 month after you do it' },
        { name: 'Replace Wipers', schedule: '1 year after you do it' },
        { name: 'Wash the Car', schedule: '2 weeks after you do it' },
      ],
      points: [
        { title: 'Mileage with every service', body: 'Add the odometer reading as a note when you complete a task.' },
        { title: 'Every car in one list', body: 'Use a category per car to keep them apart.' },
        { title: 'Reminders ahead of time', body: 'Get a heads-up before a service is due, not after.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: 'Plant Watering Reminder App | Recurrence', description: 'Water plants on their own schedule. Recurrence reminds you when each plant needs water, counts from the last watering and shows who watered it.' },
      name: 'Plants and garden',
      blurb: 'Watering, feeding, repotting',
      h1: 'Plant watering reminders that count from the last watering',
      intro: 'Plants don’t follow the calendar. Recurrence reminds you a set time after the last watering, so a late watering pushes the next one back.',
      sampleTitle: 'A starter plant list',
      sample: [
        { name: 'Water Plants', schedule: '1 week after you do it' },
      ],
      points: [
        { title: 'Timed from the last watering', body: 'Each plant’s next reminder starts when you actually watered it.' },
        { title: 'See who watered', body: 'In a shared category, the history shows who watered and when.' },
        { title: 'Notes for each plant', body: 'Record feeding or repotting alongside the watering log.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: 'Self-Care Reminders for Haircuts, Dentist & More | Recurrence', description: 'Remember haircuts, dentist checkups, a new toothbrush and daily vitamins. Recurrence reminds you on schedule and keeps track of when you last went.' },
      name: 'Self-care',
      blurb: 'Haircuts, dentist, vitamins',
      h1: 'Self-care reminders for appointments that are easy to put off',
      intro: 'A haircut every six weeks, the dentist twice a year and a new toothbrush every three months. Recurrence keeps the dates so you don’t have to.',
      sampleTitle: 'A starter self-care list',
      sample: [
        { name: 'Get a Haircut', schedule: '6 weeks after you do it' },
        { name: 'Replace Toothbrush', schedule: '3 months after you do it' },
        { name: 'Dentist Checkup', schedule: '6 months after you do it' },
        { name: 'Take Vitamins', schedule: 'Every day' },
      ],
      points: [
        { title: 'Know when you last went', body: 'The history answers “when was my last checkup?” in a second.' },
        { title: 'Daily or twice a year', body: 'Daily habits and rare appointments live in one list.' },
        { title: 'Private by default', body: 'Your tasks stay in your iCloud account unless you share them.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: 'Shared Family Task & Chore App | Recurrence', description: 'Share recurring tasks with your family over iCloud. Everyone can check things off, and each task’s history shows who did it and when.' },
      name: 'Shared family tasks',
      blurb: 'See who did it, and when',
      h1: 'Shared recurring tasks for the whole household',
      intro: 'With Recurrence Premium, share a category over iCloud and everyone in it can complete its tasks. The history shows who took care of each one, so there’s no “did you feed the dog?”',
      sampleTitle: 'A shared household list',
      sample: [
        { name: 'Take Out Trash', schedule: 'Every Thursday' },
        { name: 'Water Plants', schedule: '1 week after you do it' },
        { name: 'Heartworm Meds', schedule: 'Monthly on the 1st' },
      ],
      points: [
        { title: 'Shared over iCloud', body: 'Invite family members to a category with iCloud sharing.' },
        { title: 'See who did it', body: 'Each completion in a shared task shows who checked it off.' },
        { title: 'Everyone gets reminded', body: 'Each person sets the reminders that suit them.' },
      ],
      screen: 'history',
      related: ['chores', 'pets', 'plants'],
    },
  },

  compareHub: {
    meta: {
      title: 'Compare Recurrence with Other Task Apps | Recurrence',
      description: 'How Recurrence compares with Apple Reminders, Todoist and Tody for recurring tasks, completion history and shared household chores.',
      draft: true,
    },
    h1: 'How Recurrence compares',
    intro: 'Recurrence is built for tasks that repeat. Here is how it stacks up against popular alternatives, and when one of them may suit you better.',
  },

  compare: {
    'apple-reminders': {
      meta: { title: 'Recurrence vs Apple Reminders for Recurring Tasks', description: 'Apple Reminders vs Recurrence: completion history, repeat-from-last-completion schedules, notes on each completion and shared tasks compared.', draft: true },
      name: 'Apple Reminders',
      h1: 'Recurrence vs Apple Reminders',
      intro: '[Draft, competitor details to verify in phase 4.]',
      lastChecked: '2026-11-25',
      rows: [
        { feature: 'Completion history for each task', recurrence: 'Yes', other: '[verify]' },
        { feature: 'Repeat from last completion', recurrence: 'Yes', other: '[verify]' },
        { feature: 'Notes on each completion', recurrence: 'Yes', other: '[verify]' },
        { feature: 'See who completed a shared task', recurrence: 'Yes', other: '[verify]' },
      ],
      whenOther: '[Draft]',
      verdict: '[Draft]',
    },
    todoist: {
      meta: { title: 'Recurrence vs Todoist for Recurring Tasks', description: 'Todoist vs Recurrence for repeating tasks: schedules, history, reminders and sharing compared.', draft: true },
      name: 'Todoist',
      h1: 'Recurrence vs Todoist',
      intro: '[Draft, competitor details to verify in phase 4.]',
      lastChecked: '2026-11-25',
      rows: [
        { feature: 'Completion history for each task', recurrence: 'Yes', other: '[verify]' },
        { feature: 'Repeat from last completion', recurrence: 'Yes', other: '[verify]' },
      ],
      whenOther: '[Draft]',
      verdict: '[Draft]',
    },
    tody: {
      meta: { title: 'Recurrence vs Tody for Household Chores', description: 'Tody vs Recurrence for recurring chores: schedules, history, sharing and what each tracks beyond cleaning.', draft: true },
      name: 'Tody',
      h1: 'Recurrence vs Tody',
      intro: '[Draft, competitor details to verify in phase 4.]',
      lastChecked: '2026-11-25',
      rows: [
        { feature: 'Tasks beyond cleaning (bills, pets, car)', recurrence: 'Yes', other: '[verify]' },
        { feature: 'Notes on each completion', recurrence: 'Yes', other: '[verify]' },
      ],
      whenOther: '[Draft]',
      verdict: '[Draft]',
    },
  },

  support: {
    meta: {
      title: 'Support & Help | Recurrence',
      description: 'Get help with Recurrence: syncing, sharing, reminders, widgets and Premium. Answers to common questions and how to contact support.',
    },
    h1: 'How can we help?',
    intro: 'Answers to the most common questions about Recurrence. Still stuck? Email us and a real person will reply.',
    contactTitle: 'Contact support',
    contactBody: 'Email support@shayesapps.com, or use Contact Support in the app’s More tab so we get your app version.',
    faqTitle: 'Common questions',
    faq: [
      { q: 'My tasks aren’t syncing between devices.', a: '[Answer to write in phase 2.]' },
      { q: 'How do I share tasks with someone?', a: '[Answer to write in phase 2.]' },
      { q: 'I’m not getting reminders.', a: '[Answer to write in phase 2.]' },
      { q: 'How do I restore my Premium purchase?', a: '[Answer to write in phase 2.]' },
    ],
  },

  press: {
    meta: {
      title: 'Press Kit | Recurrence',
      description: 'Recurrence press kit: app description, key facts, screenshots, app icon and contact details for journalists and reviewers.',
    },
    h1: 'Press kit',
    intro: 'Recurrence is a recurring task tracker for iPhone, iPad and Mac by Shayes Apps, an independent developer. It reminds people when repeating tasks are due and keeps a history of every completion.',
    facts: [
      { label: 'Developer', value: 'Shayes Apps LLC' },
      { label: 'Platforms', value: 'iPhone, iPad, Mac' },
      { label: 'Price', value: 'Free, with Recurrence Premium in-app' },
      { label: 'Languages', value: '16' },
      { label: 'App Store rating', value: '4.7 out of 5' },
    ],
    kitTitle: 'Download the kit',
    kitBody: 'Screenshots, framed screenshots, the app icon and a banner.',
    kitLink: 'Download press kit (ZIP, 12 MB)',
    contactTitle: 'Press contact',
    contactBody: 'support@shayesapps.com',
  },

  privacy: {
    meta: { title: 'Privacy Policy | Recurrence', description: 'How Recurrence handles your data.', draft: true },
    h1: 'Privacy policy',
    updated: '[Date]',
    sections: [{ title: '[Recurrence-only policy to be written in phase 2]', body: ['[Placeholder]'] }],
  },

  terms: {
    meta: { title: 'Terms of Use | Recurrence', description: 'Terms of use for Recurrence.', draft: true },
    h1: 'Terms of use',
    updated: '[Date]',
    sections: [{ title: '[Recurrence-only terms to be written in phase 2]', body: ['[Placeholder]'] }],
  },

  labels: {
    sampleList: 'Example list',
    whatYouGet: 'Why it works',
    relatedUseCases: 'Related use cases',
    allUseCases: 'All use cases',
    comparedOn: 'Compared on',
    feature: 'Feature',
    whenOtherTitle: 'When the other app may suit you better',
    verdictTitle: 'The short version',
    lastChecked: 'Last checked',
    lastUpdated: 'Last updated',
    faqTitle: 'Questions',
    readMore: 'Learn more',
  },
};

export default en;
