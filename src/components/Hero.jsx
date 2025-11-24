import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat'
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

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: '1.2rem',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        color: 'var(--color-accent)'
                    }}
                >
                    {t.hero.subtitle}
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        lineHeight: '0.9',
                        textTransform: 'uppercase',
                        marginBottom: '40px',
                        textShadow: '0 0 20px rgba(0,0,0,0.5)'
                    }}
                >
                    {t.hero.title}<br />
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px var(--color-text)',
                        position: 'relative'
                    }}>
                        {t.hero.title2}
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
                                filter: 'blur(5px)',
                                opacity: 0.5,
                                zIndex: -1
                            }}
                        >
                            {t.hero.title2}
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="/shop" className="btn">
                        {t.hero.cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
