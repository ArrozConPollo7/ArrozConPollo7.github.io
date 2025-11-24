import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
    en: {
        nav: {
            home: 'HOME',
            shop: 'SHOP',
            collections: 'COLLECTIONS',
            about: 'ABOUT'
        },
        hero: {
            subtitle: 'New Collection 2025',
            title: 'STREET',
            title2: 'CULTURE',
            cta: 'Shop The Drop'
        },
        marquee: 'NEW COLLECTION DROP — LIMITED EDITION — WORLDWIDE SHIPPING — ',
        products: {
            title: 'Latest Drops',
            viewAll: 'View All',
            addToCart: 'Add to Cart',
            added: 'Added to Cart',
            selectSize: 'Select Size',
            newArrival: 'New Arrival'
        },
        productNames: {
            1: 'Neon Oversized Tee',
            2: 'Cyberpunk Hoodie',
            3: 'Tech Cargo Pants',
            4: 'Reflective Jacket',
            5: 'Acid Wash Tee',
            6: 'Utility Vest',
            7: 'Street Joggers',
            8: 'Graphic Hoodie'
        },
        categories: {
            'T-Shirts': 'T-Shirts',
            'Hoodies': 'Hoodies',
            'Bottoms': 'Bottoms',
            'Outerwear': 'Outerwear'
        },
        cart: {
            title: 'Shopping Cart',
            empty: 'Your Cart is Empty',
            startShopping: 'Start Shopping',
            summary: 'Summary',
            subtotal: 'Subtotal',
            shipping: 'Shipping',
            calculated: 'Calculated at checkout',
            total: 'Total',
            checkout: 'Checkout',
            continue: 'Continue Shopping'
        },
        footer: {
            brandDesc: 'Redefining streetwear culture with futuristic designs and premium quality.',
            shop: 'Shop',
            links: {
                newArrivals: 'New Arrivals',
                bestSellers: 'Best Sellers',
                accessories: 'Accessories',
                sale: 'Sale'
            },
            stayInLoop: 'Stay in the Loop',
            placeholder: 'Enter your email',
            rights: '© 2025 Template 1. All rights reserved.'
        }
    },
    es: {
        nav: {
            home: 'INICIO',
            shop: 'TIENDA',
            collections: 'COLECCIONES',
            about: 'NOSOTROS'
        },
        hero: {
            subtitle: 'Nueva Colección 2025',
            title: 'CULTURA',
            title2: 'URBANA',
            cta: 'Comprar Ahora'
        },
        marquee: 'NUEVA COLECCIÓN — EDICIÓN LIMITADA — ENVÍOS A TODO EL MUNDO — ',
        products: {
            title: 'Últimos Lanzamientos',
            viewAll: 'Ver Todo',
            addToCart: 'Añadir al Carrito',
            added: 'Añadido',
            selectSize: 'Seleccionar Talla',
            newArrival: 'Nuevo'
        },
        productNames: {
            1: 'Camiseta Neón Oversize',
            2: 'Sudadera Cyberpunk',
            3: 'Pantalón Cargo Tech',
            4: 'Chaqueta Reflectiva',
            5: 'Camiseta Acid Wash',
            6: 'Chaleco Utilitario',
            7: 'Joggers Urbanos',
            8: 'Sudadera Gráfica'
        },
        categories: {
            'T-Shirts': 'Camisetas',
            'Hoodies': 'Sudaderas',
            'Bottoms': 'Pantalones',
            'Outerwear': 'Abrigos'
        },
        cart: {
            title: 'Carrito de Compras',
            empty: 'Tu carrito está vacío',
            startShopping: 'Ir a la Tienda',
            summary: 'Resumen',
            subtotal: 'Subtotal',
            shipping: 'Envío',
            calculated: 'Calculado al pagar',
            total: 'Total',
            checkout: 'Pagar',
            continue: 'Seguir Comprando'
        },
        footer: {
            brandDesc: 'Redefiniendo la cultura urbana con diseños futuristas y calidad premium.',
            shop: 'Tienda',
            links: {
                newArrivals: 'Nuevos Lanzamientos',
                bestSellers: 'Más Vendidos',
                accessories: 'Accesorios',
                sale: 'Ofertas'
            },
            stayInLoop: 'Mantente Informado',
            placeholder: 'Tu correo electrónico',
            rights: '© 2025 Template 1. Todos los derechos reservados.'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // Default to Spanish as requested implicitly by context

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    };

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage,
            t: translations[language]
        }}>
            {children}
        </LanguageContext.Provider>
    );
};
