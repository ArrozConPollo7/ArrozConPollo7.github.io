import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedGrid = () => {
    const items = [
        {
            id: 1,
            title: "Nebula One",
            subtitle: "New Collection",
            image: "/nebula_collection_hero.png",
            link: "/collections"
        },
        {
            id: 2,
            title: "Hoodies",
            subtitle: "Gothic Series",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
            link: "/shop?category=hoodies"
        },
        {
            id: 3,
            title: "Tees",
            subtitle: "Graphic Series",
            image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop",
            link: "/shop?category=tees"
        }
    ];

    return (
        <section style={{ padding: '100px 0', background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '60px',
                    borderBottom: '1px solid #333',
                    paddingBottom: '20px'
                }}>
                    <h2 className="metal-title" style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        margin: 0,
                        lineHeight: 1
                    }}>
                        LATEST<br />DROPS
                    </h2>
                    <Link to="/shop" className="btn">Ver Todo</Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '20px',
                }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                height: '600px',
                                background: '#111',
                                overflow: 'hidden'
                            }}
                            className="featured-item"
                        >
                            <Link to={item.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) contrast(1.2)',
                                        transition: 'all 0.5s ease'
                                    }}
                                    onMouseOver={e => {
                                        e.target.style.filter = 'grayscale(0%) contrast(1.1)';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={e => {
                                        e.target.style.filter = 'grayscale(100%) contrast(1.2)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '30px',
                                    background: 'linear-gradient(to top, #000, transparent)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '2.5rem',
                                        color: 'white',
                                        margin: 0,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                    }}>{item.title}</h3>
                                    <p style={{ color: 'var(--color-accent)', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>{item.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGrid;
