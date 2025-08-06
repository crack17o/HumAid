import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Typography } from '../../atoms';
import './Footer.css';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__container container">
        {/* Main Footer Content */}
        <div className="footer__content">
          {/* Logo and Description */}
          <div className="footer__section">
            <div className="footer__logo">
              <Heart className="footer__logo-icon" />
              <span className="footer__logo-text">HumAid</span>
            </div>
            <Typography variant="body" className="footer__description">
              HumAid s'engage à améliorer la vie des enfants dans le besoin à travers des actions concrètes et durables.
            </Typography>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <Typography variant="h6" className="footer__title">
              Liens rapides
            </Typography>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Accueil</Link></li>
              <li><Link to="/about" className="footer__link">À propos</Link></li>
              <li><Link to="/services" className="footer__link">Nos Services</Link></li>
              <li><Link to="/causes" className="footer__link">Nos Causes</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer__section">
            <Typography variant="h6" className="footer__title">
              Support
            </Typography>
            <ul className="footer__links">
              <li><Link to="/gallery" className="footer__link">Galerie</Link></li>
              <li><Link to="/news" className="footer__link">Actualités</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
              <li><a href="#" className="footer__link">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <Typography variant="h6" className="footer__title">
              Contact
            </Typography>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <MapPin size={16} />
                <span>123 Rue HumAid, 75001 Kinshasa</span>
              </div>
              <div className="footer__contact-item">
                <Phone size={16} />
                <span>+243 1 23 45 67 89</span>
              </div>
              <div className="footer__contact-item">
                <Mail size={16} />
                <span>contact@humaid.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <Typography variant="caption" className="footer__copyright">
              © 2025 HumAid. Tous droits réservés.
            </Typography>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Politique de confidentialité</a>
              <a href="#" className="footer__legal-link">Conditions d'utilisation</a>
              <a href="#" className="footer__legal-link">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
