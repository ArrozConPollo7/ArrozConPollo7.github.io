import React from 'react';
import { Link } from 'react-router-dom';
import { X, Search, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    return (
        <div class={`categories-sidebar ${isOpen ? 'active' : ''}`}>
            <div class="sidebar-header">
                <h3>{t('nav_categories')}</h3>
                <button class="close-sidebar" onClick={onClose}>
                    <X size={24} />
                </button>
            </div>

            <div class="sidebar-search">
                <input type="text" placeholder={t('search_placeholder')} />
                <Search size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#a0a0a0' }} />
            </div>

            <div class="sidebar-content">
                <h4>{t('collection_title')}</h4>
                <ul class="category-list">
                    <li><Link to="/category/all" onClick={onClose}>{t('cat_all')} <ChevronRight size={16} /></Link></li>
                    <li><Link to="/category/shirts" onClick={onClose}>{t('cat_shirts')} <ChevronRight size={16} /></Link></li>
                    <li><Link to="/category/hoodies" onClick={onClose}>{t('cat_hoodies')} <ChevronRight size={16} /></Link></li>
                    <li><Link to="/category/pants" onClick={onClose}>{t('cat_pants')} <ChevronRight size={16} /></Link></li>
                    <li><Link to="/category/accessories" onClick={onClose}>{t('cat_accessories')} <ChevronRight size={16} /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
