import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)', overflow: 'hidden' }}>

            {/* Kinetic Header */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1, background: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

                <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 10vw, 8rem)',
                            lineHeight: '0.9',
                            textTransform: 'uppercase',
                            marginBottom: '40px'
                        }}
                    >
                        Nacido en el<br />
                        <span style={{ color: 'var(--color-accent-tertiary)', textShadow: '0 0 30px rgba(123, 44, 191, 0.5)' }}>Vacío Digital</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: '#aaa',
                            lineHeight: '1.6'
                        }}
                    >
                        No somos solo una marca de ropa. Somos una señal en el ruido.
                        Creando equipo para el explorador urbano moderno que navega la intersección entre realidades físicas y digitales.
                    </motion.p>
                </div>
            </section>

            {/* Manifesto / Timeline */}
            <section className="container" style={{ paddingBottom: '150px' }}>
                <div style={{
                    borderLeft: '1px solid #333',
                    paddingLeft: '40px',
                    marginLeft: '20px',
                    position: 'relative'
                }}>
                    <div className="timeline-item" style={{ marginBottom: '100px' }}>
                        <span style={{
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem'
                        }}>2024</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3rem',
                            textTransform: 'uppercase',
                            margin: '10px 0 20px'
                        }}>El Despertar</h2>
                        <p style={{ color: '#888', maxWidth: '600px', lineHeight: '1.6' }}>
                            Andromeda Street emerge de la escena underground. Un colectivo de diseñadores y artistas digitales unidos por una visión: redefinir el streetwear para el futuro.
                        </p>
                    </div>

                    <div className="timeline-item" style={{ marginBottom: '100px' }}>
                        <span style={{
                            color: 'var(--color-accent-secondary)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem'
                        }}>2025</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3rem',
                            textTransform: 'uppercase',
                            margin: '10px 0 20px'
                        }}>Expansión</h2>
                        <p style={{ color: '#888', maxWidth: '600px', lineHeight: '1.6' }}>
                            Lanzamiento de la colección "Nebula One". Envíos globales habilitados. La comunidad crece más allá de las fronteras, conectando nodos en todo el planeta.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <span style={{
                            color: 'var(--color-accent-tertiary)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem'
                        }}>FUTURO</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3rem',
                            textTransform: 'uppercase',
                            margin: '10px 0 20px'
                        }}>Ascensión</h2>
                        <p style={{ color: '#888', maxWidth: '600px', lineHeight: '1.6' }}>
                            Integración de wearables AR y activos digitales. La línea entre IRL y URL continúa difuminándose. Estamos listos. ¿Y tú?
                        </p>
                    </div>
                </div>
            </section>

            {/* Community CTA */}
            <section style={{
                background: '#111',
                padding: '100px 20px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        textTransform: 'uppercase',
                        marginBottom: '40px'
                    }}>Únete a la Resistencia</h2>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {['Instagram', 'Discord', 'Twitter'].map(social => (
                            <a key={social} href="#" className="btn" style={{
                                minWidth: '150px',
                                background: 'transparent',
                                border: '1px solid #333'
                            }}>
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
