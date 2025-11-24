import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { t } = useLanguage();
    const [hovered, setHovered] = useState(false);

    // Helper to safely get price
    const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
    // Helper to safely get image
    const image = product.thumbnail?.url || '';
    // Helper to safely get category name
    const category = product.category?.name || '';

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Default to first variant if available, or generic
        const size = product.variants?.[0]?.name || 'M';
        addToCart({ ...product, price, image }, size);
    };

    return (
        <div
            style={{ position: 'relative', group: 'card' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={`/product/${product.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                <div style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    backgroundColor: '#111'
                }}>
                    <img
                        src={image}
                        alt={product.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s ease',
                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                            filter: hovered ? 'grayscale(0%)' : 'grayscale(30%) contrast(1.1)'
                        }}
                    />

                    {/* Hover Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.2)',
                        opacity: hovered ? 0 : 1,
                        transition: 'opacity 0.3s ease'
                    }}></div>
                </div>

                <div style={{ padding: '20px 0' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.4rem',
                        marginBottom: '5px',
                        color: 'white',
                        letterSpacing: '1px'
                    }}>{product.name}</h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{category}</p>
                        <p style={{
                            color: 'white',
                            fontWeight: '600',
                            fontFamily: 'var(--font-main)'
                        }}>
                            ${price.toLocaleString()}
                        </p>
                    </div>
                </div>
            </Link>

            <button
                onClick={handleAddToCart}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: 'transparent',
                    border: '1px solid #333',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                    position: 'absolute',
                    bottom: '90px',
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {t.products.addToCart}
            </button>
        </div>
    );
};

export default ProductCard;
