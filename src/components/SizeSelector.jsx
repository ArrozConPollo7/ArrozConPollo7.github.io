import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SizeSelector.css';

const SizeSelector = ({ isOpen, onClose, product, onSelectSize }) => {
    const sizes = product?.variants?.map(v => v.name) || ['S', 'M', 'L', 'XL'];

    const handleSizeClick = (size) => {
        onSelectSize(size);
        onClose();
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="size-selector-overlay"
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="size-selector-modal"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="size-selector-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <h2 className="size-selector-title">Selecciona tu talla</h2>
                        <p className="size-selector-product-name">{product?.name}</p>

                        <div className="size-selector-grid">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="size-selector-button"
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <p className="size-selector-hint">
                            Presiona ESC o haz clic fuera para cerrar
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SizeSelector;
