// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileToggle = document.getElementById('mobileToggle');
const categoriesBtn = document.getElementById('categoriesBtn');
const categoriesSidebar = document.getElementById('categoriesSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const langToggle = document.getElementById('langToggle');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Categories Sidebar
categoriesBtn.addEventListener('click', () => {
    categoriesSidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    categoriesSidebar.classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!categoriesSidebar.contains(e.target) && e.target !== categoriesBtn) {
        categoriesSidebar.classList.remove('active');
    }
});

// Language System
let currentLang = 'es';
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
        btn_add: 'AGREGAR'
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
        btn_add: 'ADD TO CART'
    }
};

function updateLanguage(lang) {
    currentLang = lang;
    langToggle.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Handle nested elements (like icons) by only replacing text node if possible, 
            // but for simplicity here we might overwrite. 
            // Better approach: check if it has children.
            if (el.children.length > 0) {
                // Specific handling for links with icons
                const icon = el.querySelector('i');
                el.childNodes[0].nodeValue = translations[lang][key] + ' ';
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
});

// Product Data
const products = [
    {
        id: 1,
        title: "Oversized Graphic Tee",
        price: "$120.000",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Cargo Pants Black",
        price: "$180.000",
        category: "pants",
        image: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Hoodie Essentials",
        price: "$210.000",
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Streetwear Cap",
        price: "$85.000",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Graphic Tee White",
        price: "$120.000",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Denim Jacket",
        price: "$250.000",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=600&auto=format&fit=crop"
    }
];

// Render Products
const productGrid = document.getElementById('productGrid');
const categoryTitle = document.getElementById('categoryTitle');

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'all';
}

function renderProducts() {
    if (!productGrid) return;

    const currentCat = getCategoryFromURL();
    console.log('Template 1 Loaded');
});
