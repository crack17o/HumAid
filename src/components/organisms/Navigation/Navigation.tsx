import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '../../atoms';
import './Navigation.css';

export interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/causes', label: 'Nos Causes' },
  { path: '/contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${className}`}>
      <div className="navigation__container container">
        {/* Logo */}
        <Link to="/" className="navigation__logo" onClick={closeMobileMenu}>
          <Heart className="navigation__logo-icon" />
          <span className="navigation__logo-text">HumAid</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="navigation__menu navigation__menu--desktop">
          {navigationItems.map((item) => (
            <li key={item.path} className="navigation__item">
              <Link
                to={item.path}
                className={`navigation__link ${
                  location.pathname === item.path ? 'navigation__link--active' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="navigation__cta navigation__cta--desktop">
          <Button variant="primary" size="sm">
            Faire un don
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navigation__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`navigation__mobile ${isMobileMenuOpen ? 'navigation__mobile--open' : ''}`}>
          <ul className="navigation__menu navigation__menu--mobile">
            {navigationItems.map((item) => (
              <li key={item.path} className="navigation__item">
                <Link
                  to={item.path}
                  className={`navigation__link ${
                    location.pathname === item.path ? 'navigation__link--active' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navigation__cta navigation__cta--mobile">
            <Button variant="primary" size="md">
              Faire un don
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="navigation__overlay" onClick={closeMobileMenu} />
      )}
    </nav>
  );
};
