import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ShopPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [priceRange, setPriceRange] = useState(500000);
    const { t } = useLanguage();

    // Filter Logic
    useEffect(() => {
        if (categoryFilter) {
            setFilteredProducts(products.filter(p => p.category.slug === categoryFilter));
        } else {
            setFilteredProducts(products);
        }
    }, [categoryFilter]);

    const categories = [
        { name: 'All', slug: null },
        { name: 'T-Shirts', slug: 'tees' },
        { name: 'Hoodies', slug: 'hoodies' },
        { name: 'Bottoms', slug: 'bottoms' },
        { name: 'Outerwear', slug: 'outerwear' }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', gap: '40px' }}>

            {/* Sidebar (Desktop) */}
            <aside className="shop-sidebar" style={{ width: '250px', flexShrink: 0 }}>
                <div style={{ position: 'sticky', top: '120px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '20px', textTransform: 'uppercase' }}>Filters</h3>

                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>Category</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {categories.map(cat => (
                                <li key={cat.name} style={{ marginBottom: '10px' }}>
                                    <button
                                        onClick={() => setSearchParams(cat.slug ? { category: cat.slug } : {})}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: categoryFilter === cat.slug ? 'var(--color-accent)' : 'var(--color-text)',
                                            cursor: 'pointer',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-main)',
                                            textAlign: 'left',
                                            padding: 0,
                                            transition: 'color 0.2s'
                                        }}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            color: '#888',
                            marginBottom: '20px',
                            letterSpacing: '0.1em'
                        }}>Price Range</h4>

                        <div style={{ marginBottom: '15px' }}>
                            <input
                                type="range"
                                min="0"
                                max="500000"
                                step="10000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                style={{
                                    width: '100%',
                                    height: '2px',
                                    background: 'linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) 100%, #333 100%)',
                                    outline: 'none',
                                    WebkitAppearance: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                                className="price-slider"
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            fontFamily: 'var(--font-main)',
                            marginBottom: '10px'
                        }}>
                            <span style={{ color: '#888' }}>$0</span>
                            <span style={{ color: '#888' }}>$500.000</span>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            color: 'var(--color-accent)',
                            fontWeight: '700',
                            fontFamily: 'var(--font-main)',
                            padding: '10px',
                            background: 'rgba(90, 14, 27, 0.1)',
                            borderRadius: '4px',
                            border: '1px solid var(--color-accent)',
                            animation: 'pulse-glow 2s ease-in-out infinite'
                        }}>
                            ${priceRange.toLocaleString('es-CO')}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="mobile-filter-toggle" style={{ display: 'none', marginBottom: '20px', width: '100%' }}>
                <button
                    onClick={() => setMobileFiltersOpen(true)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: '#111',
                        border: '1px solid #333',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-display)'
                    }}
                >
                    <Filter size={16} /> Filters
                </button>
            </div>

            {/* Product Grid */}
            <main style={{ flexGrow: 1 }}>
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
            </main>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileFiltersOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '80%',
                            height: '100vh',
                            background: '#050505',
                            zIndex: 2000,
                            padding: '20px',
                            borderRight: '1px solid #333'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>FILTERS</h3>
                            <X onClick={() => setMobileFiltersOpen(false)} />
                        </div>
                        {/* Mobile Filter Content (Duplicate logic for now) */}
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {categories.map(cat => (
                                <li key={cat.name} style={{ marginBottom: '15px' }}>
                                    <button
                                        onClick={() => {
                                            setSearchParams(cat.slug ? { category: cat.slug } : {});
                                            setMobileFiltersOpen(false);
                                        }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: categoryFilter === cat.slug ? 'var(--color-accent)' : 'var(--color-text)',
                                            fontSize: '1.2rem',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .container { flex-direction: column !important; gap: 20px !important; }
                    .shop-sidebar { display: none !important; }
                    .mobile-filter-toggle { display: block !important; }
                }
            `}</style>
        </div>
    );
};

export default ShopPage;
