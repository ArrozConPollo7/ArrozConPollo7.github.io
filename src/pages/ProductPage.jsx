import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/ProductGrid';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const { t } = useLanguage();

    const [selectedSize, setSelectedSize] = useState(null);
    const [added, setAdded] = useState(false);

    if (!product) return <div style={{ padding: '100px', textAlign: 'center' }}>Product not found</div>;

    const handleAddToCart = () => {
        if (!selectedSize) return alert('Please select a size');
        addToCart(product, selectedSize);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: window.innerWidth <= 768 ? '30px' : '60px',
                alignItems: 'center'
            }}>
                {/* Image Side */}
                <div style={{ position: 'relative' }}>
                    <img
                        src={product.image}
                        alt={t.productNames[product.id]}
                        style={{ width: '100%', borderRadius: '4px', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'var(--color-accent)',
                        color: 'white',
                        padding: '5px 15px',
                        fontFamily: 'var(--font-display)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        {t.products.newArrival}
                    </div>
                </div>

                {/* Details Side */}
                <div>
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        textTransform: 'uppercase',
                        lineHeight: '1',
                        marginBottom: '20px'
                    }}>{t.productNames[product.id]}</h1>

                    <p style={{
                        color: 'var(--color-accent)',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                        fontFamily: 'var(--font-main)'
                    }}>$ {product.price.toLocaleString('es-CO')}</p>

                    <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '40px' }}>
                        Premium quality streetwear designed for the modern urban explorer.
                        Features high-grade materials and a relaxed fit for maximum comfort and style.
                        Limited edition drop.
                    </p>

                    {/* Size Selector */}
                    <div style={{ marginBottom: '40px' }}>
                        <p style={{ marginBottom: '15px', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>{t.products.selectSize}</p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: `1px solid ${selectedSize === size ? 'var(--color-accent-secondary)' : '#333'}`,
                                        background: selectedSize === size ? 'var(--color-accent-secondary)' : 'transparent',
                                        color: selectedSize === size ? 'black' : 'white',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.1rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {size}
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
                            background: added ? '#22c55e' : 'var(--color-accent-secondary)',
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
                        {added ? (
                            <>
                                <Check size={24} /> {t.products.added}
                            </>
                        ) : (
                            t.products.addToCart
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
