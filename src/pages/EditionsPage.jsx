import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditionsPage = () => (
  <>
    <Header />
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Strona główna</a> <span>›</span> Edycje
          </div>
          <h1>Edycje konkursu</h1>
          <p>Poznaj historię i dokonania uczestników wszystkich edycji Mechatonu - od pierwszych projektów do najnowszych innowacji.</p>
        </div>
      </section>

      {/* Current Edition Section */}
      <section className="section">
        <div className="container">
          <div className="edition-hero">
            <h2>Mechaton 2025</h2>
            <p>Aktualnie trwa 8. edycja konkursu Mechaton! Temat przewodni: "Zrównoważone technologie dla inteligentnych miast".</p>
            <a href="#" className="btn">Zgłoś swój zespół</a>
          </div>

          <div className="section-title">
            <h2>Poprzednie edycje</h2>
          </div>

          {/* Edition 2024 */}
          <div className="edition-card">
            <div className="edition-image">
              <img src="https://via.placeholder.com/1200x600" alt="Mechaton 2024" />
            </div>
            <div className="edition-content">
              <span className="edition-year">2024</span>
              <h3>Roboty wspierające w przemyśle</h3>
              <p>Siódma edycja konkursu skupiła się na projektowaniu rozwiązań robotycznych wspomagających pracę człowieka w środowisku przemysłowym. Uczestnicy tworzyli prototypy robotów współpracujących oraz systemów automatyzacji procesów produkcyjnych.</p>
              
              <div className="edition-stats">
                <div className="stat-item">
                  <div className="stat-number">32</div>
                  <div className="stat-label">Zespoły</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24</div>
                  <div className="stat-label">Uczelnie</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">125</div>
                  <div className="stat-label">Uczestników</div>
                </div>
              </div>
              
              <div className="winner-section">
                <h4>Zwycięzcy</h4>
                <div className="winner-grid">
                  <div className="winner-card">
                    <div className="winner-position">I miejsce</div>
                    <div className="winner-name">Team RoboHelp</div>
                    <div className="winner-project">Egzoszkielet wspomagający pracę w magazynie</div>
                  </div>
                  <div className="winner-card">
                    <div className="winner-position">II miejsce</div>
                    <div className="winner-name">MechMasters</div>
                    <div className="winner-project">Autonomiczny robot do inspekcji linii produkcyjnych</div>
                  </div>
                  <div className="winner-card">
                    <div className="winner-position">III miejsce</div>
                    <div className="winner-name">AutoTech</div>
                    <div className="winner-project">System wizyjny kontroli jakości</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Edition 2023 */}
          <div className="edition-card">
            <div className="edition-image">
              <img src="https://via.placeholder.com/1200x600" alt="Mechaton 2023" />
            </div>
            <div className="edition-content">
              <span className="edition-year">2023</span>
              <h3>Urządzenia dla medycyny przyszłości</h3>
              <p>Szósta edycja Mechatonu była poświęcona tworzeniu innowacyjnych rozwiązań mechatronicznych dla zastosowań medycznych. Zespoły projektowały urządzenia rehabilitacyjne, diagnostyczne i wspomagające pracę personelu medycznego.</p>
              
              <div className="edition-stats">
                <div className="stat-item">
                  <div className="stat-number">28</div>
                  <div className="stat-label">Zespoły</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">19</div>
                  <div className="stat-label">Uczelnie</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">110</div>
                  <div className="stat-label">Uczestników</div>
                </div>
              </div>
              
              <div className="winner-section">
                <h4>Zwycięzcy</h4>
                <div className="winner-grid">
                  <div className="winner-card">
                    <div className="winner-position">I miejsce</div>
                    <div className="winner-name">MedTech Solutions</div>
                    <div className="winner-project">Interaktywna orteza rehabilitacyjna</div>
                  </div>
                  <div className="winner-card">
                    <div className="winner-position">II miejsce</div>
                    <div className="winner-name">Health Mechanics</div>
                    <div className="winner-project">System monitorowania parametrów życiowych pacjentów</div>
                  </div>
                  <div className="winner-card">
                    <div className="winner-position">III miejsce</div>
                    <div className="winner-name">BioInnovators</div>
                    <div className="winner-project">Robot do transportu leków w szpitalu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Galeria projektów</h2>
          </div>
          
          <p>Zobacz najciekawsze momenty i projekty z poprzednich edycji konkursu Mechaton.</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 4" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 5" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/600x400" alt="Projekt 6" />
            </div>
          </div>
          
          <div className="archive-editions">
            <div className="section-title">
              <h2>Archiwum edycji</h2>
            </div>
            
            <div className="archive-list">
              <div className="archive-item">
                <div className="archive-year">2022</div>
                <div className="archive-title">Energooszczędne systemy automatyki</div>
                <a href="#" className="btn-small">Szczegóły</a>
              </div>
              <div className="archive-item">
                <div className="archive-year">2021</div>
                <div className="archive-title">Rozwiązania dla rolnictwa 4.0</div>
                <a href="#" className="btn-small">Szczegóły</a>
              </div>
              <div className="archive-item">
                <div className="archive-year">2020</div>
                <div className="archive-title">Zdalne systemy sterowania</div>
                <a href="#" className="btn-small">Szczegóły</a>
              </div>
              <div className="archive-item">
                <div className="archive-year">2019</div>
                <div className="archive-title">Robotyka mobilna</div>
                <a href="#" className="btn-small">Szczegóły</a>
              </div>
              <div className="archive-item">
                <div className="archive-year">2018</div>
                <div className="archive-title">Pierwsza edycja</div>
                <a href="#" className="btn-small">Szczegóły</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Dołącz do następnej edycji!</h2>
          <p>Chcesz zaprezentować swoje umiejętności inżynierskie i zmierzyć się z inspirującymi wyzwaniami? Zapisz się do newslettera i bądź na bieżąco z informacjami o kolejnych edycjach.</p>
          <a href="#" className="btn">Zapisz się do newslettera</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default EditionsPage;
