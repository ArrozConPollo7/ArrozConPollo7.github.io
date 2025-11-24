import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';

// Home Component to keep App clean
const Home = () => (
  <>
    <Hero />
    <Marquee text="NEW COLLECTION DROP — LIMITED EDITION — WORLDWIDE SHIPPING — " />
    <ProductGrid />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
