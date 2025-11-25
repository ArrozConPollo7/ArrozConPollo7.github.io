import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import FeaturedGrid from '../components/FeaturedGrid';

const Home = () => {
    return (
        <div>
            <Hero />
            <Marquee />
            <FeaturedGrid />
        </div>
    );
};

export default Home;
