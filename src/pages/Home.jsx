import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "Oversized Graphic Tee",
        price: "$120.000",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Cargo Pants Black",
        price: "$180.000",
        category: "pants",
        image: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Hoodie Essentials",
        price: "$210.000",
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Streetwear Cap",
        price: "$85.000",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop"
    }
];

const Home = () => {
    const { t } = useLanguage();

    return (
        <main>
            <Hero />
            <Marquee />

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">{t('section_new')}</h2>
                        <a href="#" class="link-arrow">{t('link_view_all')} <ChevronRight size={16} /></a>
                    </div>

                    <div class="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
