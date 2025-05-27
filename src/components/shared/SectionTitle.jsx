import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 