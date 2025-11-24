import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}>
            {/* Logo */}
            <Link to="/" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                color: 'var(--color-text)',
                textShadow: '0 0 10px var(--color-accent-glow)',
                textDecoration: 'none'
            }}>
                AKROSS
            </Link>

            {/* Desktop Links */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '40px' }}>
                {['HOME', 'SHOP', 'COLLECTIONS', 'ABOUT'].map((item) => (
                    <a key={item} href="#" style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        opacity: 0.8,
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.color = 'var(--color-accent)';
                            e.target.style.textShadow = '0 0 8px var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = '0.8';
                            e.target.style.color = 'var(--color-text)';
                            e.target.style.textShadow = 'none';
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Icons */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Search size={24} style={{ cursor: 'pointer' }} />
                <Link to="/cart" style={{ position: 'relative', cursor: 'pointer', color: 'inherit' }}>
                    <ShoppingBag size={24} />
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            backgroundColor: 'var(--color-accent-secondary)',
                            color: 'black',
                            fontSize: '0.7rem',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>{cartCount}</span>
                    )}
                </Link>
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100vh - 80px)',
                    backgroundColor: 'rgba(5, 5, 5, 0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '30px',
                    zIndex: 999
                }}>
                    {['HOME', 'SHOP', 'COLLECTIONS', 'ABOUT'].map((item) => (
                        <a key={item} href="#" style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2rem',
                            color: 'var(--color-text)'
                        }}>{item}</a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
