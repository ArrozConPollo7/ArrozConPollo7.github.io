import React from 'react';

const Marquee = ({ text }) => {
    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            background: 'var(--color-accent)',
            padding: '15px 0',
            whiteSpace: 'nowrap',
            position: 'relative',
            display: 'flex'
        }}>
            <div className="marquee-content" style={{
                display: 'inline-block',
                animation: 'marquee 20s linear infinite',
                paddingLeft: '100%'
            }}>
                {[...Array(4)].map((_, i) => (
                    <span key={i} style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        marginRight: '50px'
                    }}>
                        {text}
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee-content {
            display: flex; /* Ensure items are in a row */
            animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default Marquee;
