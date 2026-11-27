// Simplified Chinese copy, written from en-US. Uses 你, Apple's zh-CN terms
// (主屏幕, 小组件, 快捷指令, Apple 账户) and spaces between Chinese and Latin
// text or numbers, as Apple does. Task names, schedules, tabs and settings use
// the app's own Simplified Chinese strings.

import type { SiteContent } from './types';
import enUS from './en-US';
import tools from './tools/zh-Hans';

const zhHans: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence：重复任务管理与提醒（iPhone、iPad、Mac）',
      description: '家务、账单、宠物用药、居家维护都能管理。Recurrence 会在重复任务到期时提醒你，并记录你每一次完成的时间。适用于 iPhone、iPad 和 Mac，可免费开始使用。',
    },
    heroAccentBefore: '每一项',
    heroAccent: '重复任务',
    heroAccentAfter: '，都尽在掌握',
    intro: '家务、账单、宠物用药和居家维护。Recurrence 会在事情到期时提醒你，并记住你每一次完成的时间。',
    useCasesTitle: '所有重复的事，一个 App 就够了',
    useCasesIntro: '从倒垃圾的日子到每年一次的宠物体检，每项任务都有自己的日程和历史记录。',
    historyKicker: '历史记录',
    historyTitle: '清楚知道上次是什么时候做的',
    historyBody: '每次完成都会记录日期，还可以添加备注。你可以随时查看滤网是什么时候换的、兽医开了什么药，或者上次维修花了多少钱。跳过了一周？这也会被记录下来。',
    bullets: [
      '按日历日程重复，或在上次完成后的固定时间重复',
      '到期前、当天和逾期时都会提醒',
      '主屏幕和锁定屏幕小组件',
      '通过 iCloud 与家人共享任务，看看谁做了什么',
      '在 iPhone、iPad 和 Mac 之间同步',
    ],
    reviewsTitle: '深受喜爱，让生活井井有条',
    reviews: [],
    freeTitle: '免费开始使用',
    freeBody: '最多可免费记录 5 项任务。Recurrence Premium 可解锁无限任务和共享任务，提供按月或按年订阅，也可以一次性买断。',
    faqTitle: '常见问题',
    faq: [
      { q: 'Recurrence 和待办清单有什么不同？', a: '待办清单在你勾选任务后就会把它忘掉。Recurrence 会安排下一次，并记录每一次完成和备注，让你随时知道上次是什么时候做的。' },
      { q: '可以和家人共享任务吗？', a: '可以。任何任务都能通过 iCloud 共享，你邀请的人也可以将它标为完成。每项任务的历史记录会显示是谁、在什么时候完成的。' },
      { q: '错过了任务会怎样？', a: '它会移到“已逾期”，并继续提醒你。对于做完后重新计时就好的任务，选择“从上次完成算起”的日程，错过的那几周就不会越积越多。' },
    ],
  },

  features: {
    meta: {
      title: '功能：重复日程、提醒和历史记录 | Recurrence',
      description: '灵活的重复日程、到期前后的提醒、带备注的完整完成记录、小组件、iCloud 共享，以及 iPhone、iPad 和 Mac 之间的同步。一起来了解 Recurrence 的全部功能。',
    },
    h1: '跟上所有重复的事，需要的功能都在这里',
    intro: 'Recurrence 围绕一个想法打造：重复任务永远不会真正结束。它总会再来，而知道上次是什么时候做的，会很有帮助。',
    sections: [
      {
        title: '按任何日程重复',
        body: '任务可以按日历日期重复，比如每周四或每月 1 日；也可以在上次完成后的固定时间重复，比如上次理发后 6 周。',
        points: ['每天、每周、每月和每年的日历日程', '在上次完成后的固定时间重复', '锁定任务，到期前无法勾选完成'],
        screen: 'add',
      },
      {
        title: '每个习惯都有完整的历史记录',
        body: '每次完成都会保存日期，还可以添加备注。跳过的也会被记录，让记录真实可靠。',
        points: ['每次完成都可以添加备注', '完成还是跳过，都有记录', '看看一项任务实际多久做一次'],
        screen: 'history',
      },
      {
        title: '贴合任务的提醒',
        body: '在到期前几天、当天或逾期后收到通知。可以一次设好默认设置，也可以为每项任务单独调整。',
        points: ['到期前、当天和逾期后提醒', '为每项任务单独设置通知', '通过 Siri 快捷指令完成任务'],
        screen: 'home',
      },
      {
        title: '任务清单，一目了然',
        body: '小组件会在主屏幕或锁定屏幕上显示已逾期、今天和即将到来的任务。',
        points: ['主屏幕和锁定屏幕小组件', '小组件可以只显示一个类别', 'App 内的类别、搜索和筛选'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: '管理家务、账单、宠物护理等 | Recurrence',
      description: '看看可以用 Recurrence 记录什么：家务、账单、宠物用药、居家和汽车保养、植物、自我关爱和家庭任务。每个场景都附有现成的入门清单，马上就能开始使用。',
    },
    h1: '你想坚持做好哪些事？',
    intro: 'Recurrence 适用于任何会重复的事。下面是最受欢迎的几种用法，每种都附有现成的清单，可以直接开始。',
  },

  useCases: {
    chores: {
      meta: { title: '家务提醒 App：管理重复的家务 | Recurrence', description: '轻松跟上倒垃圾、洗衣和打扫。Recurrence 会记录重复的家务，在到期时提醒你，并显示每项家务上次是什么时候做的。还能与家人共享，一起分担家务。' },
      name: '家务',
      blurb: '倒垃圾、洗衣、打扫',
      h1: '能记住上次完成时间的家务清单',
      intro: '有些家务固定在某一天做，比如倒垃圾；有些只需要隔一段时间做一次，比如洗床单。Recurrence 两种都能处理，还会保留历史记录，谁都不用再靠猜。',
      sampleTitle: '家务入门清单',
      sample: [
        { name: '倒垃圾', schedule: '每周四' },
        { name: '洗床单', schedule: '完成后1周' },
        { name: '给植物浇水', schedule: '完成后1周' },
        { name: '更换空气滤网', schedule: '完成后3个月' },
      ],
      points: [
        { title: '固定日期或灵活间隔', body: '倒垃圾在每周四。洗床单则在上次之后一周，不管上次是哪天。' },
        { title: '一起分担', body: '与家人共享家务，看看每一项都是谁做的。' },
        { title: '忙完一周也不堆积', body: '从上次完成算起的任务，会在你完成时重新开始计时。' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: '账单提醒 App：账单和订阅不再错过 | Recurrence', description: '不再错过房租、信用卡还款或续订。Recurrence 会在账单到期前提醒你，并记录每一次付款。还可以把金额或确认号写进备注，方便以后随时查询。' },
      name: '账单和订阅',
      blurb: '房租、信用卡、续订',
      h1: '账单到期前提醒，付款后留有记录',
      intro: '为每笔账单设置到期日，提前几天就会收到提醒。付款后标为完成并添加备注，比如金额或确认号，方便以后查询。',
      sampleTitle: '账单入门清单',
      sample: [
        { name: '交房租', schedule: '每月1日' },
        { name: '还信用卡', schedule: '每月20日' },
        { name: '检查订阅', schedule: '完成后3个月' },
      ],
      points: [
        { title: '提前几天提醒', body: '为每笔账单选择提前多久提醒。' },
        { title: '每次付款都有备注', body: '每次完成都可以记下金额或确认号。' },
        { title: '容易忘记的续订', body: '每年的续订和每季度的检查，与每月的账单放在一起。' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: '宠物用药提醒与宠物护理记录 | Recurrence', description: '记得心丝虫药、驱跳蚤和蜱虫药、美容和看兽医。Recurrence 会按时提醒你，并为每次用药和体检做好记录，还能添加备注，方便看病时告诉兽医。' },
      name: '宠物护理',
      blurb: '用药、美容、看兽医',
      h1: '宠物护理提醒，每次用药都有记录',
      intro: '每月的药、每隔几周的美容和每年的体检，很容易记不清。Recurrence 会提醒你并逐一记录，让你能准确告诉兽医上次用药是哪天。',
      sampleTitle: '宠物护理入门清单',
      sample: [
        { name: '心丝虫药', schedule: '每月1日' },
        { name: '驱跳蚤和蜱虫药', schedule: '每月15日' },
        { name: '给狗狗美容', schedule: '完成后6周' },
        { name: '宠物体检', schedule: '完成后1年' },
      ],
      points: [
        { title: '知道上次是哪天用药', body: '历史记录会显示每次完成，不会重复喂药，也不会漏掉。' },
        { title: '兽医的叮嘱', body: '每次体检都可以记下体重或开了什么药。' },
        { title: '全家共享', body: '谁喂了药就勾选一下，大家都能看到。' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: '居家维护提醒 App | Recurrence', description: '记录空气滤网、净水滤芯、烟雾报警器测试和季节性工作。Recurrence 会在居家维护到期时提醒你，并保留完整记录，再也不用回想上次是什么时候做的。' },
      name: '居家维护',
      blurb: '滤网、烟雾报警器、季节性工作',
      h1: '一年只做几次的居家维护，也能按时提醒',
      intro: '滤网、烟雾报警器和季节性工作隔很久才来一次，很容易忘记。Recurrence 会从你上次做的时间开始计算，到时候再提醒你。',
      sampleTitle: '居家维护入门清单',
      sample: [
        { name: '更换空气滤网', schedule: '完成后3个月' },
        { name: '更换净水滤芯', schedule: '完成后6个月' },
        { name: '测试烟雾报警器', schedule: '完成后6个月' },
      ],
      points: [
        { title: '从上次开始算', body: '滤网换晚了？下次提醒也会跟着顺延。' },
        { title: '房子的维护日志', body: '每次都可以记下滤网尺寸或师傅的名字。' },
        { title: '日历保持清爽', body: '不常做的工作，到期前不用占用你的日历。' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: '汽车保养提醒 App | Recurrence', description: '记得更换机油、检查胎压和更换雨刷。Recurrence 会在汽车保养到期时提醒你，并记录里程和备注。洗车之类的日常事项，也能和保养放在一起管理。' },
      name: '汽车保养',
      blurb: '换机油、轮胎、雨刷',
      h1: '汽车保养提醒，里程写在备注里',
      intro: '换机油、检查轮胎和更换雨刷，各有各的周期。Recurrence 把它们放在一起，还记得你上次做了什么。',
      sampleTitle: '汽车保养入门清单',
      sample: [
        { name: '更换机油', schedule: '完成后6个月' },
        { name: '检查胎压', schedule: '完成后1个月' },
        { name: '更换雨刷', schedule: '完成后1年' },
        { name: '洗车', schedule: '完成后2周' },
      ],
      points: [
        { title: '每次保养都记下里程', body: '完成任务时，把里程表读数添加为备注。' },
        { title: '所有车辆一个清单', body: '每辆车用一个类别，互不混淆。' },
        { title: '提前提醒', body: '在保养到期前就提醒你，而不是过期之后。' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: '植物浇水提醒 App | Recurrence', description: '按每株植物自己的节奏浇水。Recurrence 会在植物需要浇水时提醒你，从上次浇水开始计算，并显示是谁浇的水。无论是室内绿植还是花园，都同样适用。' },
      name: '植物和花园',
      blurb: '浇水、施肥、换盆',
      h1: '从上次浇水开始计算的浇水提醒',
      intro: '植物不会按日历生长。Recurrence 会在上次浇水后的固定时间提醒你，所以浇晚了，下一次也会跟着往后推。',
      sampleTitle: '植物入门清单',
      sample: [
        { name: '给植物浇水', schedule: '完成后1周' },
      ],
      points: [
        { title: '从上次浇水开始计时', body: '每株植物的下次提醒，都从你实际浇水的那天算起。' },
        { title: '看看谁浇了水', body: '共享植物任务后，历史记录会显示是谁、在什么时候浇的水。' },
        { title: '每株植物的备注', body: '施肥或换盆也可以和浇水记录放在一起。' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: '自我关爱提醒：理发、牙科检查等 | Recurrence', description: '记得理发、牙科检查、更换牙刷和每天吃维生素。Recurrence 会按时提醒你，并记录你上次是什么时候去的。那些容易拖延的预约，也能按时完成。' },
      name: '自我关爱',
      blurb: '理发、看牙、维生素',
      h1: '容易拖延的预约，也能按时提醒',
      intro: '每 6 周理一次发，每年看两次牙，每 3 个月换一次牙刷。Recurrence 帮你记住这些日期，你不用自己记。',
      sampleTitle: '自我关爱入门清单',
      sample: [
        { name: '理发', schedule: '完成后6周' },
        { name: '更换牙刷', schedule: '完成后3个月' },
        { name: '牙科检查', schedule: '完成后6个月' },
        { name: '吃维生素', schedule: '每天' },
      ],
      points: [
        { title: '知道上次是什么时候去的', body: '“我上次检查是什么时候？”历史记录一秒就能告诉你。' },
        { title: '每天或一年两次', body: '每天的习惯和不常有的预约，都放在一个清单里。' },
        { title: '默认保护隐私', body: '除非你选择共享，否则任务只保存在你的 iCloud 账户中。' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: '家庭共享任务与家务 App | Recurrence', description: '通过 iCloud 与家人共享重复任务。每个人都可以勾选完成，每项任务的历史记录会显示是谁、在什么时候做的。无论是分担家务还是照顾宠物，都很方便。' },
      name: '家庭共享任务',
      blurb: '看看谁做了，什么时候做的',
      h1: '全家人一起共享的重复任务',
      intro: '通过 iCloud 共享任务，你邀请的每个人都能将它标为完成。历史记录会显示每项任务是谁做的，再也不用问“你喂狗了吗？”',
      sampleTitle: '家庭共享清单',
      sample: [
        { name: '倒垃圾', schedule: '每周四' },
        { name: '给植物浇水', schedule: '完成后1周' },
        { name: '心丝虫药', schedule: '每月1日' },
      ],
      points: [
        { title: '通过 iCloud 共享', body: '使用 iCloud 共享，把家人邀请到任何任务中。他们只需要 Recurrence 和 iCloud 账户。' },
        { title: '看看是谁做的', body: '共享任务中的每次完成，都会显示是谁勾选的。' },
        { title: '每个人都会收到提醒', body: '每个人都可以设置适合自己的提醒。' },
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
      title: '支持与帮助 | Recurrence',
      description: 'Recurrence 帮助中心：关于同步、共享、提醒、小组件和 Premium 的常见问题解答，以及联系我们的方式。遇到问题时，可以先在这里找找答案。',
    },
    h1: '需要什么帮助？',
    intro: '关于 Recurrence 最常见问题的解答。',
    contact: { q: '还有其他问题？', a: '请发送电子邮件至 support@shayesapps.com。' },
    faqTitle: '常见问题',
    faq: [
      { q: '我的任务没有在设备之间同步。', a: 'Recurrence 通过 iCloud 同步。请在每台设备上确认：已使用同一个 Apple 账户登录 iCloud、已连接网络，并且 iCloud 储存空间未满。另外，请在“设置”App 中轻点你的姓名 > iCloud，确认已允许 Recurrence 使用 iCloud。在 Recurrence 的“设置”中，iCloud 页面会显示同步状态。如果仍然无法同步，请在该页面轻点“Share Sync Report”，并将报告发送给我们。' },
      { q: '如何与他人共享任务？', a: '在清单中长按任务并选择“共享”，或轻点任务顶部的共享按钮。选择要邀请的人，以及对方可以修改还是只能查看。受邀的人需要安装 Recurrence 并拥有 iCloud 账户。要停止共享，请打开同一个菜单。删除共享任务会为所有人删除该任务。' },
      { q: '我收不到提醒。', a: '首先，请在“设置”App 的“通知”中确认已允许 Recurrence 发送通知，并且没有被专注模式静音。在 Recurrence 中，“设置” > “通知”会显示是否已开启权限。编辑任务时，“通知”部分有这项任务自己的提醒：到期前、当天或逾期后。“设置” > “默认设置” > “通知”可以设置新任务默认使用的提醒。iOS 会限制 App 能提前安排的提醒数量，所以请不时打开 Recurrence，让提醒持续送达。' },
      { q: '如何恢复购买的 Premium？', a: '在 Recurrence 中前往“设置”，在 Recurrence Premium 横幅上轻点“了解更多”，然后轻点屏幕底部的“恢复购买”。请确保登录的是购买 Premium 时使用的 Apple 账户。' },
      { q: '可以先试用 Premium 吗？', a: '可以。Recurrence Premium 提供免费试用，订阅前会在 App Store 中显示。' },
      { q: 'Premium 可以在我所有的设备上使用吗？', a: '可以。一次购买即可在 iPhone、iPad 和 Mac 上解锁 Premium，还可以通过家人共享与家人一起使用。' },
      { q: '如何取消订阅？', a: '订阅在你的 Apple 账户设置中管理，可以随时取消，但需要在下次续订前至少 24 小时取消。' },
    ],
  },

  press: {
    meta: {
      title: '媒体资料 | Recurrence',
      description: 'Recurrence 媒体资料包：App 简介、基本信息、截图、App 图标和横幅，以及供记者和评测者使用的联系方式。欢迎报道和评测 Recurrence。',
    },
    h1: '媒体资料',
    intro: 'Recurrence 是独立开发者 Shayes Apps 为 iPhone、iPad 和 Mac 打造的重复任务管理 App。它会在重复任务到期时提醒用户，并记录每一次完成。',
    facts: [
      { label: '开发者', value: 'Shayes Apps' },
      { label: '平台', value: 'iPhone、iPad、Mac' },
      { label: '价格', value: '免费，提供可选订阅' },
      { label: '语言', value: '16 种' },
      { label: 'App Store 评分', value: '4.7+ 星' },
    ],
    kitTitle: '下载资料包',
    kitBody: '截图、带边框的截图、App 图标和横幅（英文版）。',
    kitLink: '下载媒体资料包（ZIP，12 MB）',
    contactTitle: '媒体联系',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: '隐私政策与使用条款 | Recurrence', description: 'Recurrence 不会追踪你，也不会收集任何可识别个人身份的信息。你的任务通过 iCloud 同步，数据保存在 Apple 的基础设施上。本页还包括 Premium 订阅的使用条款。' },
    h1: '隐私政策与使用条款',
    docs: [
      {
        id: 'privacy',
        title: '隐私政策',
        updated: '2026年11月26日',
        sections: [
          { title: '简短明了', body: ['我们重视你的信息和隐私，所以我们的政策简短明了。Recurrence 不会追踪你，也不会收集任何可识别个人身份的信息。我们也会尽量减少所依赖的第三方。'] },
          { title: '付款', body: ['App 内购买和订阅的付款均通过 App Store 进行，因此我们永远无法获取你的信用卡信息。Recurrence 包含 RevenueCat SDK，请参阅其相关政策。'] },
          { title: '同步与共享', body: ['数据同步通过 iCloud（Apple 的 CloudKit）完成。CloudKit 经过完全加密，所有数据都保存在 Apple 的基础设施上。除了你选择与之共享任务的人，没有任何人可以访问你的数据。'] },
          { title: '退款申请', body: ['使用 Recurrence 并进行 App 内购买，即表示你同意我们在处理退款申请时，与 Apple 共享有关你对所购内容的使用和消费情况的数据。这些信息可能包括你如何访问和使用所购内容的详细信息。共享这些数据的目的，是帮助 Apple 就退款申请做出合理的决定。我们确保此类数据共享符合 Apple 的政策，并且仅在处理你的申请所必需的范围内进行。'] },
          { title: '问题', body: ['如果你对我们的隐私政策有任何疑问或顾虑，请通过 support@shayesapps.com 联系我们。'] },
        ],
      },
      {
        id: 'terms',
        title: '使用条款',
        updated: '2026年11月26日',
        sections: [
          { title: 'Premium 订阅条款', body: ['除非在当前订阅期结束前至少 24 小时取消，否则订阅将自动续订。你可以随时在 Apple 账户设置中取消。如果你在免费试用期间购买订阅，试用期的剩余部分将作废。'] },
          { title: '问题', body: ['如果你对我们的使用条款有任何疑问或顾虑，请通过 support@shayesapps.com 联系我们。'] },
        ],
      },
    ],
  },

  tools,
  screenAlt: {
    home: 'iPhone 上的 Recurrence 任务清单，显示已逾期、今天和即将到来的任务',
    history: '一项任务的完成历史记录，显示日期和备注',
    widgets: 'iPhone 主屏幕上的 Recurrence 小组件',
    add: '编辑一项设置为上次完成 4 周后重复的任务',
  },

  labels: {
    sampleList: '示例清单',
    whatYouGet: '好用在哪里',
    relatedUseCases: '更多灵感',
    allUseCases: '全部灵感',
    comparedOn: '比较项目',
    feature: '功能',
    whenOtherTitle: '其他 App 可能更适合你的情况',
    verdictTitle: '简单来说',
    lastChecked: '最后核对',
    lastUpdated: '最后更新',
    faqTitle: '常见问题',
    readMore: '了解更多',
    fiveStars: '5 星（满分 5 星）',
  },
};

export default zhHans;
