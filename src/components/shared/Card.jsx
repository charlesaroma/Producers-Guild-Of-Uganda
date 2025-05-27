import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-[var(--card-bg)] rounded-lg shadow-md p-6 border border-[var(--card-border)]
        ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 