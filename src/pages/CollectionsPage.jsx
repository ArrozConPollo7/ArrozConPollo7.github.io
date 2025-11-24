import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LookbookItem = ({ image, title, description, align, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        style={{
            display: 'flex',
            flexDirection: align === 'left' ? 'row' : 'row-reverse',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '150px',
            flexWrap: 'wrap'
        }}
    >
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{
                position: 'relative',
                overflow: 'hidden',
                height: '600px',
                borderRadius: '2px'
            }}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(20%) contrast(1.1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.2)'
                }}></div>
            </div>
            {/* Decorative Element */}
            <div style={{
                position: 'absolute',
                bottom: '-20px',
                [align === 'left' ? 'right' : 'left']: '-20px',
                width: '150px',
                height: '150px',
                border: '1px solid var(--color-accent)',
                zIndex: -1
            }}></div>
        </div>

        <div style={{ flex: '1 1 300px', textAlign: align === 'left' ? 'left' : 'right' }}>
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                lineHeight: '0.9',
                marginBottom: '30px',
                textTransform: 'uppercase'
            }}>
                {title.split(' ').map((word, i) => (
                    <span key={i} style={{ display: 'block', color: i === 1 ? 'var(--color-accent)' : 'white' }}>{word}</span>
                ))}
            </h2>
            <p style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.1rem',
                color: '#aaa',
                marginBottom: '40px',
                lineHeight: '1.6',
                maxWidth: '400px',
                marginLeft: align === 'left' ? '0' : 'auto'
            }}>
                {description}
            </p>
            <Link to="/shop" className="btn" style={{
                display: 'inline-block',
                border: '1px solid white',
                padding: '15px 40px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.9rem'
            }}>
                Comprar el Look
            </Link>
        </div>
    </motion.div>
);

const CollectionsPage = () => {
    const { t } = useLanguage();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
            {/* Hero Banner */}
            <section style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '100px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("https://images.unsplash.com/photo-1617385986682-132d2b553372?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat',
                    filter: 'brightness(0.4)'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(4rem, 10vw, 12rem)',
                            lineHeight: '0.8',
                            textTransform: 'uppercase',
                            color: 'white',
                            textShadow: '0 0 50px rgba(123, 44, 191, 0.5)'
                        }}
                    >
                        NEBULA<br />ONE
                    </motion.h1>
                    <p style={{
                        marginTop: '20px',
                        fontSize: '1.2rem',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent-secondary)'
                    }}>Otoño / Invierno 2025</p>
                </div>
            </section>

            {/* Lookbook Content */}
            <div className="container" style={{ paddingBottom: '100px' }}>
                <LookbookItem
                    image="/lookbook_model_1.png"
                    title="Sombra Urbana"
                    description="La ciudad es tuya. Tómala."
                    align="left"
                    delay={0.2}
                />

                <LookbookItem
                    image="/lookbook_model_2.png"
                    title="Metal Pesado"
                    description="Resistencia y estilo en cada costura."
                    align="right"
                    delay={0.2}
                />

                <LookbookItem
                    image="https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop"
                    title="Caos Organizado"
                    description="Diseño funcional para el desorden moderno."
                    align="left"
                    delay={0.2}
                />
            </div>
        </div>
    );
};

export default CollectionsPage;
