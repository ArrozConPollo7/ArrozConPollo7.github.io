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
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [priceRange, setPriceRange] = useState(500000);
    const { t } = useLanguage();

    // Filter Logic - Category and Price (Optimized with useMemo)
    const filteredProducts = React.useMemo(() => {
        let filtered = products;

        // Filter by category
        if (categoryFilter) {
            filtered = filtered.filter(p => p.category.slug === categoryFilter);
        }

        // Filter by price range
        filtered = filtered.filter(p => {
            const productPrice = p.pricing?.priceRange?.start?.gross?.amount || 0;
            return productPrice <= priceRange;
        });

        return filtered;
    }, [categoryFilter, priceRange]);

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
                    {/* Main Title */}
                    <h3 style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.75rem',
                        marginBottom: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.25em',
                        fontWeight: '400',
                        color: '#666'
                    }}>REFINE</h3>

                    {/* Category Filter */}
                    <div style={{ marginBottom: '60px' }}>
                        <h4 style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            color: '#666',
                            marginBottom: '25px',
                            letterSpacing: '0.15em',
                            fontWeight: '400',
                            fontFamily: 'var(--font-main)'
                        }}>Colección</h4>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {categories.map(cat => (
                                <li key={cat.name} style={{ marginBottom: '16px' }}>
                                    <button
                                        onClick={() => setSearchParams(cat.slug ? { category: cat.slug } : {})}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: categoryFilter === cat.slug ? '#fff' : '#9ca3af',
                                            cursor: 'pointer',
                                            fontSize: '0.95rem',
                                            fontFamily: 'var(--font-main)',
                                            textAlign: 'left',
                                            padding: '8px 0 8px 12px',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            fontWeight: categoryFilter === cat.slug ? '500' : '400',
                                            letterSpacing: '0.02em',
                                            width: '100%',
                                            position: 'relative',
                                            borderLeft: categoryFilter === cat.slug ? '2px solid var(--color-accent)' : '2px solid transparent'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (categoryFilter !== cat.slug) {
                                                e.currentTarget.style.color = '#fff';
                                                e.currentTarget.style.borderLeft = '2px solid var(--color-accent)';
                                                e.currentTarget.style.paddingLeft = '16px';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (categoryFilter !== cat.slug) {
                                                e.currentTarget.style.color = '#9ca3af';
                                                e.currentTarget.style.borderLeft = '2px solid transparent';
                                                e.currentTarget.style.paddingLeft = '12px';
                                            }
                                        }}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Range Filter */}
                    <div style={{ marginBottom: '60px' }}>
                        <h4 style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            color: '#666',
                            marginBottom: '25px',
                            letterSpacing: '0.15em',
                            fontWeight: '400',
                            fontFamily: 'var(--font-main)'
                        }}>Precio</h4>

                        {/* Slider */}
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="range"
                                min="0"
                                max="500000"
                                step="10000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                style={{
                                    width: '100%',
                                    height: '1px',
                                    background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${(priceRange / 500000) * 100}%, #333 ${(priceRange / 500000) * 100}%, #333 100%)`,
                                    outline: 'none',
                                    WebkitAppearance: 'none',
                                    cursor: 'pointer',
                                    marginBottom: '15px'
                                }}
                                className="price-slider"
                            />
                        </div>

                        {/* Min/Max Labels */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-main)',
                            marginBottom: '15px',
                            color: '#666',
                            letterSpacing: '0.05em'
                        }}>
                            <span>$0</span>
                            <span>$500.000</span>
                        </div>

                        {/* Current Price Value - Minimal Display */}
                        <div style={{
                            fontSize: '0.9rem',
                            color: 'var(--color-accent)',
                            fontWeight: '500',
                            fontFamily: 'var(--font-main)',
                            paddingBottom: '8px',
                            borderBottom: '1px solid rgba(90, 14, 27, 0.3)',
                            letterSpacing: '0.02em'
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
                            padding: '30px 20px',
                            borderRight: '1px solid #333'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-main)',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.25em',
                                fontWeight: '400',
                                color: '#666'
                            }}>REFINE</h3>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#666',
                                    cursor: 'pointer',
                                    padding: '8px'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Mobile Category List */}
                        <div style={{ marginBottom: '50px' }}>
                            <h4 style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                color: '#666',
                                marginBottom: '25px',
                                letterSpacing: '0.15em',
                                fontWeight: '400',
                                fontFamily: 'var(--font-main)'
                            }}>Colección</h4>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {categories.map(cat => (
                                    <li key={cat.name} style={{ marginBottom: '16px' }}>
                                        <button
                                            onClick={() => {
                                                setSearchParams(cat.slug ? { category: cat.slug } : {});
                                                setMobileFiltersOpen(false);
                                            }}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: categoryFilter === cat.slug ? '#fff' : '#9ca3af',
                                                fontSize: '1rem',
                                                textTransform: 'uppercase',
                                                fontFamily: 'var(--font-main)',
                                                fontWeight: categoryFilter === cat.slug ? '500' : '400',
                                                letterSpacing: '0.02em',
                                                cursor: 'pointer',
                                                padding: '8px 0 8px 12px',
                                                width: '100%',
                                                textAlign: 'left',
                                                borderLeft: categoryFilter === cat.slug ? '2px solid var(--color-accent)' : '2px solid transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
