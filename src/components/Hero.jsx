import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
            background: '#000'
        }}>
            {/* Background Image - Dark Urban Placeholder */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.6,
                background: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                filter: 'grayscale(100%) contrast(1.2)'
            }}></div>

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, #000 90%)'
            }}></div>

            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        marginBottom: '30px',
                        color: 'var(--color-accent)',
                        fontWeight: '600'
                    }}
                >
                    Est. 2024
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(5rem, 18vw, 12rem)',
                        lineHeight: '0.8',
                        color: 'white',
                        marginBottom: '40px',
                        textShadow: '0 0 50px rgba(0,0,0,0.8)'
                    }}
                >
                    ANDROMEDA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        maxWidth: '600px',
                        margin: '0 auto 50px',
                        color: '#ccc',
                        fontWeight: '300',
                        letterSpacing: '1px'
                    }}
                >
                    Streetwear oscuro con carácter. Forjado en el vacío.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link to="/shop" className="btn btn-accent">
                        NEW DROP
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
