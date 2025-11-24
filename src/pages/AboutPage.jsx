import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)', overflow: 'hidden' }}>

            {/* Kinetic Header */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(4rem, 12vw, 10rem)',
                            lineHeight: '0.9',
                            textTransform: 'uppercase',
                            marginBottom: '40px',
                            color: 'white'
                        }}
                    >
                        Nacido en el<br />
                        <span className="text-accent" style={{ textShadow: '0 0 30px rgba(90, 14, 27, 0.5)' }}>Vacío Digital</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: '#888',
                            lineHeight: '1.6',
                            fontFamily: 'var(--font-main)'
                        }}
                    >
                        Andromeda Streetwear es una marca urbana de estética oscura, influenciada por el metal, lo gótico y la moda editorial. Ropa con carácter para quienes tienen identidad propia.
                    </motion.p>
                </div>
            </section>

            {/* Manifesto / Timeline */}
            <section className="container" style={{ paddingBottom: '150px' }}>
                <div style={{
                    borderLeft: '2px solid #333',
                    paddingLeft: '40px',
                    marginLeft: '20px',
                    position: 'relative'
                }}>
                    <div className="timeline-item" style={{ marginBottom: '100px' }}>
                        <span style={{
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-main)',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            letterSpacing: '2px'
                        }}>ORIGEN</span>
                        <h2 style={{
                            fontSize: '3rem',
                            textTransform: 'uppercase',
                            margin: '10px 0 20px'
                        }}>El Despertar</h2>
                        <p style={{ color: '#666', maxWidth: '600px', lineHeight: '1.6' }}>
                            Surgimos de la oscuridad. Sin reglas, sin compromisos. Solo estética pura y cruda.
                        </p>
                    </div>

                    <div className="timeline-item" style={{ marginBottom: '100px' }}>
                        <span style={{
                            color: 'var(--color-text)',
                            fontFamily: 'var(--font-main)',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            letterSpacing: '2px'
                        }}>AHORA</span>
                        <h2 style={{
                            fontSize: '3rem',
                            textTransform: 'uppercase',
                            margin: '10px 0 20px'
                        }}>Expansión</h2>
                        <p style={{ color: '#666', maxWidth: '600px', lineHeight: '1.6' }}>
                            Dominando el asfalto. Nuestra comunidad crece, una legión de sombras en la ciudad.
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
