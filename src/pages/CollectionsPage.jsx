import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const collections = [
    {
        id: 'neon-nights',
        title: 'NEON NIGHTS',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop',
        description: 'Vibrant colors for the dark city.'
    },
    {
        id: 'cyber-core',
        title: 'CYBER CORE',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
        description: 'Tech-wear essentials for the digital age.'
    },
    {
        id: 'industrial',
        title: 'INDUSTRIAL',
        image: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop',
        description: 'Rugged functionality meets street style.'
    }
];

const CollectionsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                marginBottom: '60px',
                textTransform: 'uppercase',
                textAlign: 'center'
            }}>{t.nav.collections}</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                {collections.map((collection, index) => (
                    <div key={collection.id} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        direction: index % 2 === 1 ? 'rtl' : 'ltr' // Alternating layout
                    }}>
                        <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                            <img
                                src={collection.image}
                                alt={collection.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.2)' }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.3)'
                            }}></div>
                        </div>

                        <div style={{ textAlign: index % 2 === 1 ? 'right' : 'left', direction: 'ltr' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '3rem',
                                marginBottom: '20px',
                                color: 'var(--color-accent)'
                            }}>{collection.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px' }}>{collection.description}</p>
                            <Link to="/shop" className="btn">Explore Collection</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionsPage;
