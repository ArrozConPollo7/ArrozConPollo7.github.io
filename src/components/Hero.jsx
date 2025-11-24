import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section style={{
            height: '100vh',
            minHeight: '600px',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat'
        }}>
            {/* Overlay Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, #050505 100%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
                        letterSpacing: 'clamp(2px, 1vw, 5px)',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        color: 'var(--color-accent-secondary)'
                    }}
                >
                    FUTURE IS NOW
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 12vw, 8rem)',
                        lineHeight: '0.9',
                        textTransform: 'uppercase',
                        marginBottom: 'clamp(20px, 5vw, 40px)',
                        textShadow: '0 0 40px rgba(0, 68, 255, 0.4)'
                    }}
                >
                    ANDROMEDA<br />
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: 'clamp(1px, 0.3vw, 2px) var(--color-text)',
                        position: 'relative'
                    }}>
                        STREET
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                color: 'var(--color-accent)',
                                WebkitTextStroke: '0px',
                                filter: 'blur(8px)',
                                opacity: 0.6,
                                zIndex: -1
                            }}
                        >
                            STREET
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="/shop" className="btn" style={{
                        borderColor: 'var(--color-accent)',
                        background: 'rgba(0, 68, 255, 0.1)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        SHOP DROP
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
