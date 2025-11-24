import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useLanguage } from '../context/LanguageContext';

export const products = [
    {
        id: 1,
        name: 'Neon Oversized Tee',
        category: 'T-Shirts',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Cyberpunk Hoodie',
        category: 'Hoodies',
        price: 280000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Tech Cargo Pants',
        category: 'Bottoms',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Reflective Jacket',
        category: 'Outerwear',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'Acid Wash Tee',
        category: 'T-Shirts',
        price: 140000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Utility Vest',
        category: 'Outerwear',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 7,
        name: 'Street Joggers',
        category: 'Bottoms',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 8,
        name: 'Graphic Hoodie',
        category: 'Hoodies',
        price: 290000,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop'
    }
];

const ProductGrid = () => {
    const { t } = useLanguage();

    return (
        <section className="container" style={{ padding: '80px 20px' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                marginBottom: '40px',
                borderBottom: '1px solid #222',
                paddingBottom: '20px'
            }}>
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)'
                }}>{t.products.title}</h2>
                <Link to="/shop" className="btn">{t.products.viewAll}</Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px 20px'
            }}>
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
