import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    es: {
        nav_categories: 'CATEGORÍAS',
        search_placeholder: 'Buscar categoría...',
        collection_title: 'COLECCIÓN',
        cat_all: 'TODOS LOS PRODUCTOS',
        cat_shirts: 'CAMISAS',
        cat_hoodies: 'BUZOS',
        cat_pants: 'PANTALONES',
        cat_accessories: 'ACCESORIOS',
        hero_title_1: 'BE YOUR',
        hero_title_2: 'OWN STYLE',
        hero_subtitle: 'Ediciones limitadas. Hecho en Colombia.',
        btn_collection: 'Ver Colección',
        section_new: 'Nuevos Lanzamientos',
        link_view_all: 'Ver todo',
        btn_add: 'AGREGAR',
        footer_help: 'Ayuda',
        footer_shipping: 'Envíos',
        footer_returns: 'Devoluciones',
        footer_social: 'Síguenos',
        footer_brand_desc: 'Redefiniendo el estilo urbano.'
    },
    en: {
        nav_categories: 'CATEGORIES',
        search_placeholder: 'Search category...',
        collection_title: 'COLLECTION',
        cat_all: 'ALL PRODUCTS',
        cat_shirts: 'SHIRTS',
        cat_hoodies: 'HOODIES',
        cat_pants: 'PANTS',
        cat_accessories: 'ACCESSORIES',
        hero_title_1: 'BE YOUR',
        hero_title_2: 'OWN STYLE',
        hero_subtitle: 'Limited editions. Made in Colombia.',
        btn_collection: 'View Collection',
        section_new: 'New Releases',
        link_view_all: 'View All',
        btn_add: 'ADD TO CART',
        footer_help: 'Help',
        footer_shipping: 'Shipping',
        footer_returns: 'Returns',
        footer_social: 'Follow Us',
        footer_brand_desc: 'Redefining urban style.'
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
