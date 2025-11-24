import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useLanguage } from '../context/LanguageContext';

import { products } from '../data/products';

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
