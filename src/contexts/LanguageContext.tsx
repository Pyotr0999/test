import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getTranslationObject: (key: string) => Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Top bar
    location: 'Сайлент-Хилл',
    phone: '+7 555 555-37-50',
    daily: 'Ежедневно',
    hours: '9:00 — 21:00',
    delivery: 'Доставка',
    payment: 'Оплата',
    contacts: 'Контакты',
    
    // Search
    searchPlaceholder: 'Поиск товаров...',
    findButton: 'Найти',
    
    // Navigation menu
    promotions: 'Акции',
    hotOffers: 'Горячее предложение',
    giftSets: 'Подарочные наборы',
    events: 'События',
    ourBrands: 'Наши бренды',
    buildPC: 'Собрать компьютер',
    
    // Dropdown menu items
    promotionsItems: {
      weeklyDeals: 'Еженедельные скидки',
      flashSales: 'Молниеносные распродажи',
      seasonalOffers: 'Сезонные предложения',
      clearance: 'Распродажа остатков'
    },
    hotOffersItems: {
      todayOnly: 'Только сегодня',
      limitedTime: 'Ограниченное время',
      bestDeals: 'Лучшие предложения',
      newArrivals: 'Новинки'
    },
    giftSetsItems: {
      gaming: 'Игровые наборы',
      accessories: 'Аксессуары',
      collectors: 'Коллекционные',
      bundles: 'Комплекты'
    },
    eventsItems: {
      tournaments: 'Турниры',
      competitions: 'Соревнования',
      workshops: 'Мастер-классы',
      meetups: 'Встречи'
    },
    ourBrandsItems: {
      featured: 'Рекомендуемые',
      popular: 'Популярные',
      exclusive: 'Эксклюзивные',
      partners: 'Партнеры'
    },

    // Hero section
    heroTitle: 'Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!',
    heroDescription: 'Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень мастерства! С нашей поддержкой каждое твое действие станет частью великого искусства, а победы — результатом точного плана и безупречной подготовки!',
    catalogButton: 'В каталог'
  },
  en: {
    // Top bar
    location: 'Silent Hill',
    phone: '+7 555 555-37-50',
    daily: 'Daily',
    hours: '9:00 — 21:00',
    delivery: 'Delivery',
    payment: 'Payment',
    contacts: 'Contacts',
    
    // Search
    searchPlaceholder: 'Search products...',
    findButton: 'Find',
    
    // Navigation menu
    promotions: 'Promotions',
    hotOffers: 'Hot Offers',
    giftSets: 'Gift Sets',
    events: 'Events',
    ourBrands: 'Our Brands',
    buildPC: 'Build PC',
    
    // Dropdown menu items
    promotionsItems: {
      weeklyDeals: 'Weekly Deals',
      flashSales: 'Flash Sales',
      seasonalOffers: 'Seasonal Offers',
      clearance: 'Clearance'
    },
    hotOffersItems: {
      todayOnly: 'Today Only',
      limitedTime: 'Limited Time',
      bestDeals: 'Best Deals',
      newArrivals: 'New Arrivals'
    },
    giftSetsItems: {
      gaming: 'Gaming Sets',
      accessories: 'Accessories',
      collectors: 'Collectors',
      bundles: 'Bundles'
    },
    eventsItems: {
      tournaments: 'Tournaments',
      competitions: 'Competitions',
      workshops: 'Workshops',
      meetups: 'Meetups'
    },
    ourBrandsItems: {
      featured: 'Featured',
      popular: 'Popular',
      exclusive: 'Exclusive',
      partners: 'Partners'
    },

    // Hero section
    heroTitle: 'Embark on adventures with our epic loot boxes and sets!',
    heroDescription: 'Develop your skills by following the wise strategies of masters, and rise to a new level of mastery! With our support, every action you take will become part of great art, and victories will be the result of precise planning and flawless preparation!',
    catalogButton: 'To Catalog'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  const getTranslationObject = (key: string): Record<string, string> => {
    return translations[language][key as keyof typeof translations['ru']] as Record<string, string> || {};
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTranslationObject }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};