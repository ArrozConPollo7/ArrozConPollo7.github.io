import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const { addToCart } = useCart();
    const { t } = useLanguage();

    const [selectedSize, setSelectedSize] = useState(null);
    const [added, setAdded] = useState(false);

    if (!product) return <div style={{ padding: '100px', textAlign: 'center' }}>Product not found</div>;

    const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
    const images = product.media || [{ url: product.thumbnail.url }];

    const handleAddToCart = () => {
        if (!selectedSize) return alert('Please select a size');
        addToCart({ ...product, price, image: product.thumbnail.url }, selectedSize);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
            <div className="container product-container" style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: '60px',
                alignItems: 'start'
            }}>
                {/* Vertical Gallery */}
                <div className="gallery-grid" style={{ display: 'grid', gap: '20px' }}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.url}
                            alt={`${product.name} view ${index + 1}`}
                            style={{ width: '100%', borderRadius: '4px' }}
                        />
                    ))}
                </div>

                {/* Sticky Details */}
                <div style={{ position: 'sticky', top: '120px' }}>
                    <div style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        display: 'inline-block',
                        padding: '5px 10px',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        fontFamily: 'var(--font-display)'
                    }}>
                        {product.category.name}
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        textTransform: 'uppercase',
                        lineHeight: '0.9',
                        marginBottom: '20px'
                    }}>{product.name}</h1>

                    <p style={{
                        color: 'var(--color-accent)',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        fontFamily: 'var(--font-main)'
                    }}>$ {price.toLocaleString('es-CO')}</p>

                    <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '40px' }}>
                        {product.description}
                    </p>

                    {/* Size Selector */}
                    <div style={{ marginBottom: '40px' }}>
                        <p style={{ marginBottom: '15px', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Select Size</p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {product.variants.map(variant => (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedSize(variant.name)}
                                    style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        padding: '0 15px',
                                        border: `1px solid ${selectedSize === variant.name ? 'var(--color-accent-secondary)' : '#333'}`,
                                        background: selectedSize === variant.name ? 'var(--color-accent-secondary)' : 'transparent',
                                        color: selectedSize === variant.name ? 'black' : 'white',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {variant.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        style={{
                            width: '100%',
                            padding: '20px',
                            background: added ? '#22c55e' : 'white',
                            color: 'black',
                            border: 'none',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        {added ? <><Check size={24} /> ADDED</> : 'ADD TO CART'}
                    </button>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .product-container { grid-template-columns: 1fr !important; gap: 30px !important; }
                    .gallery-grid { display: flex !important; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 20px; }
                    .gallery-grid img { width: 85vw !important; scroll-snap-align: center; flex-shrink: 0; }
                }
            `}</style>
        </div>
    );
};

export default ProductPage;
