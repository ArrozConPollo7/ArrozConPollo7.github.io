import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export const products = [
    {
        id: 1,
        name: 'Neon Oversized Tee',
        category: 'T-Shirts',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Cyberpunk Hoodie',
        category: 'Hoodies',
        price: 280000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Tech Cargo Pants',
        category: 'Bottoms',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1552160753-f13c536d56fc?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Reflective Jacket',
        category: 'Outerwear',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
    }
];

const ProductGrid = () => {
    return (
        <section className="container" style={{ padding: '80px 20px' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                marginBottom: '40px',
                borderBottom: '1px solid #222',
                paddingBottom: '20px'
            }}>
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)'
                }}>Latest Drops</h2>
                <a href="#" className="btn">View All</a>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px 20px'
            }}>
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
