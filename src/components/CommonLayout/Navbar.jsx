import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button';
import { Icon } from '@iconify/react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Membership', href: '/membership' },
  { label: 'Executive Committee', href: '/executive-committee' },
  { label: 'Blogs & Events', href: '/blogs-events' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md shadow-sm border-b border-[var(--card-border)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/PGU.png" 
                alt="PGU Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden md:block text-lg font-bold text-[var(--text-primary)]">
                PGU
              </span>
            </Link>
          </div>

          {/* Menu Items Section */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`
                      px-4 py-2 text-sm text-[var(--text-primary)] transition-colors rounded-lg
                      ${isActive 
                        ? 'text-[var(--accent)] font-medium border-b-2 border-[var(--accent)]' 
                        : 'hover:text-[var(--accent)] hover:bg-[var(--gray-light)]'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Membership Login Section */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              icon="lucide:log-in"
              size="sm"
              className="hidden md:flex md:cursor-pointer"
            >
              Member Login
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[var(--gray-light)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon 
                icon={isOpen ? 'lucide:x' : 'lucide:menu'} 
                className="w-6 h-6 text-[var(--text-primary)]"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[var(--card-border)]">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`
                      px-4 py-2 text-[var(--text-primary)] transition-colors rounded-lg
                      ${isActive 
                        ? 'text-[var(--accent)] font-medium bg-[var(--accent)]/10' 
                        : 'hover:text-[var(--accent)] hover:bg-[var(--gray-light)]'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="px-4 pt-2">
                <Button 
                  variant="outline"
                  icon="lucide:log-in"
                  className="w-full"
                >
                  Member Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
