import React from 'react';


const Footer = () => (
  <footer className="footer" id="kontakt">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>MECHATON</h3>
          <p>Konkurs inżynierski Wydziału Mechanicznego Politechniki Łódzkiej.</p>
        </div>
        <div className="footer-column">
          <h3>Nawigacja</h3>
          <ul className="footer-links">
            <li><a href="/edycje">Edycje</a></li>
            <li><a href="/wspolpraca">Współpraca</a></li>
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
