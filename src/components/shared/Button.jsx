import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  className = '', 
  icon,
  iconPosition = 'right',
  size = 'md',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--accent)] text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] hover:text-white shadow-sm hover:shadow-md',
    secondary: 'bg-[var(--gray-light)] text-[var(--text-primary)] border border-[var(--card-border)] hover:bg-[var(--gray-dark)] hover:text-white shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)]/10',
    ghost: 'bg-transparent text-[var(--accent)] hover:bg-[var(--accent)]/10',
    link: 'bg-transparent text-[var(--accent)] hover:underline p-0'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  };

  const Component = to ? Link : 'button';
  
  return (
    <Component
      to={to}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon icon={icon} className="mr-2 w-4 h-4" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon icon={icon} className="ml-2 w-4 h-4" />
      )}
    </Component>
  );
};

export default Button; 