import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#050505',
            borderTop: '1px solid #222',
            padding: '80px 20px 40px',
            color: 'var(--color-text)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '60px'
            }}>
                {/* Brand */}
                <div>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        marginBottom: '20px'
                    }}>AKROSS</h2>
                    <p style={{ color: '#888', lineHeight: '1.6' }}>
                        Redefining streetwear culture with futuristic designs and premium quality.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 style={{ marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Shop</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#888' }}>
                        <li><a href="#" className="hover-link">New Arrivals</a></li>
                        <li><a href="#" className="hover-link">Best Sellers</a></li>
                        <li><a href="#" className="hover-link">Accessories</a></li>
                        <li><a href="#" className="hover-link">Sale</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 style={{ marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Stay in the Loop</h3>
                    <div style={{ display: 'flex', borderBottom: '1px solid #444', paddingBottom: '10px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                flex: 1,
                                outline: 'none'
                            }}
                        />
                        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-accent)' }}>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '80px',
                paddingTop: '40px',
                borderTop: '1px solid #111',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2025 AKROSS. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '20px', color: '#888' }}>
                    <Instagram size={20} style={{ cursor: 'pointer' }} />
                    <Twitter size={20} style={{ cursor: 'pointer' }} />
                    <Facebook size={20} style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <style>{`
        .hover-link:hover {
          color: var(--color-accent);
          padding-left: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
