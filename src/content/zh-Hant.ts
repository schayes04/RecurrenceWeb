// Traditional Chinese (Taiwan) copy, written from en-US. Uses 你, Apple's
// zh-TW terms (主畫面, 小工具, 捷徑, Apple 帳號, 點一下), 「」 quotes, and
// spaces between Chinese and Latin text or numbers, as Apple does. Task names,
// schedules, tabs and settings use the app's own Traditional Chinese strings.

import type { SiteContent } from './types';
import enUS from './en-US';
import tools from './tools/zh-Hant';

const zhHant: SiteContent = {
  home: {
    meta: {
      title: '重複待辦：重複任務管理與提醒（iPhone、iPad、Mac）',
      description: '家事、帳單、寵物用藥、居家維護都能管理。「重複待辦」會在重複任務到期時提醒你，並記錄你每一次完成的時間。適用於 iPhone、iPad 和 Mac，可免費開始使用。',
    },
    heroAccentBefore: '每一項',
    heroAccent: '重複任務',
    heroAccentAfter: '，都盡在掌握',
    intro: '家事、帳單、寵物用藥和居家維護。「重複待辦」會在事情到期時提醒你，並記住你每一次完成的時間。',
    useCasesTitle: '所有重複的事，一個 App 就夠了',
    useCasesIntro: '從倒垃圾的日子到每年一次的寵物健康檢查，每項任務都有自己的排程和歷史紀錄。',
    historyKicker: '歷史紀錄',
    historyTitle: '清楚知道上次是什麼時候做的',
    historyBody: '每次完成都會記錄日期，還可以加上備註。你可以隨時查看濾網是什麼時候換的、獸醫開了什麼藥，或是上次維修花了多少錢。跳過了一週？這也會被記錄下來。',
    bullets: [
      '依行事曆排程重複，或在上次完成後的固定時間重複',
      '到期前、當天和逾期時都會提醒',
      '主畫面和鎖定畫面小工具',
      '透過 iCloud 與家人共享任務，看看誰做了什麼',
      '在 iPhone、iPad 和 Mac 之間同步',
    ],
    reviewsTitle: '深受喜愛，讓生活井然有序',
    reviews: [],
    freeTitle: '免費開始使用',
    freeBody: '最多可免費記錄 5 項任務。Recurrence Premium 可解鎖無限任務和共享任務，提供月費或年費訂閱，也可以一次買斷。',
    faqTitle: '常見問題',
    faq: [
      { q: '「重複待辦」和待辦清單有什麼不同？', a: '待辦清單在你勾選任務後就會把它忘掉。「重複待辦」會安排下一次，並記錄每一次完成和備註，讓你隨時知道上次是什麼時候做的。' },
      { q: '可以和家人共享任務嗎？', a: '可以。任何任務都能透過 iCloud 共享，你邀請的人也可以將它標示為完成。每項任務的歷史紀錄會顯示是誰、在什麼時候完成的。' },
      { q: '錯過了任務會怎樣？', a: '它會移到「已逾期」，並持續提醒你。對於做完後重新計時就好的任務，選擇「從上次完成算起」的排程，錯過的那幾週就不會越積越多。' },
    ],
  },

  features: {
    meta: {
      title: '功能：重複排程、提醒和歷史紀錄 | 重複待辦',
      description: '彈性的重複排程、到期前後的提醒、附備註的完整完成紀錄、小工具、iCloud 共享，以及 iPhone、iPad 和 Mac 之間的同步。一起來瞭解「重複待辦」的所有功能。',
    },
    h1: '跟上所有重複的事，需要的功能都在這裡',
    intro: '「重複待辦」圍繞著一個想法打造：重複任務永遠不會真正結束。它總會再來，而知道上次是什麼時候做的，會很有幫助。',
    sections: [
      {
        title: '依任何排程重複',
        body: '任務可以依行事曆日期重複，例如每週四或每月 1 日；也可以在上次完成後的固定時間重複，例如上次剪頭髮後 6 週。',
        points: ['每天、每週、每月和每年的行事曆排程', '在上次完成後的固定時間重複', '鎖定任務，到期前無法勾選完成'],
        screen: 'add',
      },
      {
        title: '每個習慣都有完整的歷史紀錄',
        body: '每次完成都會儲存日期，還可以加上備註。跳過的也會被記錄，讓紀錄真實可靠。',
        points: ['每次完成都可以加上備註', '完成還是跳過，都有紀錄', '看看一項任務實際多久做一次'],
        screen: 'history',
      },
      {
        title: '貼合任務的提醒',
        body: '在到期前幾天、當天或逾期後收到通知。可以一次設好預設設定，也可以為每項任務個別調整。',
        points: ['到期前、當天和逾期後提醒', '為每項任務個別設定通知', '透過 Siri 捷徑完成任務'],
        screen: 'home',
      },
      {
        title: '任務清單，一目了然',
        body: '小工具會在主畫面或鎖定畫面上顯示已逾期、今天和即將到來的任務。',
        points: ['主畫面和鎖定畫面小工具', '小工具可以只顯示一個類別', 'App 內的類別、搜尋和篩選'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: '管理家事、帳單、寵物照顧等 | 重複待辦',
      description: '看看可以用「重複待辦」記錄什麼：家事、帳單、寵物用藥、居家和汽車保養、植物、自我照顧和家庭任務。每個情境都附有現成的入門清單，馬上就能開始使用。',
    },
    h1: '你想持續做好哪些事？',
    intro: '「重複待辦」適用於任何會重複的事。以下是最受歡迎的幾種用法，每種都附有現成的清單，可以直接開始。',
  },

  useCases: {
    chores: {
      meta: { title: '家事提醒 App：管理重複的家事 | 重複待辦', description: '輕鬆跟上倒垃圾、洗衣和打掃。「重複待辦」App 會記錄重複的家事，在到期時提醒你，並顯示每項家事上次是什麼時候做的。還能與家人共享，一起分擔家事。' },
      name: '家事',
      blurb: '倒垃圾、洗衣、打掃',
      h1: '能記住上次完成時間的家事清單',
      intro: '有些家事固定在某一天做，例如倒垃圾；有些只需要隔一段時間做一次，例如洗床單。「重複待辦」兩種都能處理，還會保留歷史紀錄，誰都不用再靠猜。',
      sampleTitle: '家事入門清單',
      sample: [
        { name: '倒垃圾', schedule: '每週四' },
        { name: '洗床單', schedule: '完成後1週' },
        { name: '給植物澆水', schedule: '完成後1週' },
        { name: '更換空氣濾網', schedule: '完成後3個月' },
      ],
      points: [
        { title: '固定日期或彈性間隔', body: '倒垃圾在每週四。洗床單則在上次之後一週，不管上次是哪天。' },
        { title: '一起分擔', body: '與家人共享家事，看看每一項都是誰做的。' },
        { title: '忙完一週也不堆積', body: '從上次完成算起的任務，會在你完成時重新開始計時。' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: '帳單提醒 App：帳單和訂閱不再錯過 | 重複待辦', description: '不再錯過房租、信用卡費或續訂。「重複待辦」App 會在帳單到期前提醒你，並記錄每一次付款。還可以把金額或確認碼寫進備註，方便日後需要時隨時查詢。' },
      name: '帳單和訂閱',
      blurb: '房租、信用卡、續訂',
      h1: '帳單到期前提醒，付款後留下紀錄',
      intro: '為每筆帳單設定到期日，提前幾天就會收到提醒。付款後標示為完成並加上備註，例如金額或確認碼，方便日後查詢。',
      sampleTitle: '帳單入門清單',
      sample: [
        { name: '繳房租', schedule: '每月1日' },
        { name: '繳信用卡費', schedule: '每月20日' },
        { name: '檢查訂閱', schedule: '完成後3個月' },
      ],
      points: [
        { title: '提前幾天提醒', body: '為每筆帳單選擇要提前多久提醒。' },
        { title: '每次付款都有備註', body: '每次完成都可以記下金額或確認碼。' },
        { title: '容易忘記的續訂', body: '每年的續訂和每季的檢查，與每月的帳單放在一起。' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: '寵物用藥提醒與寵物照顧紀錄 | 重複待辦', description: '記得心絲蟲藥、跳蚤與壁蝨藥、美容和看獸醫。「重複待辦」App 會準時提醒你，並為每次用藥和健康檢查做好紀錄，還能加上備註，方便看診時告訴獸醫。' },
      name: '寵物照顧',
      blurb: '用藥、美容、看獸醫',
      h1: '寵物照顧提醒，每次用藥都有紀錄',
      intro: '每月的藥、每隔幾週的美容和每年的健康檢查，很容易記不清楚。「重複待辦」會提醒你並逐一記錄，讓你能準確告訴獸醫上次用藥是哪天。',
      sampleTitle: '寵物照顧入門清單',
      sample: [
        { name: '心絲蟲藥', schedule: '每月1日' },
        { name: '跳蚤與壁蝨藥', schedule: '每月15日' },
        { name: '給狗狗美容', schedule: '完成後6週' },
        { name: '寵物健康檢查', schedule: '完成後1年' },
      ],
      points: [
        { title: '知道上次是哪天用藥', body: '歷史紀錄會顯示每次完成，不會重複餵藥，也不會漏掉。' },
        { title: '獸醫的叮嚀', body: '每次健康檢查都可以記下體重或開了什麼藥。' },
        { title: '全家共享', body: '誰餵了藥就勾選一下，大家都看得到。' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: '居家維護提醒 App | 重複待辦', description: '記錄空氣濾網、淨水濾芯、煙霧偵測器測試和季節性工作。「重複待辦」App 會在居家維護到期時提醒你，並保留完整紀錄，再也不用回想上次是什麼時候做的。' },
      name: '居家維護',
      blurb: '濾網、煙霧偵測器、季節性工作',
      h1: '一年只做幾次的居家維護，也能準時提醒',
      intro: '濾網、煙霧偵測器和季節性工作隔很久才來一次，很容易忘記。「重複待辦」會從你上次做的時間開始計算，時間到了再提醒你。',
      sampleTitle: '居家維護入門清單',
      sample: [
        { name: '更換空氣濾網', schedule: '完成後3個月' },
        { name: '更換淨水濾芯', schedule: '完成後6個月' },
        { name: '測試煙霧偵測器', schedule: '完成後6個月' },
      ],
      points: [
        { title: '從上次開始算', body: '濾網換晚了？下次提醒也會跟著順延。' },
        { title: '房子的維護日誌', body: '每次都可以記下濾網尺寸或師傅的名字。' },
        { title: '行事曆保持清爽', body: '不常做的工作，到期前不用佔用你的行事曆。' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: '汽車保養提醒 App | 重複待辦', description: '記得更換機油、檢查胎壓和更換雨刷。「重複待辦」App 會在汽車保養到期時提醒你，並記錄里程和備註。洗車之類的日常事項，也能和保養放在一起管理。' },
      name: '汽車保養',
      blurb: '換機油、輪胎、雨刷',
      h1: '汽車保養提醒，里程寫在備註裡',
      intro: '換機油、檢查輪胎和更換雨刷，各有各的週期。「重複待辦」把它們放在一起，還記得你上次做了什麼。',
      sampleTitle: '汽車保養入門清單',
      sample: [
        { name: '更換機油', schedule: '完成後6個月' },
        { name: '檢查胎壓', schedule: '完成後1個月' },
        { name: '更換雨刷', schedule: '完成後1年' },
        { name: '洗車', schedule: '完成後2週' },
      ],
      points: [
        { title: '每次保養都記下里程', body: '完成任務時，把里程表讀數加為備註。' },
        { title: '所有車輛一個清單', body: '每輛車用一個類別，不會混在一起。' },
        { title: '提前提醒', body: '在保養到期前就提醒你，而不是過期之後。' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: '植物澆水提醒 App | 重複待辦', description: '依每株植物自己的節奏澆水。「重複待辦」App 會在植物需要澆水時提醒你，從上次澆水開始計算，並顯示是誰澆的水。無論是室內植物還是花園，都同樣適用。' },
      name: '植物與花園',
      blurb: '澆水、施肥、換盆',
      h1: '從上次澆水開始計算的澆水提醒',
      intro: '植物不會照著行事曆生長。「重複待辦」會在上次澆水後的固定時間提醒你，所以澆晚了，下一次也會跟著往後延。',
      sampleTitle: '植物入門清單',
      sample: [
        { name: '給植物澆水', schedule: '完成後1週' },
      ],
      points: [
        { title: '從上次澆水開始計時', body: '每株植物的下次提醒，都從你實際澆水的那天算起。' },
        { title: '看看誰澆了水', body: '共享植物任務後，歷史紀錄會顯示是誰、在什麼時候澆的水。' },
        { title: '每株植物的備註', body: '施肥或換盆也可以和澆水紀錄放在一起。' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: '自我照顧提醒：剪頭髮、牙科檢查等 | 重複待辦', description: '記得剪頭髮、牙科檢查、更換牙刷和每天吃維生素。「重複待辦」App 會準時提醒你，並記錄你上次是什麼時候去的。那些容易拖延的預約，也能準時完成。' },
      name: '自我照顧',
      blurb: '剪頭髮、看牙、維生素',
      h1: '容易拖延的預約，也能準時提醒',
      intro: '每 6 週剪一次頭髮，每年看兩次牙，每 3 個月換一次牙刷。「重複待辦」幫你記住這些日期，你不用自己記。',
      sampleTitle: '自我照顧入門清單',
      sample: [
        { name: '剪頭髮', schedule: '完成後6週' },
        { name: '更換牙刷', schedule: '完成後3個月' },
        { name: '牙科檢查', schedule: '完成後6個月' },
        { name: '吃維生素', schedule: '每天' },
      ],
      points: [
        { title: '知道上次是什麼時候去的', body: '「我上次檢查是什麼時候？」歷史紀錄一秒就能告訴你。' },
        { title: '每天或一年兩次', body: '每天的習慣和不常有的預約，都放在同一個清單裡。' },
        { title: '預設保護隱私', body: '除非你選擇共享，否則任務只會儲存在你的 iCloud 帳號中。' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: '家庭共享任務與家事 App | 重複待辦', description: '透過 iCloud 與家人共享重複任務。每個人都可以勾選完成，每項任務的歷史紀錄會顯示是誰、在什麼時候做的。無論是分擔家事還是照顧寵物，都很方便。' },
      name: '家庭共享任務',
      blurb: '看看誰做了，什麼時候做的',
      h1: '全家人一起共享的重複任務',
      intro: '透過 iCloud 共享任務，你邀請的每個人都能將它標示為完成。歷史紀錄會顯示每項任務是誰做的，再也不用問「你餵狗了嗎？」',
      sampleTitle: '家庭共享清單',
      sample: [
        { name: '倒垃圾', schedule: '每週四' },
        { name: '給植物澆水', schedule: '完成後1週' },
        { name: '心絲蟲藥', schedule: '每月1日' },
      ],
      points: [
        { title: '透過 iCloud 共享', body: '使用 iCloud 共享，把家人邀請到任何任務中。他們只需要「重複待辦」和 iCloud 帳號。' },
        { title: '看看是誰做的', body: '共享任務中的每次完成，都會顯示是誰勾選的。' },
        { title: '每個人都會收到提醒', body: '每個人都可以設定適合自己的提醒。' },
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
      title: '支援與說明 | 重複待辦',
      description: '「重複待辦」說明中心：關於同步、共享、提醒、小工具和 Premium 的常見問題解答，以及聯絡我們的方式。遇到問題時，可以先在這裡找找答案。',
    },
    h1: '需要什麼協助？',
    intro: '關於「重複待辦」最常見問題的解答。',
    contact: { q: '還有其他問題？', a: '請寄電子郵件至 support@shayesapps.com。' },
    faqTitle: '常見問題',
    faq: [
      { q: '我的任務沒有在裝置之間同步。', a: '「重複待辦」透過 iCloud 同步。請在每部裝置上確認：已使用同一個 Apple 帳號登入 iCloud、已連上網路，而且 iCloud 儲存空間未滿。另外，請在「設定」App 中點一下你的名稱 > iCloud，確認已允許「重複待辦」使用 iCloud。在「重複待辦」的「設定」中，iCloud 頁面會顯示同步狀態。如果仍然無法同步，請在該頁面點一下「Share Sync Report」，並將報告傳送給我們。' },
      { q: '如何與他人共享任務？', a: '在清單中長按任務並選擇「共享」，或點一下任務上方的共享按鈕。選擇要邀請的人，以及對方可以修改還是只能檢視。受邀的人需要安裝「重複待辦」並擁有 iCloud 帳號。若要停止共享，請打開同一個選單。刪除共享任務會為所有人刪除該任務。' },
      { q: '我收不到提醒。', a: '首先，請在「設定」App 的「通知」中確認已允許「重複待辦」傳送通知，而且沒有被專注模式靜音。在「重複待辦」中，「設定」>「通知」會顯示是否已開啟權限。編輯任務時，「通知」部分有這項任務自己的提醒：到期前、當天或逾期後。「設定」>「預設設定」>「通知」可以設定新任務預設使用的提醒。iOS 會限制 App 能預先排定的提醒數量，所以請不時打開「重複待辦」，讓提醒持續送達。' },
      { q: '如何回復購買的 Premium？', a: '在「重複待辦」中前往「設定」，在 Recurrence Premium 橫幅上點一下「瞭解更多」，然後點一下畫面底部的「回復購買」。請確認登入的是購買 Premium 時使用的 Apple 帳號。' },
      { q: '可以先試用 Premium 嗎？', a: '可以。Recurrence Premium 提供免費試用，訂閱前會在 App Store 中顯示。' },
      { q: 'Premium 可以在我所有的裝置上使用嗎？', a: '可以。一次購買即可在 iPhone、iPad 和 Mac 上解鎖 Premium，還可以透過家人共享與家人一起使用。' },
      { q: '如何取消訂閱？', a: '訂閱在你的 Apple 帳號設定中管理，可以隨時取消，但需要在下次續訂前至少 24 小時取消。' },
    ],
  },

  press: {
    meta: {
      title: '媒體資料 | 重複待辦',
      description: '「重複待辦」媒體資料包：App 簡介、基本資訊、螢幕截圖、App 圖像和橫幅，以及供記者和評測者使用的聯絡方式。歡迎報導和評測「重複待辦」。',
    },
    h1: '媒體資料',
    intro: '「重複待辦」是獨立開發者 Shayes Apps 為 iPhone、iPad 和 Mac 打造的重複任務管理 App。它會在重複任務到期時提醒使用者，並記錄每一次完成。',
    facts: [
      { label: '開發者', value: 'Shayes Apps' },
      { label: '平台', value: 'iPhone、iPad、Mac' },
      { label: '價格', value: '免費，提供選購訂閱' },
      { label: '語言', value: '16 種' },
      { label: 'App Store 評分', value: '4.7+ 星' },
    ],
    kitTitle: '下載資料包',
    kitBody: '螢幕截圖、加框的螢幕截圖、App 圖像和橫幅（英文版）。',
    kitLink: '下載媒體資料包（ZIP，12 MB）',
    contactTitle: '媒體聯絡',
    contactBody: 'support@shayesapps.com',
  },

  tools,
  screenAlt: {
    home: 'iPhone 上的「重複待辦」任務清單，顯示已逾期、今天和即將到來的任務',
    history: '一項任務的完成歷史紀錄，顯示日期和備註',
    widgets: 'iPhone 主畫面上的「重複待辦」小工具',
    add: '編輯一項設定為上次完成 4 週後重複的任務',
  },

  labels: {
    sampleList: '範例清單',
    whatYouGet: '好用在哪裡',
    relatedUseCases: '更多靈感',
    allUseCases: '所有靈感',
    comparedOn: '比較項目',
    feature: '功能',
    whenOtherTitle: '其他 App 可能更適合你的情況',
    verdictTitle: '簡單來說',
    lastChecked: '最後核對',
    lastUpdated: '最後更新',
    faqTitle: '常見問題',
    readMore: '瞭解更多',
    fiveStars: '5 顆星（滿分 5 顆星）',
  },
};

export default zhHant;
