// Korean copy, written from en-US. Friendly 해요체 like the app; the policies use
// formal 합니다체, as Korean legal text does. Task names, tabs and settings use
// the app's own Korean strings.

import type { SiteContent } from './types';
import enUS from './en-US';

const ko: SiteContent = {
  home: {
    meta: {
      title: 'Recurrence: 반복 작업 관리와 리마인더 (iPhone, iPad, Mac)',
      description: '집안일, 공과금, 반려동물 약, 집 관리까지. Recurrence는 반복 작업의 기한을 알려 주고, 할 때마다 기록을 남겨요. 무료로 시작할 수 있어요.',
    },
    heroAccentBefore: '',
    heroAccent: '반복되는 할 일',
    heroAccentAfter: '을 놓치지 마세요',
    intro: '집안일, 공과금, 반려동물 약, 집 관리. Recurrence는 할 때가 되면 알려 주고, 언제 했는지 모두 기억해요.',
    useCasesTitle: '반복되는 모든 일을 하나의 앱에서',
    useCasesIntro: '쓰레기 버리는 날부터 1년에 한 번 동물병원 검진까지, 작업마다 자체 일정과 기록이 있어요.',
    historyKicker: '기록',
    historyTitle: '마지막으로 언제 했는지 정확히 알 수 있어요',
    historyBody: '완료할 때마다 날짜와 선택 메모가 기록되므로, 필터를 언제 바꿨는지, 수의사가 무엇을 처방했는지, 지난 수리에 얼마가 들었는지 확인할 수 있어요. 한 주를 건너뛰었나요? 그것도 기록돼요.',
    bullets: [
      '달력 일정에 따라, 또는 마지막 완료 후 정해진 기간마다 반복',
      '마감 전, 당일, 기한이 지났을 때 알림',
      '홈 화면 및 잠금 화면 위젯',
      'iCloud로 가족과 작업을 공유하고 누가 무엇을 했는지 확인',
      'iPhone, iPad, Mac 간 동기화',
    ],
    reviewsTitle: '일상을 정돈해 주는 앱으로 사랑받고 있어요',
    reviews: [],
    freeTitle: '무료로 시작하세요',
    freeBody: '작업 5개까지는 무료예요. Recurrence Premium을 이용하면 작업을 무제한으로 만들고 공유할 수 있어요. 월간 또는 연간 구독, 또는 한 번 구입으로 평생 이용하는 방식 중에서 고를 수 있어요.',
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: 'Recurrence는 할 일 목록과 무엇이 다른가요?', a: '할 일 목록은 체크하는 순간 그 일을 잊어버려요. Recurrence는 다음 일정을 잡고 완료할 때마다 메모와 함께 기록을 남기므로, 마지막으로 언제 했는지 항상 알 수 있어요.' },
      { q: '가족과 작업을 공유할 수 있나요?', a: '네. 어떤 작업이든 iCloud로 공유할 수 있고, 초대받은 사람도 완료 표시를 할 수 있어요. 각 작업의 기록에서 누가 언제 완료했는지 볼 수 있어요.' },
      { q: '작업을 놓치면 어떻게 되나요?', a: '‘기한 지남’으로 옮겨지고 계속 알려 드려요. 할 때 다시 시작하면 되는 작업은 ‘마지막 완료부터’를 선택하면 놓친 주가 쌓이지 않아요.' },
    ],
  },

  features: {
    meta: {
      title: '기능: 반복 일정, 알림, 기록 | Recurrence',
      description: '유연한 반복 일정, 마감 전후 알림, 메모가 포함된 완료 기록, 위젯, iCloud 공유, iPhone·iPad·Mac 동기화까지. Recurrence의 기능을 소개해요.',
    },
    h1: '반복되는 일을 챙기는 데 필요한 모든 것',
    intro: 'Recurrence는 한 가지 생각에서 시작했어요. 반복 작업은 결코 완전히 끝나지 않아요. 다시 돌아오기 때문에, 마지막으로 언제 했는지 아는 것이 도움이 돼요.',
    sections: [
      {
        title: '원하는 일정으로 반복',
        body: '매주 목요일이나 매월 1일처럼 달력 날짜에 맞춰 반복하거나, 지난번 머리를 자른 지 6주 후처럼 마지막으로 한 날로부터 정해진 기간 후에 반복할 수 있어요.',
        points: ['매일, 매주, 매월, 매년 달력 일정', '마지막 완료 후 정해진 기간마다 반복', '마감 전에 완료 표시를 못 하도록 작업 잠금'],
        screen: 'add',
      },
      {
        title: '모든 루틴의 완전한 기록',
        body: '완료할 때마다 날짜와 선택 메모가 저장돼요. 건너뛴 것도 기록되어 기록이 정확하게 유지돼요.',
        points: ['완료할 때마다 메모', '완료해도, 건너뛰어도 기록', '실제로 얼마나 자주 하는지 확인'],
        screen: 'history',
      },
      {
        title: '작업에 맞는 알림',
        body: '마감 며칠 전, 당일, 또는 기한이 지났을 때 알림을 받아요. 기본값을 한 번 설정하거나 작업마다 조정하세요.',
        points: ['마감 전, 당일, 기한 지난 후', '작업별 알림 설정', 'Siri 단축어로 작업 완료'],
        screen: 'home',
      },
      {
        title: '목록을 한눈에',
        body: '위젯이 기한이 지난 일, 오늘 할 일, 다가오는 일을 홈 화면이나 잠금 화면에 바로 보여 줘요.',
        points: ['홈 화면 및 잠금 화면 위젯', '위젯을 한 카테고리로 필터링', '앱 안에서 카테고리, 검색, 필터'],
        screen: 'widgets',
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: '집안일, 공과금, 반려동물 관리까지 | Recurrence',
      description: 'Recurrence로 관리할 수 있는 것들: 집안일, 공과금, 반려동물 약, 집과 자동차 관리, 식물, 셀프 케어, 가족 작업을 바로 쓸 수 있는 목록과 함께 소개해요.',
    },
    h1: '무엇을 챙기고 싶으세요?',
    intro: 'Recurrence는 반복되는 일이라면 무엇이든 관리할 수 있어요. 가장 많이 쓰는 방법을 바로 시작할 수 있는 목록과 함께 소개해요.',
  },

  useCases: {
    chores: {
      meta: { title: '집안일 관리 앱과 청소 루틴 리마인더 | Recurrence', description: '쓰레기 버리기, 빨래, 청소를 챙기세요. Recurrence는 반복되는 집안일을 관리하고, 할 때가 되면 알려 주며, 각각 마지막으로 언제 했는지 보여 줘요.' },
      name: '집안일',
      blurb: '쓰레기, 빨래, 청소',
      h1: '마지막으로 언제 했는지 기억하는 집안일 관리',
      intro: '쓰레기 버리는 날처럼 정해진 요일에 하는 집안일도 있고, 침구 세탁처럼 가끔씩 하면 되는 일도 있어요. Recurrence는 둘 다 관리하고 기록을 남기므로 아무도 추측할 필요가 없어요.',
      sampleTitle: '집안일 시작 목록',
      sample: [
        { name: '쓰레기 버리기', schedule: '매주 목요일' },
        { name: '침구 세탁', schedule: '할 때마다 1주 후' },
        { name: '화분에 물 주기', schedule: '할 때마다 1주 후' },
        { name: '에어 필터 교체', schedule: '할 때마다 3개월 후' },
      ],
      points: [
        { title: '정해진 요일 또는 유연한 간격', body: '쓰레기는 매주 목요일에 버려요. 침구는 지난번이 언제였든 그로부터 일주일 후에 빨아요.' },
        { title: '집안일 나누기', body: '가족과 집안일을 공유하고 누가 무엇을 했는지 확인하세요.' },
        { title: '바쁜 한 주가 지나도 쌓이지 않아요', body: '마지막 완료부터 반복하는 작업은 할 때 그냥 다시 시작돼요.' },
      ],
      screen: 'home',
      related: ['family', 'home-maintenance', 'plants'],
    },
    bills: {
      meta: { title: '공과금·구독 결제일 알림 앱 | Recurrence', description: '월세, 카드 대금, 갱신일을 놓치지 마세요. Recurrence는 납부일 전에 알려 주고, 결제할 때마다 기록을 남겨요. 금액이나 승인 번호도 메모할 수 있어요.' },
      name: '공과금과 구독',
      blurb: '월세, 카드 대금, 갱신',
      h1: '납부일 전에 알림, 낸 후에는 기록',
      intro: '청구서마다 납부일을 정하고 며칠 전에 알림을 받으세요. 납부하면 완료로 표시하고 금액이나 승인 번호 같은 메모를 남겨 두면 나중에 찾아볼 수 있어요.',
      sampleTitle: '공과금 시작 목록',
      sample: [
        { name: '월세 내기', schedule: '매월 1일' },
        { name: '카드 대금 납부', schedule: '매월 20일' },
        { name: '구독 점검', schedule: '할 때마다 3개월 후' },
      ],
      points: [
        { title: '며칠 전에 알림', body: '청구서마다 얼마나 일찍 알림을 받을지 정하세요.' },
        { title: '납부할 때마다 메모', body: '완료할 때마다 금액이나 승인 번호를 함께 남겨요.' },
        { title: '잊기 쉬운 갱신까지', body: '연간 갱신과 분기별 점검도 월별 청구서와 함께 관리해요.' },
      ],
      screen: 'history',
      related: ['family', 'home-maintenance', 'car-maintenance'],
    },
    pets: {
      meta: { title: '반려동물 약 알림과 케어 관리 | Recurrence', description: '심장사상충 약, 벼룩·진드기 약, 미용, 동물병원 검진을 잊지 마세요. Recurrence는 일정에 맞춰 알려 주고, 투약과 검진을 메모와 함께 기록해요.' },
      name: '반려동물 케어',
      blurb: '약, 미용, 동물병원',
      h1: '반려동물 케어 알림, 투약 기록까지',
      intro: '매달 먹이는 약, 몇 주마다 하는 미용, 1년에 한 번 하는 검진은 놓치기 쉬워요. Recurrence가 알려 주고 하나하나 기록하므로, 마지막 투약일을 수의사에게 정확히 말할 수 있어요.',
      sampleTitle: '반려동물 케어 시작 목록',
      sample: [
        { name: '심장사상충 약', schedule: '매월 1일' },
        { name: '벼룩·진드기 약', schedule: '매월 15일' },
        { name: '강아지 미용', schedule: '할 때마다 6주 후' },
        { name: '동물병원 검진', schedule: '할 때마다 1년 후' },
      ],
      points: [
        { title: '마지막 투약일 확인', body: '기록에 모든 완료가 남아서 중복으로 먹이거나 빠뜨리지 않아요.' },
        { title: '수의사 메모', body: '검진할 때마다 체중이나 처방받은 약을 기록하세요.' },
        { title: '가족과 함께', body: '약을 먹인 사람이 완료 표시를 하면 모두가 볼 수 있어요.' },
      ],
      screen: 'history',
      related: ['family', 'chores', 'self-care'],
    },
    'home-maintenance': {
      meta: { title: '집 관리 앱과 유지보수 알림 | Recurrence', description: '에어 필터, 정수기 필터, 화재경보기 점검, 계절별 작업을 관리하세요. Recurrence는 집 관리할 때가 되면 알려 주고, 모든 작업을 기록해 둬요.' },
      name: '집 관리',
      blurb: '필터, 화재경보기, 계절 작업',
      h1: '1년에 몇 번만 하는 집 관리 작업을 위한 알림',
      intro: '필터, 화재경보기, 계절별 작업은 잊어버릴 만큼 가끔 돌아와요. Recurrence는 마지막으로 한 날부터 세어서 다시 할 때가 되면 알려 줘요.',
      sampleTitle: '집 관리 시작 목록',
      sample: [
        { name: '에어 필터 교체', schedule: '할 때마다 3개월 후' },
        { name: '정수기 필터 교체', schedule: '할 때마다 6개월 후' },
        { name: '화재경보기 점검', schedule: '할 때마다 6개월 후' },
      ],
      points: [
        { title: '마지막으로 한 날부터', body: '필터를 늦게 바꿨나요? 다음 알림도 그만큼 미뤄져요.' },
        { title: '집 관리 일지', body: '작업할 때마다 필터 크기나 기사님 이름을 메모하세요.' },
        { title: '캘린더는 깔끔하게', body: '가끔 하는 작업은 때가 될 때까지 캘린더에 넣지 않아도 돼요.' },
      ],
      screen: 'history',
      related: ['chores', 'car-maintenance', 'bills'],
    },
    'car-maintenance': {
      meta: { title: '자동차 정비 알림 앱 | Recurrence', description: '엔진 오일 교체, 타이어 공기압 점검, 와이퍼 교체를 잊지 마세요. Recurrence는 정비할 때가 되면 알려 주고, 주행 거리와 메모를 기록해요. 세차 일정도 함께요.' },
      name: '자동차 정비',
      blurb: '엔진 오일, 타이어, 와이퍼',
      h1: '자동차 정비 알림, 주행 거리는 메모로',
      intro: '엔진 오일 교체, 타이어 점검, 와이퍼 교체는 주기가 제각각이에요. Recurrence는 한곳에서 관리하고 지난번에 무엇을 했는지 기억해요.',
      sampleTitle: '자동차 정비 시작 목록',
      sample: [
        { name: '엔진 오일 교체', schedule: '할 때마다 6개월 후' },
        { name: '타이어 공기압 점검', schedule: '할 때마다 1개월 후' },
        { name: '와이퍼 교체', schedule: '할 때마다 1년 후' },
        { name: '세차', schedule: '할 때마다 2주 후' },
      ],
      points: [
        { title: '정비할 때마다 주행 거리', body: '작업을 완료할 때 주행 거리를 메모로 남기세요.' },
        { title: '모든 차를 한 목록에', body: '차마다 카테고리를 나누면 헷갈리지 않아요.' },
        { title: '미리 알림', body: '정비 시기가 지나기 전에 미리 알려 드려요.' },
      ],
      screen: 'home',
      related: ['home-maintenance', 'bills', 'family'],
    },
    plants: {
      meta: { title: '식물 물 주기 알림 앱 | Recurrence', description: '식물마다 각자의 일정으로 물을 주세요. Recurrence는 물 줄 때가 되면 알려 주고, 마지막으로 물 준 날부터 세며, 누가 물을 줬는지도 보여 줘요.' },
      name: '식물과 정원',
      blurb: '물 주기, 비료, 분갈이',
      h1: '마지막으로 물 준 날부터 세는 물 주기 알림',
      intro: '식물은 달력대로 자라지 않아요. Recurrence는 마지막으로 물을 준 날로부터 정해진 기간 후에 알려 주므로, 물을 늦게 주면 다음 일정도 그만큼 미뤄져요.',
      sampleTitle: '식물 시작 목록',
      sample: [
        { name: '화분에 물 주기', schedule: '할 때마다 1주 후' },
      ],
      points: [
        { title: '마지막 물 주기부터', body: '다음 알림은 실제로 물을 준 날부터 시작돼요.' },
        { title: '누가 물을 줬는지 확인', body: '식물 작업을 공유하면 누가 언제 물을 줬는지 기록에 표시돼요.' },
        { title: '식물마다 메모', body: '비료나 분갈이도 물 주기 기록과 함께 남겨요.' },
      ],
      screen: 'history',
      related: ['chores', 'family', 'home-maintenance'],
    },
    'self-care': {
      meta: { title: '셀프 케어 알림: 머리 자르기, 치과 검진 등 | Recurrence', description: '머리 자르기, 치과 검진, 칫솔 교체, 매일 먹는 비타민을 잊지 마세요. Recurrence는 일정에 맞춰 알려 주고, 마지막으로 언제 갔는지 기록해요.' },
      name: '셀프 케어',
      blurb: '머리, 치과, 비타민',
      h1: '미루기 쉬운 일정을 위한 셀프 케어 알림',
      intro: '6주마다 머리 자르기, 1년에 두 번 치과, 3개월마다 칫솔 교체. Recurrence가 날짜를 기억하니 따로 기억할 필요가 없어요.',
      sampleTitle: '셀프 케어 시작 목록',
      sample: [
        { name: '머리 자르기', schedule: '할 때마다 6주 후' },
        { name: '칫솔 교체', schedule: '할 때마다 3개월 후' },
        { name: '치과 검진', schedule: '할 때마다 6개월 후' },
        { name: '비타민 먹기', schedule: '매일' },
      ],
      points: [
        { title: '마지막으로 언제 갔는지 확인', body: '“마지막 검진이 언제였지?”에 기록이 바로 답해 줘요.' },
        { title: '매일 하는 일도, 1년에 두 번 하는 일도', body: '매일의 습관과 가끔 있는 일정을 한 목록에서 관리해요.' },
        { title: '기본적으로 비공개', body: '작업은 공유하지 않는 한 내 iCloud 계정에만 보관돼요.' },
      ],
      screen: 'home',
      related: ['pets', 'chores', 'bills'],
    },
    family: {
      meta: { title: '가족과 함께 쓰는 할 일·집안일 공유 앱 | Recurrence', description: 'iCloud로 가족과 반복 작업을 공유하세요. 누구나 완료 표시를 할 수 있고, 각 작업의 기록에서 누가 언제 했는지 볼 수 있어요. 집안일 분담에도 좋아요.' },
      name: '가족 공유 작업',
      blurb: '누가 언제 했는지 확인',
      h1: '온 가족이 함께 쓰는 반복 작업',
      intro: 'iCloud로 작업을 공유하면 초대받은 사람 누구나 완료할 수 있어요. 누가 무엇을 맡았는지 기록에 남으니, “강아지 밥 줬어?”라고 물을 필요가 없어요.',
      sampleTitle: '가족 공유 목록',
      sample: [
        { name: '쓰레기 버리기', schedule: '매주 목요일' },
        { name: '화분에 물 주기', schedule: '할 때마다 1주 후' },
        { name: '심장사상충 약', schedule: '매월 1일' },
      ],
      points: [
        { title: 'iCloud로 공유', body: 'iCloud 공유로 가족을 어떤 작업에든 초대하세요. Recurrence와 iCloud 계정만 있으면 돼요.' },
        { title: '누가 했는지 확인', body: '공유 작업의 완료 기록마다 누가 완료 표시를 했는지 보여 줘요.' },
        { title: '모두에게 알림', body: '각자 자신에게 맞는 알림을 설정해요.' },
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
      title: '지원 및 도움말 | Recurrence',
      description: 'Recurrence 사용 중 궁금한 점이 있나요? 동기화, 공유, 알림, 위젯, Premium에 관한 자주 묻는 질문의 답변과 문의 방법을 안내해요.',
    },
    h1: '무엇을 도와드릴까요?',
    intro: 'Recurrence에 관해 자주 묻는 질문의 답변이에요.',
    contact: { q: '다른 질문이 있으신가요?', a: 'support@shayesapps.com으로 이메일을 보내 주세요.' },
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: '기기 간에 작업이 동기화되지 않아요.', a: 'Recurrence는 iCloud로 동기화돼요. 각 기기에서 같은 Apple 계정으로 iCloud에 로그인했는지, 인터넷에 연결되어 있는지, iCloud 저장 공간이 가득 차지 않았는지 확인하세요. 또한 설정 앱의 사용자 이름 > iCloud에서 Recurrence가 iCloud를 사용할 수 있는지도 확인하세요. Recurrence의 설정 > iCloud에서 동기화 상태를 볼 수 있어요. 그래도 동기화되지 않으면 그 화면에서 ‘Share Sync Report’를 탭해 보고서를 보내 주세요.' },
      { q: '다른 사람과 작업을 공유하려면 어떻게 하나요?', a: '목록에서 작업을 길게 누르고 ‘공유’를 선택하거나, 작업 상단의 공유 버튼을 탭하세요. 초대할 사람과, 변경할 수 있게 할지 보기만 하게 할지 선택하세요. 초대받은 사람에게는 Recurrence와 iCloud 계정이 필요해요. 공유를 중단하려면 같은 메뉴를 다시 여세요. 공유된 작업을 삭제하면 모든 사람에게서 삭제돼요.' },
      { q: '알림이 오지 않아요.', a: '먼저 설정 앱의 ‘알림’에서 Recurrence 알림이 허용되어 있는지, 집중 모드가 알림을 막고 있지 않은지 확인하세요. Recurrence의 설정 > 알림에서 권한이 켜져 있는지 볼 수 있어요. 각 작업은 편집 화면의 알림 섹션에서 자체 알림(마감 전, 당일, 기한 지남)을 설정할 수 있어요. 설정 > 기본값 > 알림에서는 새 작업에 기본으로 적용할 알림을 정해요. iOS는 앱이 미리 예약할 수 있는 알림 수를 제한하므로, 알림이 계속 오도록 가끔 Recurrence를 열어 주세요.' },
      { q: 'Premium 구입을 복원하려면 어떻게 하나요?', a: 'Recurrence에서 설정으로 이동해 Recurrence Premium 배너의 ‘살펴보기’를 탭한 다음, 화면 하단의 ‘복원’을 탭하세요. Premium을 구입한 Apple 계정으로 로그인되어 있는지 확인하세요.' },
      { q: 'Premium을 먼저 체험해 볼 수 있나요?', a: '네. Recurrence Premium에는 무료 체험이 포함되어 있으며, 구독하기 전에 App Store에 표시돼요.' },
      { q: 'Premium은 내 모든 기기에서 사용할 수 있나요?', a: '네. 한 번 구입하면 iPhone, iPad, Mac에서 Premium을 사용할 수 있고, 가족 공유로 가족과도 함께 쓸 수 있어요.' },
      { q: '구독은 어떻게 취소하나요?', a: '구독은 Apple 계정 설정에서 관리하며, 다음 갱신 최소 24시간 전까지 언제든지 취소할 수 있어요.' },
    ],
  },

  press: {
    meta: {
      title: '보도 자료 | Recurrence',
      description: 'Recurrence 보도 자료 키트: 앱 소개, 주요 정보, 스크린샷, 앱 아이콘, 그리고 기자와 리뷰어를 위한 연락처를 한곳에 모았어요.',
    },
    h1: '보도 자료',
    intro: 'Recurrence는 독립 개발사 Shayes Apps가 만든 iPhone, iPad, Mac용 반복 작업 관리 앱이에요. 반복되는 작업의 기한을 알려 주고 완료할 때마다 기록을 남겨요.',
    facts: [
      { label: '개발사', value: 'Shayes Apps' },
      { label: '플랫폼', value: 'iPhone, iPad, Mac' },
      { label: '가격', value: '무료(선택형 구독 제공)' },
      { label: '언어', value: '16개' },
      { label: 'App Store 평점', value: '별점 4.7+' },
    ],
    kitTitle: '키트 다운로드',
    kitBody: '스크린샷, 프레임을 씌운 스크린샷, 앱 아이콘, 배너(영문).',
    kitLink: '보도 자료 키트 다운로드(ZIP, 12MB)',
    contactTitle: '언론 문의',
    contactBody: 'support@shayesapps.com',
  },

  policies: {
    meta: { title: '개인정보 처리방침 및 이용약관 | Recurrence', description: 'Recurrence는 사용자를 추적하지 않으며 개인을 식별할 수 있는 정보를 수집하지 않아요. 작업은 iCloud로 동기화돼요. Premium 구독 약관도 확인하세요.' },
    h1: '개인정보 처리방침 및 이용약관',
    docs: [
      {
        id: 'privacy',
        title: '개인정보 처리방침',
        updated: '2026년 11월 26일',
        sections: [
          { title: '간단명료하게', body: ['저희는 여러분의 정보와 개인정보를 소중히 여기기 때문에 처리방침을 간단명료하게 작성했습니다. Recurrence는 사용자를 추적하지 않으며 개인을 식별할 수 있는 정보를 수집하지 않습니다. 저희는 의존하는 제3자 서비스의 수를 최소화하기 위해 최선을 다합니다.'] },
          { title: '결제', body: ['앱 내 구입 및 구독 결제는 App Store를 통해 이루어지므로 저희는 여러분의 신용카드 정보에 접근할 수 없습니다. Recurrence에는 RevenueCat SDK가 포함되어 있습니다. RevenueCat의 정책을 참고해 주십시오.'] },
          { title: '동기화 및 공유', body: ['데이터 동기화에는 iCloud(Apple의 CloudKit)를 사용합니다. CloudKit은 완전히 암호화되며 모든 데이터는 Apple의 인프라에 저장됩니다. 여러분이 작업을 공유하기로 선택한 사람을 제외하고는 여러분 외에 누구도 데이터에 접근할 수 없습니다.'] },
          { title: '환불 요청', body: ['Recurrence를 사용하고 앱 내 구입을 하는 경우, 환불 요청 처리의 일환으로 저희가 구입한 콘텐츠의 사용 및 이용에 관한 데이터를 Apple과 공유하는 데 동의하는 것으로 간주됩니다. 이 정보에는 구입한 콘텐츠에 접근하고 이를 이용한 방식에 관한 세부 정보가 포함될 수 있습니다. 이 데이터를 공유하는 목적은 Apple이 환불 요청에 대해 충분한 정보를 바탕으로 결정을 내릴 수 있도록 돕기 위함입니다. 저희는 이러한 데이터 공유가 Apple의 정책을 준수하고 요청 처리에 필요한 범위 내에서만 이루어지도록 합니다.'] },
          { title: '문의', body: ['개인정보 처리방침에 관한 질문이나 우려 사항이 있으시면 support@shayesapps.com으로 문의해 주십시오.'] },
        ],
      },
      {
        id: 'terms',
        title: '이용약관',
        updated: '2026년 11월 26일',
        sections: [
          { title: 'Premium 구독 약관', body: ['구독은 현재 기간이 끝나기 최소 24시간 전에 취소하지 않으면 자동으로 갱신됩니다. Apple 계정 설정에서 언제든지 취소할 수 있습니다. 구독을 구입하면 무료 체험 기간 중 사용하지 않은 부분은 소멸됩니다.'] },
          { title: '문의', body: ['이용약관에 관한 질문이나 우려 사항이 있으시면 support@shayesapps.com으로 문의해 주십시오.'] },
        ],
      },
    ],
  },

  screenAlt: {
    home: 'iPhone의 Recurrence 작업 목록(기한 지남, 오늘, 예정된 작업)',
    history: '날짜와 메모가 표시된 작업의 완료 기록',
    widgets: 'iPhone 홈 화면의 Recurrence 위젯',
    add: '마지막 완료 후 4주마다 반복하는 작업을 편집하는 화면',
  },

  labels: {
    sampleList: '예시 목록',
    whatYouGet: '이래서 편해요',
    relatedUseCases: '다른 아이디어',
    allUseCases: '모든 아이디어 보기',
    comparedOn: '비교 항목',
    feature: '기능',
    whenOtherTitle: '다른 앱이 더 맞을 수 있는 경우',
    verdictTitle: '요약',
    lastChecked: '마지막 확인',
    lastUpdated: '마지막 업데이트',
    faqTitle: '자주 묻는 질문',
    readMore: '더 알아보기',
    fiveStars: '별 5개 중 5개',
  },
};

export default ko;
