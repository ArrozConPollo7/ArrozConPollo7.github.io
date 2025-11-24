import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { t } = useLanguage();

    // Helper to safely get price
    const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
    // Helper to safely get image
    const image = product.thumbnail?.url || '';
    // Helper to safely get category name
    const category = product.category?.name || '';

    const handleAddToCart = (e) => {
        e.preventDefault();
        // Default to first variant if available, or generic
        const size = product.variants?.[0]?.name || 'M';
        addToCart({ ...product, price, image }, size);
    };

    return (
        <div className="product-card" style={{
            position: 'relative',
            group: 'card'
        }}>
            <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                marginBottom: '15px',
                aspectRatio: '3/4'
            }}>
                <img
                    src={image}
                    alt={product.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    className="product-image"
                />

                {/* Hover Overlay */}
                <div className="product-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}>
                    <button
                        onClick={handleAddToCart}
                        style={{
                            background: 'var(--color-accent-secondary)',
                            color: 'black',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'var(--font-display)',
                            letterSpacing: '1px'
                        }}
                    >
                        <ShoppingBag size={18} /> {t.products.addToCart}
                    </button>
                </div>
            </div>

            <div>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    marginBottom: '5px',
                    color: 'var(--color-text)'
                }}>{product.name}</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{
                        color: '#888',
                        fontSize: '0.9rem'
                    }}>{category}</p>
                    <p style={{
                        fontFamily: 'var(--font-main)',
                        fontWeight: 'bold',
                        color: 'var(--color-accent)',
                        fontSize: '1.1rem'
                    }}>$ {price.toLocaleString('es-CO')}</p>
                </div>
            </div>

            <style>{`
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .product-card:hover .product-overlay {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
