// Interface strings shared by every page (navigation, buttons, footer).
// Page copy lives in src/content/. Product terms follow the app's
// Localizable.xcstrings so the site and the app use the same words.

import type { Locale } from './locales';

export interface UiStrings {
  skipToContent: string;
  nav: { features: string; useCases: string; compare: string; press: string; support: string };
  download: string;
  downloadShort: string;
  platforms: string;
  ratingLabel: string;
  language: string;
  footer: { press: string; policies: string; support: string; social: string; madeBy: string };
  langBanner: { prompt: string; switchTo: string; dismiss: string };
  notFound: { title: string; body: string; home: string };
  breadcrumbHome: string;
}

const en: UiStrings = {
  skipToContent: 'Skip to content',
  nav: { features: 'Features', useCases: 'What you can track', compare: 'Compare', press: 'Press', support: 'Support' },
  download: 'Download on the App Store',
  downloadShort: 'Download',
  platforms: 'For iPhone, iPad and Mac',
  ratingLabel: 'App Store rating',
  language: 'Language',
  footer: { press: 'Press kit', policies: 'Privacy & terms', support: 'Support', social: 'Help & social', madeBy: 'Made by Shayes Apps' },
  langBanner: { prompt: 'This page is also available in', switchTo: 'Switch', dismiss: 'Dismiss' },
  notFound: { title: 'Page not found', body: 'The page you were looking for has moved or never existed.', home: 'Go to the home page' },
  breadcrumbHome: 'Home',
};

const de: UiStrings = {
  skipToContent: 'Zum Inhalt springen',
  nav: { features: 'Funktionen', useCases: 'Anwendungsfälle', compare: 'Vergleich', press: 'Presse', support: 'Support' },
  download: 'Laden im App Store',
  downloadShort: 'Laden',
  platforms: 'Für iPhone, iPad und Mac',
  ratingLabel: 'Bewertung im App Store',
  language: 'Sprache',
  footer: { press: 'Pressematerial', policies: 'Datenschutz & Nutzungsbedingungen', support: 'Support', social: 'Hilfe & Social Media', madeBy: 'Von Shayes Apps' },
  langBanner: { prompt: 'Diese Seite gibt es auch auf', switchTo: 'Wechseln', dismiss: 'Schließen' },
  notFound: { title: 'Seite nicht gefunden', body: 'Die gesuchte Seite wurde verschoben oder existiert nicht.', home: 'Zur Startseite' },
  breadcrumbHome: 'Start',
};

const esMX: UiStrings = {
  skipToContent: 'Ir al contenido',
  nav: { features: 'Funciones', useCases: 'Casos de uso', compare: 'Comparar', press: 'Prensa', support: 'Soporte' },
  download: 'Descargar en el App Store',
  downloadShort: 'Descargar',
  platforms: 'Para iPhone, iPad y Mac',
  ratingLabel: 'Calificación en el App Store',
  language: 'Idioma',
  footer: { press: 'Kit de prensa', policies: 'Privacidad y términos', support: 'Soporte', social: 'Ayuda y redes', madeBy: 'Hecho por Shayes Apps' },
  langBanner: { prompt: 'Esta página también está disponible en', switchTo: 'Cambiar', dismiss: 'Cerrar' },
  notFound: { title: 'Página no encontrada', body: 'La página que buscas se movió o no existe.', home: 'Ir a la página de inicio' },
  breadcrumbHome: 'Inicio',
};

const esES: UiStrings = { ...esMX, langBanner: { ...esMX.langBanner, prompt: 'Esta página también está disponible en' } };

const fr: UiStrings = {
  skipToContent: 'Aller au contenu',
  nav: { features: 'Fonctionnalités', useCases: 'Utilisations', compare: 'Comparer', press: 'Presse', support: 'Assistance' },
  download: 'Télécharger dans l’App Store',
  downloadShort: 'Télécharger',
  platforms: 'Pour iPhone, iPad et Mac',
  ratingLabel: 'Note sur l’App Store',
  language: 'Langue',
  footer: { press: 'Kit presse', policies: 'Confidentialité et conditions', support: 'Assistance', social: 'Aide et réseaux', madeBy: 'Conçu par Shayes Apps' },
  langBanner: { prompt: 'Cette page existe aussi en', switchTo: 'Changer', dismiss: 'Fermer' },
  notFound: { title: 'Page introuvable', body: 'La page que vous cherchez a été déplacée ou n’existe pas.', home: 'Retour à l’accueil' },
  breadcrumbHome: 'Accueil',
};

const ja: UiStrings = {
  skipToContent: '本文へスキップ',
  nav: { features: '機能', useCases: '使い方', compare: '比較', press: 'プレス', support: 'サポート' },
  download: 'App Storeからダウンロード',
  downloadShort: 'ダウンロード',
  platforms: 'iPhone、iPad、Mac対応',
  ratingLabel: 'App Storeの評価',
  language: '言語',
  footer: { press: 'プレスキット', policies: 'プライバシーと利用規約', support: 'サポート', social: 'ヘルプとSNS', madeBy: '開発：Shayes Apps' },
  langBanner: { prompt: 'このページは次の言語でもご覧いただけます：', switchTo: '切り替える', dismiss: '閉じる' },
  notFound: { title: 'ページが見つかりません', body: 'お探しのページは移動したか、存在しません。', home: 'ホームへ戻る' },
  breadcrumbHome: 'ホーム',
};

