import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const allProducts = [
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

const CategoryPage = () => {
    const { id } = useParams();
    const { t } = useLanguage();

    const category = id || 'all';

    const filteredProducts = category === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === category);

    const getTitle = (cat) => {
        const key = `cat_${cat}`;
        return t(key);
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div class="container">
                <header class="section-header" style={{ marginTop: '2rem' }}>
                    <h1 class="section-title">{getTitle(category)}</h1>
                </header>

                <div class="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
