import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedItem = ({ size, image, title, subtitle, link, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            style={{
                gridColumn: size === 'large' ? 'span 2' : 'span 1',
                gridRow: size === 'large' ? 'span 2' : 'span 1',
                position: 'relative',
                overflow: 'hidden',
                height: size === 'large' ? '600px' : '280px',
                borderRadius: '4px',
                group: 'featured'
            }}
            className="featured-item"
        >
            <Link to={link} style={{ display: 'block', width: '100%', height: '100%' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `url(${image}) center/cover no-repeat`,
                    transition: 'transform 0.5s ease'
                }} className="featured-bg"></div>

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '30px'
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: size === 'large' ? '3rem' : '1.5rem',
                        textTransform: 'uppercase',
                        color: 'white',
                        marginBottom: '5px',
                        textShadow: '0 0 20px rgba(0,0,0,0.5)'
                    }}>{title}</h3>
                    <p style={{
                        fontFamily: 'var(--font-main)',
                        color: 'var(--color-accent-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem'
                    }}>{subtitle}</p>
                </div>
            </Link>
            <style>{`
                .featured-item:hover .featured-bg {
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    .featured-item {
                        grid-column: span 1 !important;
                        height: 300px !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const FeaturedGrid = () => {
    return (
        <section className="container" style={{ padding: '40px 20px 80px' }}>
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                textTransform: 'uppercase',
                marginBottom: '30px',
                color: 'var(--color-text)',
                letterSpacing: '2px'
            }}>Explore The Void</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                gridAutoFlow: 'dense'
            }}>
                <FeaturedItem
                    size="large"
                    image="https://images.unsplash.com/photo-1551488852-d814c937d191?q=80&w=1000&auto=format&fit=crop"
                    title="Nebula One"
                    subtitle="New Collection"
                    link="/collections"
                    delay={0}
                />
                <FeaturedItem
                    size="small"
                    image="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop"
                    title="Tees"
                    subtitle="Graphic Series"
                    link="/shop?category=tees"
                    delay={0.2}
                />
                <FeaturedItem
                    size="small"
                    image="https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop"
                    title="Bottoms"
                    subtitle="Tech & Cargo"
                    link="/shop?category=bottoms"
                    delay={0.3}
                />
            </div>
        </section>
    );
};

export default FeaturedGrid;
