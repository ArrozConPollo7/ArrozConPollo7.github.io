import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedGrid = () => {
    const items = [
        {
            id: 1,
            title: "Nebula One",
            subtitle: "New Collection",
            image: "https://images.unsplash.com/photo-1551488852-d814c937d191?q=80&w=1000&auto=format&fit=crop",
            link: "/collections"
        },
        {
            id: 2,
            title: "Tees",
            subtitle: "Graphic Series",
            image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop",
            link: "/shop?category=tees"
        },
        {
            id: 3,
            title: "Bottoms",
            subtitle: "Tech & Cargo",
            image: "https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop",
            link: "/shop?category=bottoms"
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
                    borderBottom: '1px solid #222',
                    paddingBottom: '20px'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        margin: 0,
                        lineHeight: 1
                    }}>
                        LATEST<br />DROPS
                    </h2>
                    <Link to="/shop" className="btn">Ver Todo</Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2px', // Tight grid
                    background: '#222' // Border color effect
                }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                height: '600px',
                                background: 'black',
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
                                        filter: 'grayscale(100%)',
                                        transition: 'all 0.5s ease'
                                    }}
                                    onMouseOver={e => {
                                        e.target.style.filter = 'grayscale(0%)';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={e => {
                                        e.target.style.filter = 'grayscale(100%)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '30px',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        color: 'white',
                                        margin: 0,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                    }}>{item.title}</h3>
                                    <p style={{ color: 'var(--color-accent)', margin: 0 }}>{item.subtitle}</p>
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
