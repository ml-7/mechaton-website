import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import regulaminPdf from '../assets/regulamin/REGULAMIN_MECHATON.pdf';
import mechatonLogo from '../assets/Mechaton-removebg.png';

const Header = ({ blackOut, hoverMode, alwaysShow }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If alwaysShow is true, always keep visible
    if (alwaysShow) {
      setIsVisible(true);
      return;
    }

    // If not in hover mode, always show
    if (!hoverMode) {
      setIsVisible(true);
      return;
    }

    // Hover mode logic (only for HomePage during first 20 seconds)
    const checkMobile = () => window.innerWidth <= 600;
    if (checkMobile()) {
      setIsVisible(true);
      return;
    }

    // Start with navbar hidden in hover mode
    setIsVisible(false);

    const handleMouseMove = (e) => {
      const mouseY = e.clientY;
      if (mouseY <= 500) {
        setIsVisible(true);
      } else if (mouseY > 500 && !e.target.closest('header')) {
        setIsVisible(false);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY > 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverMode, alwaysShow]);

  return (
    <>
      <header
        className={`${isVisible ? 'show' : ''}${blackOut ? ' header-blackout' : ''}`}
      >
        <div className="container">
          <nav>
            <div className="logo-container">
              <img src={mechatonLogo} alt="Mechaton Logo" className="logo-image" />
              <Link to="/" className="logo">MECHATON</Link>
            </div>
            <div className={`nav-links${mobileMenuOpen ? ' open' : ''}`}>
              <Link to="/edycje" className={location.pathname.startsWith('/edycje') || location.pathname === '/basic-editions' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Edycje</Link>
              <Link to="/wspolpraca" className={location.pathname.startsWith('/wspolpraca') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Współpraca</Link>
              <Link to="/inni-o-nas" className={location.pathname.startsWith('/inni-o-nas') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Inni o nas</Link>
              <a href={regulaminPdf} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Regulamin</a>
            </div>
            <button className={`menu-button${mobileMenuOpen ? ' open' : ''}`} onClick={() => setMobileMenuOpen(m => !m)} aria-label="Toggle menu">
              <span className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
