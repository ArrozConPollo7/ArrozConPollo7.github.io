import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import SizeSelector from './SizeSelector';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { t } = useLanguage();
    const [hovered, setHovered] = useState(false);
    const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);

    // Helper to safely get price
    const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
    // Helper to safely get image
    const image = product.thumbnail?.url || '';
    // Helper to safely get category name
    const category = product.category?.name || '';

    const handleAddToCartClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSizeSelectorOpen(true);
    };

    const handleSizeSelect = (size) => {
        addToCart({ ...product, price, image }, size);
    };

    return (
        <>
            <div
                className="product-card"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Link to={`/product/${product.id}`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    textDecoration: 'none',
                    color: 'inherit'
                }}>
                    {/* Image Container */}
                    <div style={{
                        position: 'relative',
                        aspectRatio: '3/4',
                        overflow: 'hidden',
                        backgroundColor: '#111',
                        marginBottom: '20px'
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
                                filter: hovered ? 'grayscale(0%)' : 'grayscale(100%) contrast(1.2)'
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

                        {/* Add to Cart Button - Positioned over image */}
                        <button
                            onClick={handleAddToCartClick}
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                right: '20px',
                                padding: '15px',
                                background: 'var(--color-accent)',
                                border: 'none',
                                color: 'white',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: hovered ? 1 : 0,
                                transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                                fontWeight: '600',
                                pointerEvents: hovered ? 'auto' : 'none'
                            }}
                        >
                            {t.products.addToCart}
                        </button>
                    </div>

                    {/* Product Info */}
                    <div style={{ marginTop: 'auto' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.6rem',
                            marginBottom: '5px',
                            color: 'white',
                            letterSpacing: '1px'
                        }}>{product.name}</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ color: '#666', fontSize: '0.9rem', textTransform: 'uppercase' }}>{category}</p>
                            <p style={{
                                color: 'var(--color-accent)',
                                fontWeight: '600',
                                fontFamily: 'var(--font-main)'
                            }}>
                                ${price.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            <SizeSelector
                isOpen={isSizeSelectorOpen}
                onClose={() => setIsSizeSelectorOpen(false)}
                product={product}
                onSelectSize={handleSizeSelect}
            />
        </>
    );
};

export default ProductCard;
