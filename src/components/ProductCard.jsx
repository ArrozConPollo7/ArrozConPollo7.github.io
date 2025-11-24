import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ product }) => {
    const { t } = useLanguage();

    return (
        <div className="product-card" style={{
            position: 'relative',
            cursor: 'pointer',
            group: 'card'
        }}>
            {/* Image Container */}
            <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '125%', // 4:5 Aspect Ratio
                overflow: 'hidden',
                marginBottom: '15px',
                backgroundColor: '#111'
            }}>
                <img
                    src={product.image}
                    alt={t.productNames[product.id]}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* Quick Add Button */}
                <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    backgroundColor: 'var(--color-accent)',
                    padding: '10px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px var(--color-accent-glow)'
                }}
                    className="quick-add"
                >
                    <ShoppingBag size={20} color="white" />
                </div>
            </div>

            {/* Info */}
            <div style={{ textAlign: 'left' }}>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    marginBottom: '5px',
                    color: 'var(--color-text)'
                }}>{t.productNames[product.id]}</h3>
                <p style={{
                    fontFamily: 'var(--font-main)',
                    color: 'var(--color-light-gray)',
                    fontSize: '0.9rem',
                    marginBottom: '8px'
                }}>{t.categories[product.category]}</p>
                <p style={{
                    fontFamily: 'var(--font-main)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)',
                    fontSize: '1.1rem'
                }}>$ {product.price.toLocaleString('es-CO')}</p>
            </div>

            <style>{`
        .product-card:hover .quick-add {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
