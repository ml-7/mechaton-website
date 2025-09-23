import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import regulaminPdf from '../assets/regulamin/REGULAMIN_MECHATON.pdf';
import mechatonLogo from '../assets/Mechaton-removebg.png';

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseY = e.clientY;
      if (mouseY <= 80) {
        setIsVisible(true);
      } else if (mouseY > 150 && !e.target.closest('header')) {
        setIsVisible(false);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY > 150) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="header-trigger"></div>
      <header className={isVisible ? 'show' : ''}>
        <div className="container">
          <nav>
            <div className="logo-container">
              <img src={mechatonLogo} alt="Mechaton Logo" className="logo-image" />
              <Link to="/" className="logo">MECHATON</Link>
            </div>
            <div className="nav-links">
              <Link to="/edycje" className={location.pathname.startsWith('/edycje') || location.pathname === '/basic-editions' ? 'active' : ''}>Edycje</Link>
              <Link to="/wspolpraca" className={location.pathname.startsWith('/wspolpraca') ? 'active' : ''}>Współpraca</Link>
              <a href={regulaminPdf} target="_blank" rel="noopener noreferrer">Regulamin</a>
            </div>
            <button className="menu-button">☰</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
