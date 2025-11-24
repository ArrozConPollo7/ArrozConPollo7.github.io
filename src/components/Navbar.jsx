import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const { cartCount } = useCart();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
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
                {/* Language Toggle */}
                {!isMobile && <Search size={24} style={{ cursor: 'pointer' }} />}

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
