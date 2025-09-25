import React, { Suspense, useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactWidget from '../components/ContactWidget';
import veoLiaLogo from '../assets/VEOLIA.jpg';
import secoWarwickLogo from '../assets/SECOWARWICK.jpg';
import commonLogo from '../assets/COMMON.jpg';
import mechatonLogo from '../assets/Mechaton-removebg.png';
import mechatonDefaultLogo from '../assets/Mechaton_default.png';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollingDown = currentScrollTop > lastScrollTop;
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Sekcja jest w viewport - pokaż
          entry.target.classList.add('reveal');
          
          // Animuj feature cards w sekcji
          const featureCards = entry.target.querySelectorAll('.feature-card');
          featureCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('reveal');
            }, index * 100);
          });
          
          // Animuj section title
          const sectionTitle = entry.target.querySelector('.section-title');
          if (sectionTitle) {
            setTimeout(() => {
              sectionTitle.classList.add('reveal');
            }, 200);
          }
        } else {
          // Sekcja NIE jest w viewport
          const rect = entry.target.getBoundingClientRect();
          const isAboveViewport = rect.bottom < 0;
          
          if (isAboveViewport && !scrollingDown) {
            // Sekcja jest nad viewport I scrollujemy w górę - UKRYJ
            entry.target.classList.remove('reveal');
            
            // Ukryj feature cards
            const featureCards = entry.target.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
              card.classList.remove('reveal');
            });
            
            // Ukryj section title
            const sectionTitle = entry.target.querySelector('.section-title');
            if (sectionTitle) {
              sectionTitle.classList.remove('reveal');
            }
          }
          // W pozostałych przypadkach nie rób nic (zostaw jak jest)
        }
      });
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    // Inicjalizacja animowanej siatki
    initEnigmaGrid();

    return () => observer.disconnect();
  }, []);

  // Funkcja do tworzenia animowanej siatki
  const initEnigmaGrid = () => {
    const gridContainer = document.getElementById('enigmaGrid');
    const contentContainer = document.getElementById('aboutContent');
    if (!gridContainer || !contentContainer) return;

    // Ustaw stały rozmiar siatki
    const cols = 60; // Więcej kolumn dla mniejszych kwadracików
    const rows = 30; // Więcej wierszy
    const totalSquares = cols * rows;
    
    const mainColors = ['#000000', '#ffffff']; // Główne kolory: czarny i biały
    const transitionColors = ['#333333', '#666666', '#999999', '#cccccc']; // Przejściowe szarości
    let squares = [];
    
    // Ustaw grid CSS dla idealnie kwadratowych komórek
    // Oblicz rozmiar na podstawie wysokości, potem dopasuj szerokość
    const sectionHeight = window.innerHeight * 0.8; // Jeszcze większa wysokość dla większych kwadratów
    const squareSize = sectionHeight / rows; // Rozmiar kwadracika na podstawie wysokości
    const actualCols = Math.floor(window.innerWidth / squareSize); // Ile kolumn zmieści się na szerokości
    
    gridContainer.style.gridTemplateColumns = `repeat(${actualCols}, ${squareSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, ${squareSize}px)`;
    gridContainer.style.width = `${actualCols * squareSize}px`; // Szerokość na podstawie liczby kolumn
    gridContainer.style.height = `${rows * squareSize}px`;
    gridContainer.style.margin = '0 auto'; // Wyśrodkuj grid poziomo
    gridContainer.style.left = '50%'; // Wyśrodkuj względem viewport
    gridContainer.style.transform = 'translateX(-50%)'; // Wyśrodkuj idealnie
    
    // Zaktualizuj liczbę kolumn dla dalszych obliczeń
    const updatedCols = actualCols;
    const updatedTotalSquares = updatedCols * rows;
    
    // Wyczyść kontener
    gridContainer.innerHTML = '';
    
    // Utwórz kwadraciki - rozpocznij z losowymi główny kolorami
    for (let i = 0; i < updatedTotalSquares; i++) {
      const square = document.createElement('div');
      square.className = 'grid-square';
      square.style.backgroundColor = mainColors[Math.floor(Math.random() * mainColors.length)];
      square.dataset.index = i;
      square.dataset.row = Math.floor(i / updatedCols);
      square.dataset.col = i % updatedCols;
      
      squares.push(square);
      gridContainer.appendChild(square);
    }
    
    // Funkcja do podświetlania obszaru wokół kursora i odkrywania tekstu
    const highlightArea = (centerIndex, radius = 4) => {
      const centerRow = Math.floor(centerIndex / updatedCols);
      const centerCol = centerIndex % updatedCols;
      
      squares.forEach((square, index) => {
        const row = Math.floor(index / updatedCols);
        const col = index % updatedCols;
        const distance = Math.abs(row - centerRow) + Math.abs(col - centerCol); // Manhattan distance
        
        if (distance <= radius) {
          // Wyczyść poprzedni timeout jeśli istnieje (już nie używamy ale zostaw dla kompatybilności)
          if (square.fadeTimeout) {
            clearTimeout(square.fadeTimeout);
            square.fadeTimeout = null;
          }
          
          square.classList.add('highlighted');
          square.style.backgroundColor = '#ffffff'; // BIAŁE podświetlenie
          square.style.border = '1px solid rgba(255, 255, 255, 0.8)'; // Biała ramka
          square.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.6)'; // Białe świecenie
          
          // USUNIĘTE: timeout dla wygaszania - podświetlenie zostaje na stałe!
        }
      });
    };
    
    // Dodaj event listenery
    squares.forEach((square, index) => {
      square.addEventListener('mouseenter', () => {
        highlightArea(index);
      });
    });
    
    // Animacja zmiany kolorów - wolniejsza z przejściami
    setInterval(() => {
      // Zmień losowo 5-8 kwadracików 
      const squaresToChange = Math.floor(Math.random() * 4) + 5;
      
      for (let i = 0; i < squaresToChange; i++) {
        const randomIndex = Math.floor(Math.random() * squares.length);
        const square = squares[randomIndex];
        
        // Zmieniony warunek: podświetlone kwadraciki też mogą się zmieniać
        const currentColor = square.style.backgroundColor;
        
        // Jeśli kwadracik jest czarny lub biały, przejdź przez szarość
        if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'rgb(255, 255, 255)') {
          // Rozpocznij przejście przez losowy kolor szary
          const transitionColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
          square.style.backgroundColor = transitionColor;
          
          // Po 500ms przejdź do przeciwnego głównego koloru
          setTimeout(() => {
            const targetColor = currentColor === 'rgb(0, 0, 0)' ? '#ffffff' : '#000000';
            square.style.backgroundColor = targetColor;
            
            // Jeśli kwadracik zmienił się na czarny, usuń efekty podświetlenia
            if (targetColor === '#000000') {
              square.classList.remove('highlighted');
              square.style.border = 'none';
              square.style.boxShadow = 'none';
            }
          }, 500);
        }
      }
    }, 3000); // Znacznie wolniejsza animacja - co 3 sekundy
  };

  useEffect(() => {
    // Przewiń do góry przy załadowaniu strony
    window.scrollTo(0, 0);
    
    // Ekran ładowania - 10 sekund
    const loadingTimer = setTimeout(() => {
      setShowIntro(false);
      startTextAnimation();
    }, 10000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const startTextAnimation = () => {
    // Znaki do losowego hakowania - dodane spacje żeby litery mogły się zamieniać na spacje
    const hackChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*+-=   ';
    
    // Funkcja do hakowania tekstu
    const hackText = (targetText, onUpdate, onComplete) => {
      const chars = targetText.split('');
      const iterations = chars.map(() => Math.floor(Math.random() * 4) + 2); // 2-5 iteracji na znak
      const maxIterations = Math.max(...iterations);
      let currentIteration = 0;
      
      const hackInterval = setInterval(() => {
        let result = '';
        let allComplete = true;
        
        for (let i = 0; i < chars.length; i++) {
          if (currentIteration >= iterations[i]) {
            // Ta litera już się ustaliła
            result += chars[i];
          } else {
            // Ta litera nadal się zmienia - hackuj wszystkie znaki łącznie ze spacjami i kropkami
            result += hackChars[Math.floor(Math.random() * hackChars.length)];
            allComplete = false;
          }
        }
        
        onUpdate(result);
        currentIteration++;
        
        if (allComplete || currentIteration > maxIterations) {
          clearInterval(hackInterval);
          onUpdate(targetText);
          if (onComplete) onComplete();
        }
      }, 80); // Szybsze dla lepszego efektu
    };
    
    // Faza 1: Cykliczne kropki ładowania (przez cały czas do momentu hakowania tytułu)
    let dotCount = 0;
    const dotInterval = setInterval(() => {
      dotCount++;
      const cycle = dotCount % 4; // 0, 1, 2, 3, 0, 1, 2, 3...
      
      if (cycle === 0) {
        setTitleText('');
      } else {
        setTitleText('.'.repeat(cycle));
      }
    }, 1000); // 1000ms na każdą zmianę kropek (wolniej)
    
    // Faza 2: Pisanie hashowanego opisu litera po literę (rozpocznij po 3 sekundach)
    setTimeout(() => {
      const description = 'Innowacyjny konkurs inżynierski łączący mechanikę, automatykę i elektronikę. Rozwijaj swoje umiejętności, prezentuj projekty oraz zdobywaj cenne doświadczenie.';
      const hackCharsForDesc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~`   ';
      
      // Generuj losowy hash o tej samej długości co opis - WSZYSTKIE znaki hackowane
      let randomHash = '';
      for (let i = 0; i < description.length; i++) {
        randomHash += hackCharsForDesc[Math.floor(Math.random() * hackCharsForDesc.length)];
      }
      let charIndex = 0;
      
      const typeHashInterval = setInterval(() => {
        setDescriptionText(randomHash.slice(0, charIndex + 1));
        charIndex++;
        
        if (charIndex >= randomHash.length) {
          clearInterval(typeHashInterval);
          
          // Faza 3: Hakowanie tytułu MECHATON (zatrzymaj kropki tutaj)
          setTimeout(() => {
            clearInterval(dotInterval); // Zatrzymaj kropki
            hackText('MECHATON', setTitleText, () => {
              // Faza 4: Zamiana hashowanego opisu na prawdziwy
              setTimeout(() => {
                hackText(description, setDescriptionText, () => {
                  // Pokaż przycisk
                  setTimeout(() => {
                    setShowButton(true);
                  }, 500);
                });
              }, 1000);
            });
          }, 1000);
        }
      }, 30); // 30ms na każdą literę hashowanego opisu
    }, 3000); // Po 3 sekundach zacznij pisać hash
  };

  return (
  <>
    {showIntro && (
      <div className="logo-intro-overlay">
        <img src={mechatonDefaultLogo} alt="Mechaton Logo" className="intro-logo" />
      </div>
    )}
    <Header />
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-3d-background">
          <iframe 
            src="https://my.spline.design/android39slegs-WUZsykrfbWLvauIDG1RrX2Nu/" 
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-layout">
            <img 
              src={mechatonLogo} 
              alt="Mechaton Logo" 
              className="hero-side-logo"
            />
            <div className="hero-content">
              <h1 style={{ 
                color: 'black',
                minHeight: '1.2em',
                fontFamily: 'inherit',
                fontWeight: '800',
                fontSize: '3.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                {!showIntro ? titleText : ''}
              </h1>
              <p style={{ 
                color: 'black',
                minHeight: '3em',
                fontFamily: descriptionText.includes('Innowacyjny') && !descriptionText.includes('1nn0w4cyJny') ? 'inherit' : 'monospace',
                transition: 'font-family 0.5s ease'
              }}>
                {!showIntro ? descriptionText : ''}
              </p>
              <button 
                onClick={() => scrollToSection('o-nas')} 
                className="btn btn-outline btn-red-outline"
                style={{ 
                  cursor: 'pointer',
                  opacity: showButton ? 1 : 0,
                  transition: 'opacity 1s ease'
                }}
              >
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="o-nas">
        <div className="container">
          <div className="about-section-interactive">
            {/* Animated Grid - teraz pokrywa całą sekcję */}
            <div className="enigma-grid-overlay">
              <div className="grid-container" id="enigmaGrid"></div>
            </div>
            
            {/* Tytuł ukryty za pikselami */}
            <div className="section-title">
              <h2>Czym jest Mechaton?</h2>
            </div>
            
            {/* Hidden Content - odkrywany pod kursorem */}
            <div className="about-content-hidden" id="aboutContent">
              <div className="about-text">
                <p>Mechaton to mechaniczna wersja konkursu dla informatyków pod nazwą Hackathon.</p>
                <p>Mechaton to 48-godzinne wyzwanie, w ramach którego uczestnicy (studenci Wydziału) będą mogli zaproponować rozwiązanie problemu inżynierskiego przygotowanego przez firmę we współpracy z Wydziałem Mechanicznym Politechniki Łódzkiej.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="home-section-title">
            <h2>Dlaczego warto wziąć udział?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Praktyczne doświadczenie</h3>
              <p>Możliwość zastosowania wiedzy teoretycznej w praktyce i rozwijania umiejętności technicznych pod okiem doświadczonych mentorów.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Kontakty branżowe</h3>
              <p>Nawiązanie cennych kontaktów z&nbsp;przedstawicielami przemysłu, potencjalnymi pracodawcami i innymi pasjonatami inżynierii.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Atrakcyjne nagrody</h3>
              <p>Możliwość zdobycia atrakcyjnych nagród rzeczowych, finansowych oraz staży w renomowanych firmach technologicznych.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Registration Callout Block (moved from EditionsPage) */}
      <section className="upcoming-edition-callout" style={{background:'#fff', boxShadow:'0 2px 12px #0001', margin:'48px auto 0 auto', maxWidth:'1000px', width:'100%', padding:'32px 24px', display:'flex', flexDirection:'column', alignItems:'center', gap:'18px', justifyContent:'center'}}>
        <div style={{fontSize:'1.5rem', fontWeight:700, color:'#630102', textAlign:'center'}}>Nadchodzi nowa edycja Mechaton!</div>
        <div style={{fontSize:'1.1rem', color:'#222', textAlign:'center', marginBottom:'8px'}}>Zgłoś swój zespół do udziału w najbliższej edycji konkursu Mechaton.<br/>Nie przegap szansy na udział!</div>
        <button
          style={{background:'#630102', color:'#fff', fontWeight:600, fontSize:'1.1rem', border:'none', borderRadius:'8px', padding:'12px 32px', cursor:'pointer', boxShadow:'0 1px 6px #0002', transition:'background 0.2s'}}
          onMouseOver={e => e.currentTarget.style.background='#8a1a1a'}
          onMouseOut={e => e.currentTarget.style.background='#630102'}
          onClick={() => setFormOpen(true)}
        >
          Zarejestruj zespół
        </button>
        <RegistrationForm open={formOpen} onClose={() => setFormOpen(false)} />
      </section>

      {/* History Section */}
      <section className="section" id="historia">
        <div className="container">
          <div className="home-section-title">
            <h2>Historia Mechatonu</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year hide-on-mobile">12.2024</div>
                <div className="partner-logo common-logo">
                  <a href="https://www.common.pl/" target="_blank" rel="noopener noreferrer">
                    <img src={commonLogo} alt="COMMON S.A. Logo" />
                  </a>
                </div>
                <h3 className="hide-on-mobile">
                  <a href="https://www.common.pl/" target="_blank" rel="noopener noreferrer">
                    COMMON S.A.
                  </a>
                </h3>
                <p className="hide-on-mobile">Polska firma specjalizująca się w produkcji zaawansowanych urządzeń do pomiaru gazu — w szczególności gazomierzy turbinowych i rotorowych, przetworników ciśnienia, rejestratorów danych oraz korektorów i modułów telemetrycznych.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year hide-on-mobile">11.2023</div>
                <div className="partner-logo seco-logo">
                  <a href="https://www.secowarwick.com/pl/" target="_blank" rel="noopener noreferrer">
                    <img src={secoWarwickLogo} alt="SECO/WARWICK Logo" />
                  </a>
                </div>
                <h3 className="hide-on-mobile">
                  <a href="https://www.secowarwick.com/pl/" target="_blank" rel="noopener noreferrer">
                    SECO/WARWICK
                  </a>
                </h3>
                <p className="hide-on-mobile">Polski światowy lider w produkcji pieców przemysłowych i linii technologicznych do obróbki cieplnej. Firma ze Świebodzina, która dostarcza zaawansowane rozwiązania dla przemysłu lotniczego, motoryzacyjnego i energetycznego na całym świecie.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year hide-on-mobile">01.2023</div>
                <div className="partner-logo">
                  <a href="https://www.veolia.pl/" target="_blank" rel="noopener noreferrer">
                    <img src={veoLiaLogo} alt="VEOLIA Logo" />
                  </a>
                </div>
                <h3 className="hide-on-mobile">
                  <a href="https://www.veolia.pl/" target="_blank" rel="noopener noreferrer">
                    VEOLIA
                  </a>
                </h3>
                <p className="hide-on-mobile">Francuski gigant w dziedzinie usług środowiskowych - zarządzanie wodą, odpadami i energią w 40 krajach świata. Firma zatrudniająca ponad 230,000 pracowników, lider w technologiach oczyszczania wody i gospodarce cyrkularnej.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <ContactWidget />
  </>
  );
};

export default HomePage;
