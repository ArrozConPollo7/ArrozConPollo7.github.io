export const products = [
    // HOODIES - 150.000 COP
    {
        id: "hoodie-demon-wings",
        name: 'Hoodie Demon Wings',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 150000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/hoodie-demon-wings.png' },
        media: [
            { url: '/images/products/hoodie-demon-wings.png' }
        ],
        variants: [
            { id: "hdw_s", name: "S" },
            { id: "hdw_m", name: "M" },
            { id: "hdw_l", name: "L" },
            { id: "hdw_xl", name: "XL" }
        ],
        description: "Hoodie negro con gráfico de alas demoníacas en la espalda. Diseño gótico detallado con logo ANDROMEDA en el pecho."
    },
    {
        id: "hoodie-skeletal-warrior",
        name: 'Hoodie Skeletal Warrior',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 150000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/hoodie-skeletal-warrior.png' },
        media: [
            { url: '/images/products/hoodie-skeletal-warrior.png' }
        ],
        variants: [
            { id: "hsw_s", name: "S" },
            { id: "hsw_m", name: "M" },
            { id: "hsw_l", name: "L" },
            { id: "hsw_xl", name: "XL" }
        ],
        description: "Hoodie negro con figura esquelética guerrera en la espalda. Estilo black metal con detalles ornamentados."
    },
    {
        id: "hoodie-gothic-skull",
        name: 'Hoodie Gothic Skull',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 150000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/hoodie-gothic-skull.png' },
        media: [
            { url: '/images/products/hoodie-gothic-skull.png' }
        ],
        variants: [
            { id: "hgs_s", name: "S" },
            { id: "hgs_m", name: "M" },
            { id: "hgs_l", name: "L" },
            { id: "hgs_xl", name: "XL" }
        ],
        description: "Hoodie negro con calavera gótica ornamentada en la espalda. Diseño intrincado con elementos dark."
    },
    {
        id: "hoodie-dark-angel",
        name: 'Hoodie Dark Angel',
        category: { name: 'Hoodies', slug: 'hoodies' },
        pricing: { priceRange: { start: { gross: { amount: 150000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/hoodie-dark-angel.png' },
        media: [
            { url: '/images/products/hoodie-dark-angel.png' }
        ],
        variants: [
            { id: "hda_s", name: "S" },
            { id: "hda_m", name: "M" },
            { id: "hda_l", name: "L" },
            { id: "hda_xl", name: "XL" }
        ],
        description: "Hoodie negro con ángel oscuro y alas desplegadas en la espalda. Gráfico detallado estilo gótico."
    },

    // T-SHIRTS - 90.000 COP
    {
        id: "tshirt-demon-wings",
        name: 'T-Shirt Demon Wings',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 90000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/tshirt-demon-wings.png' },
        media: [
            { url: '/images/products/tshirt-demon-wings.png' }
        ],
        variants: [
            { id: "tdw_s", name: "S" },
            { id: "tdw_m", name: "M" },
            { id: "tdw_l", name: "L" },
            { id: "tdw_xl", name: "XL" }
        ],
        description: "Camiseta negra con gráfico de alas demoníacas en la espalda. Diseño gótico detallado con logo ANDROMEDA en el pecho."
    },
    {
        id: "tshirt-skeletal-warrior",
        name: 'T-Shirt Skeletal Warrior',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 90000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/tshirt-skeletal-warrior.png' },
        media: [
            { url: '/images/products/tshirt-skeletal-warrior.png' }
        ],
        variants: [
            { id: "tsw_s", name: "S" },
            { id: "tsw_m", name: "M" },
            { id: "tsw_l", name: "L" },
            { id: "tsw_xl", name: "XL" }
        ],
        description: "Camiseta negra con figura esquelética guerrera en la espalda. Estilo black metal con detalles ornamentados."
    },
    {
        id: "tshirt-gothic-skull",
        name: 'T-Shirt Gothic Skull',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 90000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/tshirt-gothic-skull.png' },
        media: [
            { url: '/images/products/tshirt-gothic-skull.png' }
        ],
        variants: [
            { id: "tgs_s", name: "S" },
            { id: "tgs_m", name: "M" },
            { id: "tgs_l", name: "L" },
            { id: "tgs_xl", name: "XL" }
        ],
        description: "Camiseta negra con calavera gótica ornamentada en la espalda. Diseño intrincado con elementos dark."
    },
    {
        id: "tshirt-dark-angel",
        name: 'T-Shirt Dark Angel',
        category: { name: 'T-Shirts', slug: 'tees' },
        pricing: { priceRange: { start: { gross: { amount: 90000, currency: 'COP' } } } },
        thumbnail: { url: '/images/products/tshirt-dark-angel.png' },
        media: [
            { url: '/images/products/tshirt-dark-angel.png' }
        ],
        variants: [
            { id: "tda_s", name: "S" },
            { id: "tda_m", name: "M" },
            { id: "tda_l", name: "L" },
            { id: "tda_xl", name: "XL" }
        ],
        description: "Camiseta negra con ángel oscuro y alas desplegadas en la espalda. Gráfico detallado estilo gótico."
    }
];
