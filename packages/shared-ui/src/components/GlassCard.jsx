import React from 'react';

const GlassCard = ({ children, className = "" }) => {
    return (
        <div className={`liquid-glass rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02] ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
