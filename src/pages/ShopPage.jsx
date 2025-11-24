import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../components/ProductGrid';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const ShopPage = () => {
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const { t } = useLanguage();

    useEffect(() => {
        if (categoryFilter) {
            const categoryMap = {
                'tees': 'T-Shirts',
                'hoodies': 'Hoodies',
                'bottoms': 'Bottoms',
                'outerwear': 'Outerwear'
            };
            const mappedCategory = categoryMap[categoryFilter];
            if (mappedCategory) {
                setFilteredProducts(products.filter(p => p.category === mappedCategory));
            } else {
                setFilteredProducts(products);
            }
        } else {
            setFilteredProducts(products);
        }
    }, [categoryFilter]);

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                marginBottom: '40px',
                textTransform: 'uppercase'
            }}>
                {categoryFilter ? categoryFilter.toUpperCase() : t.nav.shop}
            </h1>

            {/* Filters (Simple) */}
            <div style={{ marginBottom: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link to="/shop" style={{ color: !categoryFilter ? 'var(--color-accent)' : 'white' }}>All</Link>
                <Link to="/shop?category=tees" style={{ color: categoryFilter === 'tees' ? 'var(--color-accent)' : 'white' }}>T-Shirts</Link>
                <Link to="/shop?category=hoodies" style={{ color: categoryFilter === 'hoodies' ? 'var(--color-accent)' : 'white' }}>Hoodies</Link>
                <Link to="/shop?category=bottoms" style={{ color: categoryFilter === 'bottoms' ? 'var(--color-accent)' : 'white' }}>Bottoms</Link>
                <Link to="/shop?category=outerwear" style={{ color: categoryFilter === 'outerwear' ? 'var(--color-accent)' : 'white' }}>Outerwear</Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px 20px'
            }}>
                {filteredProducts.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
