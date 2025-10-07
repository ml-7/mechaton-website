import React from 'react';
import politechnikaLogo from '../assets/Politechnika_Lodzka_biale_logo.png';
import mechanicalFacultyLogo from '../assets/Logo_WM_bordowe.png';

const Footer = () => (
  <footer className="footer" id="kontakt">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column logo-column">
          <a href="https://p.lodz.pl/" target="_blank" rel="noopener noreferrer" className="logo-link">
            <img src={politechnikaLogo} alt="Politechnika Łódzka" style={{ height: '120px', width: 'auto', objectFit: 'contain' }} />
          </a>
        </div>
        <div className="footer-column">
          <h3>MECHATON</h3>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <p style={{ flex: '1', margin: '0' }}>Konkurs inżynierski Wydziału Mechanicznego Politechniki Łódzkiej.</p>
            <div className="mechanical-faculty-logo" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: '-55px',
            }}>
              <a href="https://mechaniczny.p.lodz.pl/" target="_blank" rel="noopener noreferrer" className="logo-link">
                <img 
                  src={mechanicalFacultyLogo} 
                  alt="Wydział Mechaniczny" 
                  style={{ 
                    height: '180px', 
                    width: 'auto', 
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }} 
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Nawigacja</h3>
          <ul className="footer-links">
            <li><a href="/edycje">Edycje</a></li>
            <li><a href="/wspolpraca">Współpraca</a></li>
            <li><a href="/inni-o-nas">Inni o nas</a></li>
            <li><a href="../src/assets/regulamin/REGULAMIN_MECHATON.pdf" target="_blank" rel="noopener noreferrer">Regulamin</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Kontakt</h3>
          <ul className="footer-links">
            <li>Email: mechaton@info.p.lodz.pl</li>
            <li>Adres: ul. Stefanowskiego 1/15,<br />90-537 Łódź</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Śledź nas</h3>
          <ul className="footer-links social-icons">
            <li>
              <a href="https://www.facebook.com/politechnika.lodzka" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/politechnika_lodzka" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/school/politechnika-lodzka" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/politechnika%C5%82%C3%B3dzka" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} MECHATON - Wydział Mechaniczny Politechniki Łódzkiej. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default Footer;
