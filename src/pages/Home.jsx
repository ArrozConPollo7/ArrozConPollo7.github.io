import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import FeaturedGrid from '../components/FeaturedGrid';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
    return (
        <div>
            <Hero />
            <Marquee />
            <FeaturedGrid />
            <ProductGrid />
        </div>
    );
};

export default Home;