const ko: UiStrings = {
  skipToContent: '본문으로 건너뛰기',
  nav: { features: '기능', useCases: '활용 사례', compare: '비교', press: '보도 자료', support: '지원' },
  download: 'App Store에서 다운로드',
  downloadShort: '다운로드',
  platforms: 'iPhone, iPad 및 Mac용',
  ratingLabel: 'App Store 평점',
  language: '언어',
  footer: { press: '보도 자료', policies: '개인정보 처리방침 및 이용약관', support: '지원', social: '도움말 및 소셜', madeBy: '제작: Shayes Apps' },
  langBanner: { prompt: '이 페이지는 다음 언어로도 볼 수 있습니다:', switchTo: '전환', dismiss: '닫기' },
  notFound: { title: '페이지를 찾을 수 없습니다', body: '찾으시는 페이지가 이동되었거나 존재하지 않습니다.', home: '홈으로 이동' },
  breadcrumbHome: '홈',
};

const ptBR: UiStrings = {
  skipToContent: 'Pular para o conteúdo',
  nav: { features: 'Recursos', useCases: 'Casos de uso', compare: 'Comparar', press: 'Imprensa', support: 'Suporte' },
  download: 'Baixar na App Store',
  downloadShort: 'Baixar',
  platforms: 'Para iPhone, iPad e Mac',
  ratingLabel: 'Avaliação na App Store',
  language: 'Idioma',
  footer: { press: 'Kit de imprensa', policies: 'Privacidade e termos', support: 'Suporte', social: 'Ajuda e redes sociais', madeBy: 'Feito por Shayes Apps' },
  langBanner: { prompt: 'Esta página também está disponível em', switchTo: 'Mudar', dismiss: 'Fechar' },
  notFound: { title: 'Página não encontrada', body: 'A página que você procura mudou de lugar ou não existe.', home: 'Ir para a página inicial' },
  breadcrumbHome: 'Início',
};

const ptPT: UiStrings = {
  ...ptBR,
  nav: { ...ptBR.nav, features: 'Funcionalidades', support: 'Apoio' },
  download: 'Descarregar na App Store',
  downloadShort: 'Descarregar',
  footer: { ...ptBR.footer, support: 'Apoio' },
  langBanner: { prompt: 'Esta página também está disponível em', switchTo: 'Mudar', dismiss: 'Fechar' },
  notFound: { title: 'Página não encontrada', body: 'A página que procura mudou de sítio ou não existe.', home: 'Ir para a página inicial' },
};

const ru: UiStrings = {
  skipToContent: 'Перейти к содержанию',
  nav: { features: 'Возможности', useCases: 'Сценарии', compare: 'Сравнение', press: 'Пресса', support: 'Поддержка' },
  download: 'Загрузите в App Store',
  downloadShort: 'Загрузить',
  platforms: 'Для iPhone, iPad и Mac',
  ratingLabel: 'Оценка в App Store',
  language: 'Язык',
  footer: { press: 'Пресс-кит', policies: 'Конфиденциальность и условия', support: 'Поддержка', social: 'Помощь и соцсети', madeBy: 'Разработчик: Shayes Apps' },
  langBanner: { prompt: 'Эта страница доступна также на языке:', switchTo: 'Перейти', dismiss: 'Закрыть' },
  notFound: { title: 'Страница не найдена', body: 'Страница, которую вы ищете, перемещена или не существует.', home: 'На главную' },
  breadcrumbHome: 'Главная',
};

const zhHans: UiStrings = {
  skipToContent: '跳到正文',
  nav: { features: '功能', useCases: '使用场景', compare: '对比', press: '媒体', support: '支持' },
  download: '在 App Store 下载',
  downloadShort: '下载',
  platforms: '适用于 iPhone、iPad 和 Mac',
  ratingLabel: 'App Store 评分',
  language: '语言',
  footer: { press: '媒体资料', policies: '隐私政策与使用条款', support: '支持', social: '帮助与社交', madeBy: '开发者：Shayes Apps' },
  langBanner: { prompt: '此页面还提供以下语言版本：', switchTo: '切换', dismiss: '关闭' },
  notFound: { title: '找不到页面', body: '你要找的页面已移动或不存在。', home: '返回首页' },
  breadcrumbHome: '首页',
};

const zhHant: UiStrings = {
  skipToContent: '跳至主要內容',
  nav: { features: '功能', useCases: '使用情境', compare: '比較', press: '媒體', support: '支援' },
  download: '在 App Store 下載',
  downloadShort: '下載',
  platforms: '適用於 iPhone、iPad 和 Mac',
  ratingLabel: 'App Store 評分',
  language: '語言',
  footer: { press: '媒體資料', policies: '隱私權政策與使用條款', support: '支援', social: '說明與社群', madeBy: '開發者：Shayes Apps' },
  langBanner: { prompt: '此頁面也提供以下語言版本：', switchTo: '切換', dismiss: '關閉' },
  notFound: { title: '找不到頁面', body: '你要找的頁面已移動或不存在。', home: '返回首頁' },
  breadcrumbHome: '首頁',
};

export const UI: Record<Locale, UiStrings> = {
  'en-US': en, 'en-GB': en, 'en-AU': en, 'en-CA': en,
  de, es: esMX, 'es-ES': esES, fr, 'fr-CA': fr,
  ja, ko, 'pt-BR': ptBR, 'pt-PT': ptPT, ru, 'zh-Hans': zhHans, 'zh-Hant': zhHant,
};
