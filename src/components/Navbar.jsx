import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount } = useCart();
    const { language, toggleLanguage, t } = useLanguage();

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle ESC key to close search modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && searchOpen) {
                setSearchOpen(false);
                setSearchQuery('');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [searchOpen]);

    // Filter products based on search query
    const filteredProducts = searchQuery.trim()
        ? products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const handleProductClick = (productId) => {
        setSearchOpen(false);
        setSearchQuery('');
        navigate(`/product/${productId}`);
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <nav style={{
            position: 'fixed',
            top: isMobile ? '10px' : '20px',
            left: 0,
            width: '100%',
            padding: isMobile ? '15px 20px' : '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}>
            {/* Logo */}
            <Link to="/" style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: '700',
                letterSpacing: '1px',
                color: 'var(--color-text)',
                textDecoration: 'none',
                textShadow: '0 0 30px rgba(0,0,0,0.8)'
            }}>
                ANDROMEDA
            </Link>

            {/* Desktop Links */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Link to="/" className="nav-link">{t.nav.home}</Link>

                {/* Shop Dropdown */}
                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setShopDropdownOpen(true)}
                    onMouseLeave={() => setShopDropdownOpen(false)}
                >
                    <Link to="/shop" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {t.nav.shop} <ChevronDown size={16} />
                    </Link>

                    <AnimatePresence>
                        {shopDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '-50%',
                                    transform: 'translateX(-25%)',
                                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '25px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px',
                                    minWidth: '240px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    borderRadius: '12px',
                                    marginTop: '15px'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    width: '12px',
                                    height: '12px',
                                    background: 'rgba(10, 10, 10, 0.95)',
                                    transform: 'rotate(45deg) translateX(-50%)',
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                }}></div>

                                <Link to="/shop?category=tees" className="dropdown-link">T-Shirts</Link>
                                <Link to="/shop?category=hoodies" className="dropdown-link">Hoodies</Link>
                                <Link to="/shop?category=bottoms" className="dropdown-link">Pants</Link>
                                <Link to="/shop?category=outerwear" className="dropdown-link">Jackets</Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link to="/collections" className="nav-link">{t.nav.collections}</Link>
                <Link to="/about" className="nav-link">{t.nav.about}</Link>
            </div>

            {/* Icons */}
            <div style={{ display: 'flex', gap: isMobile ? '15px' : '20px', alignItems: 'center' }}>
                {/* Search Icon */}
                {!isMobile && <Search size={24} style={{ cursor: 'pointer' }} onClick={() => setSearchOpen(true)} />}

                <Link to="/cart" style={{ position: 'relative', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    <ShoppingBag size={24} />
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--color-accent-secondary)',
                            color: 'black',
                            fontSize: '0.75rem',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            boxShadow: '0 0 10px var(--color-accent-secondary)'
                        }}>{cartCount}</span>
                    )}
                </Link>

                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Search Modal */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            zIndex: 2000,
                            padding: '100px 20px 20px',
                            overflowY: 'auto'
                        }}
                        onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery('');
                        }}
                    >
                        <div
                            style={{ maxWidth: '800px', width: '100%' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Search Input */}
                            <div style={{
                                position: 'relative',
                                marginBottom: '40px'
                            }}>
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    style={{
                                        width: '100%',
                                        padding: '20px 60px 20px 20px',
                                        fontSize: '1.2rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        color: 'white',
                                        outline: 'none',
                                        fontFamily: 'var(--font-main)'
                                    }}
                                />
                                <Search
                                    size={24}
                                    style={{
                                        position: 'absolute',
                                        right: '20px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#888'
                                    }}
                                />
                            </div>

                            {/* Search Results */}
                            {searchQuery.trim() && (
                                <div>
                                    <p style={{
                                        color: '#888',
                                        marginBottom: '20px',
                                        fontSize: '0.9rem'
                                    }}>
                                        {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
                                    </p>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                        gap: '20px'
                                    }}>
                                        {filteredProducts.map((product) => (
                                            <motion.div
                                                key={product.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.03)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                whileHover={{
                                                    scale: 1.02,
                                                    borderColor: 'rgba(123, 44, 191, 0.5)'
                                                }}
                                                onClick={() => handleProductClick(product.id)}
                                            >
                                                <img
                                                    src={product.thumbnail.url}
                                                    alt={product.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '200px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div style={{ padding: '15px' }}>
                                                    <h3 style={{
                                                        fontSize: '1rem',
                                                        marginBottom: '8px',
                                                        color: 'white',
                                                        fontFamily: 'var(--font-main)'
                                                    }}>
                                                        {product.name}
                                                    </h3>
                                                    <p style={{
                                                        fontSize: '0.85rem',
                                                        color: '#888',
                                                        marginBottom: '8px'
                                                    }}>
                                                        {product.category.name}
                                                    </p>
                                                    <p style={{
                                                        fontSize: '1.1rem',
                                                        color: 'var(--color-accent)',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        ${product.pricing.priceRange.start.gross.amount.toLocaleString()} {product.pricing.priceRange.start.gross.currency}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {filteredProducts.length === 0 && (
                                        <div style={{
                                            textAlign: 'center',
                                            padding: '60px 20px',
                                            color: '#666'
                                        }}>
                                            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>No se encontraron productos</p>
                                            <p style={{ fontSize: '0.9rem' }}>Intenta con otro término de búsqueda</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {!searchQuery.trim() && (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '60px 20px',
                                    color: '#666'
                                }}>
                                    <Search size={48} style={{ marginBottom: '20px', opacity: 0.3 }} />
                                    <p style={{ fontSize: '1.1rem' }}>Escribe para buscar productos</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'rgba(5, 5, 5, 0.98)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '40px',
                            zIndex: 999
                        }}
                    >
                        <div style={{ position: 'absolute', top: '30px', right: '30px' }} onClick={() => setMenuOpen(false)}>
                            <X size={32} />
                        </div>

                        <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-link">{t.nav.home}</Link>
                        <Link to="/shop" onClick={() => setMenuOpen(false)} className="mobile-link">{t.nav.shop}</Link>
                        <Link to="/collections" onClick={() => setMenuOpen(false)} className="mobile-link">{t.nav.collections}</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)} className="mobile-link">{t.nav.about}</Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .nav-link {
          font-family: var(--font-main);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          opacity: 0.8;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--color-accent);
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--color-accent);
          text-shadow: 0 0 8px var(--color-accent);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .dropdown-link {
          color: #aaa;
          text-decoration: none;
          transition: all 0.2s;
          font-family: var(--font-main);
          padding: 8px 12px;
          borderRadius: 8px;
          display: block;
        }
        .dropdown-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }
        .mobile-link {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--color-text);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .lang-btn:hover {
          background: rgba(255,255,255,0.2) !important;
          border-color: white !important;
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { 
            display: flex !important;
            align-items: center;
          }
          .mobile-link {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
