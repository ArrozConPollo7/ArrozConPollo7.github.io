import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    marginBottom: '60px',
                    lineHeight: '0.9'
                }}>
                    BORN IN THE <br />
                    <span style={{ color: 'var(--color-accent)' }}>DIGITAL VOID</span>
                </h1>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '100px' }}>
                    <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#ccc' }}>
                        AKROSS is not just a brand; it's a movement. Born from the intersection of cyberpunk aesthetics and industrial utility, we craft gear for the modern urban explorer.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginBottom: '100px'
                }}>
                    <div style={{ background: '#111', padding: '40px' }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '20px', color: 'var(--color-accent-secondary)' }}>THE MISSION</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>
                            To equip the digital generation with apparel that transcends boundaries. We believe in clothing that adapts to your environment, whether you're navigating the concrete jungle or the metaverse.
                        </p>
                    </div>
                    <div style={{ background: '#111', padding: '40px' }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '20px', color: 'var(--color-accent-secondary)' }}>THE VISION</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>
                            A world where fashion meets function without compromise. We are constantly experimenting with new materials, cuts, and digital integrations to push the boundaries of streetwear.
                        </p>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '40px' }}>JOIN THE RESISTANCE</h2>
                    <p style={{ color: '#888', marginBottom: '40px' }}>Follow us on social media for the latest drops and exclusive content.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a href="#" className="btn">Instagram</a>
                        <a href="#" className="btn">Twitter</a>
                        <a href="#" className="btn">Discord</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
