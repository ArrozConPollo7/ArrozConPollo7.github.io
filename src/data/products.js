export const products = [
    {
        id: "prod_1",
        name: 'Neon Oversized Tee',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 150000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop' } // Duplicated for gallery effect
        ],
        variants: [
            { id: "var_1_s", name: "S" },
            { id: "var_1_m", name: "M" },
            { id: "var_1_l", name: "L" },
            { id: "var_1_xl", name: "XL" }
        ],
        description: "High-visibility neon tee designed for the night. Oversized fit with dropped shoulders."
    },
    {
        id: "prod_2",
        name: 'Cyberpunk Hoodie',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 280000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_2_m", name: "M" },
            { id: "var_2_l", name: "L" }
        ],
        description: "Heavyweight cotton hoodie with cybernetic graphic prints. Kangaroo pocket and adjustable hood."
    },
    {
        id: "prod_3",
        name: 'Tech Cargo Pants',
        category: { name: 'Bottoms', slug: 'bottoms' },
        pricing: { priceRange: { start: { gross: { amount: 320000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_3_30", name: "30" },
            { id: "var_3_32", name: "32" },
            { id: "var_3_34", name: "34" }
        ],
        description: "Functional cargo pants with multiple utility pockets and adjustable ankle straps."
    },
    {
        id: "prod_4",
        name: 'Reflective Jacket',
        category: { name: 'Outerwear', slug: 'outerwear' },
        pricing: { priceRange: { start: { gross: { amount: 450000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_4_m", name: "M" },
            { id: "var_4_l", name: "L" },
            { id: "var_4_xl", name: "XL" }
        ],
        description: "Water-resistant jacket with 3M reflective details for maximum visibility."
    },
    {
        id: "prod_5",
        name: 'Acid Wash Tee',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 140000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_5_s", name: "S" },
            { id: "var_5_m", name: "M" },
            { id: "var_5_l", name: "L" }
        ],
        description: "Vintage wash tee with distressed details."
    },
    {
        id: "prod_6",
        name: 'Utility Vest',
        category: { name: 'Outerwear', slug: 'outerwear' },
        pricing: { priceRange: { start: { gross: { amount: 250000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_6_onesize", name: "One Size" }
        ],
        description: "Tactical vest with modular attachment points."
    },
    {
        id: "prod_7",
        name: 'Street Joggers',
        category: { name: 'Bottoms', slug: 'bottoms' },
        pricing: { priceRange: { start: { gross: { amount: 180000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_7_s", name: "S" },
            { id: "var_7_m", name: "M" },
            { id: "var_7_l", name: "L" }
        ],
        description: "Comfortable fleece joggers with tapered fit."
    },
    {
        id: "prod_8",
        name: 'Graphic Hoodie',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 290000, currency: 'COP' } } } },
        thumbnail: { url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop' },
        media: [
            { url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop' },
            { url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop' }
        ],
        variants: [
            { id: "var_8_m", name: "M" },
            { id: "var_8_l", name: "L" },
            { id: "var_8_xl", name: "XL" }
        ],
        description: "Bold graphic print hoodie."
    }
];
