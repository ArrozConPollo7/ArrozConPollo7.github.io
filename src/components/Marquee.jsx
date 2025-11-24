import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Marquee = () => {
    const { t } = useLanguage();

    // Duplicate text to create seamless loop
    const marqueeText = `${t.marquee} ${t.marquee} ${t.marquee} ${t.marquee}`;

    return (
        <div style={{
            background: 'var(--color-accent)',
            color: 'white',
            padding: '15px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 20,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
                style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 'bold'
                }}
            >
                {marqueeText}
            </motion.div>
        </div>
    );
};

export default Marquee;
