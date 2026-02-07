import React from 'react';
import { GlassCardProps } from '../types';

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div
      className={`
        bg-peulla-glass 
        backdrop-blur-xl 
        border border-peulla-glassBorder 
        rounded-2xl 
        p-6 
        transition-all 
        duration-300
        ${hoverEffect ? 'hover:border-peulla-neonBlue/50 hover:shadow-neon hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;