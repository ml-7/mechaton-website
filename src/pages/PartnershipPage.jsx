import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import IndustryPng from '../assets/Industry.png';
import IntercollegiatePng from '../assets/Intercollegiate.png';
import MentoringPng from '../assets/Mentoring.png';
import RoverPng from '../assets/Rover.png';
import SatelliteRobot from '../assets/Space-satelite-robot.png';
import SatellitePng from '../assets/Satellite.png';

const PartnershipPage = () => {
  // Fade-in effect for partnership boxes
  useEffect(() => {
    const boxes = [
      document.getElementById('partnership-box-1'),
      document.getElementById('partnership-box-2'),
      document.getElementById('partnership-box-3'),
    ];
    function onScroll() {
      boxes.forEach((box, i) => {
        if (!box) return;
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => box.classList.add('appear'), i * 180);
        }
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Set black background for this page
  React.useEffect(() => {
    document.body.classList.add('partnership-bg');
    const root = document.getElementById('root');
    if (root) root.classList.add('partnership-page');
    return () => {
      document.body.classList.remove('partnership-bg');
      if (root) root.classList.remove('partnership-page');
    };
  }, []);
  // Typewriter state
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
    privacy: false
  });
  
  const texts = [
    'Współpracuj z nami!',        // Polski
    'Collaborate with us!',       // Angielski
    '¡Colabora con nosotros!',    // Hiszpański
    'Kooperiere mit uns!',        // Niemiecki
    'Collaborez avec nous!'       // Francuski
  ];

  useEffect(() => {
    let timeout;
    const currentText = texts[currentLanguageIndex];
    
    if (isTyping) {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100); // Szybkość pisania
      } else {
        // Tekst napisany, czekaj 10 sekund
        timeout = setTimeout(() => {
          setIsTyping(false);
          setCurrentIndex(currentText.length);
        }, 10000);
      }
    } else {
      // Kasowanie tekstu
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, 50); // Szybsze kasowanie
      } else {
        // Tekst skasowany, zmień język
        setCurrentLanguageIndex((prevIndex) => 
          (prevIndex + 1) % texts.length
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentLanguageIndex, texts]);

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
          const featureCards = entry.target.querySelectorAll('.partnership-card');
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
            const featureCards = entry.target.querySelectorAll('.partnership-card');
            featureCards.forEach(card => {
              card.classList.remove('reveal');
            });
            
            // Ukryj section title
            const sectionTitle = entry.target.querySelector('.section-title');
            if (sectionTitle) {
              sectionTitle.classList.remove('reveal');
            }
          }
        }
      });
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission with mailto
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Musisz wyrazić zgodę na przetwarzanie danych osobowych.');
      return;
    }
    
    try {
      // Utworzenie szczegółowego tematu na podstawie typu współpracy
      const partnershipTypeText = {
        'company': 'Partnerstwo biznesowe',
        'university': 'Współpraca międzyuczelniana', 
        'mentor': 'Mentoring podczas wydarzenia',
        'other': 'Inne'
      }[formData.partnershipType] || 'Zapytanie o współpracę';
      
      const subject = encodeURIComponent(`Mechaton - ${partnershipTypeText}`);
      const body = encodeURIComponent(
        `Imię i nazwisko: ${formData.name}\n` +
        `Firma/Instytucja: ${formData.company}\n` +
        `Email: ${formData.email}\n` +
        `Telefon: ${formData.phone || 'Nie podano'}\n` +
        `Rodzaj współpracy: ${partnershipTypeText}\n\n` +
        `Wiadomość:\n${formData.message}\n\n` +
        `---\nWiadomość wysłana ze strony mechaton.p.lodz.pl`
      );
      const mailtoLink = `mailto:mechaton@info.p.lodz.pl?subject=${subject}&body=${body}`;
      
      // Otwarcie klienta email
      window.location.href = mailtoLink;
      
      console.log('Przekierowanie do klienta email - współpraca:', formData);
      alert('Otwiera się Twój klient email aby wysłać zapytanie o współpracę!');
      
      // Wyczyszczenie formularza
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: '',
        privacy: false
      });
      
    } catch (error) {
      console.error('Błąd podczas wysyłania:', error);
      alert('Wystąpił błąd. Spróbuj ponownie.');
    }
  };

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#partnerstwo');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
  <>
    <Header blackOut />

    {/* Rover image centered in the page flow */}
    <div
      className="rover-appear"
      style={{
        position: 'absolute',
        left: '17%',
        top: '990px',
        transform: 'translateX(-50%)',
        zIndex: 69,
        pointerEvents: 'none',
        width: '320px',
        maxWidth: '90vw',
        opacity: 0.95
      }}
    >
      <img src={RoverPng} alt="Rover" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
    <main>
      {/* Page Header with Earth Background */}
      <section className="partnership-hero">
        {/* Scroll Indicators */}
        <div className="scroll-indicators left" onClick={scrollToNextSection}>
          <div className="scroll-arrow arrow-1">‹</div>
          <div className="scroll-arrow arrow-2">‹</div>
          <div className="scroll-arrow arrow-3">‹</div>
          <div className="scroll-arrow arrow-4">‹</div>
          <div className="scroll-arrow arrow-5">‹</div>
          <div className="scroll-arrow arrow-6">‹</div>
        </div>
        <div className="scroll-indicators right" onClick={scrollToNextSection}>
          <div className="scroll-arrow arrow-1">›</div>
          <div className="scroll-arrow arrow-2">›</div>
          <div className="scroll-arrow arrow-3">›</div>
          <div className="scroll-arrow arrow-4">›</div>
          <div className="scroll-arrow arrow-5">›</div>
          <div className="scroll-arrow arrow-6">›</div>
        </div>
        
        <div className="partnership-earth-background">
          <iframe 
            src="https://my.spline.design/holographicearthwithdynamiclines-oahpaniVPVZDmeOPPJb2zFQF/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            loading="lazy"
            title="Holographic Earth"
            allow="autoplay; fullscreen"
            onLoad={() => console.log('Earth model loaded successfully')}
            onError={() => console.error('Earth model failed to load')}
            style={{ 
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              background: 'transparent',
              filter: 'blur(1px)'
            }}
          />
          {/* Fallback background */}
          <div className="earth-fallback" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000000',
            zIndex: 0
          }}></div>
        </div>
        <div className="container partnership-content-overlay">
          <div className="partnership-hero-content">
            <h1 className="typewriter-text">
              {displayText}
              <span className="cursor">|</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Animated white glowing impulse separator */}
      <div className="glow-separator-wrapper">
        <div className="glow-separator">
          <div className="glow-impulse" />
        </div>
      </div>
      {/* Partnership Options */}
      <section className="section" id="partnerstwo">
        <div className="container">
          <div className="section-title">
            <h2>Współpraca z nami</h2>
          </div>
          <div className="partnership-grid">
            <div className="partnership-card">
              <div className="partnership-icon"></div>
              <h3>Dla firm</h3>
              <p>Zostań sponsorem konkursu, zyskaj dostęp do utalentowanych młodych inżynierów budując rozpoznawalność marki w środowisku akademickim.</p>
              <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Dołącz jako partner</a>
            </div>
            <div className="partnership-card">
              <div className="partnership-icon"></div>
              <h3>Dla uczelni</h3>
              <p>Dołącz do sieci uczelni partnerskich, umożliw swoim studentom udział w konkursie wzbogacając ofertę edukacyjną o praktyczne doświadczenia.</p>
              <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Nawiąż współpracę</a>
            </div>
            <div className="partnership-card">
              <div className="partnership-icon"></div>
              <h3>Dla mentorów</h3>
              <p>Podziel się swoją wiedzą i doświadczeniem jako mentor. Wspieraj rozwój młodych talentów i bądź częścią inspirującej społeczności.</p>
              <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Zostań mentorem</a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Partnership Info */}
      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        {/* Satellite image in front of the section */}
        <div style={{
          position: 'absolute',
          left: '20%',
          top: '700px',
          transform: 'translateX(-50%)',
          zIndex: 100,
          pointerEvents: 'none',
          width: '750px',
          maxWidth: '90vw',
          opacity: 0.98
        }}>
          <img src={SatellitePng} alt="Satellite" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="container">
          <div className="section-title">
            <h2>Dlaczego warto współpracować z Mechatonem?</h2>
          </div>
          <div className="partnership-box" id="partnership-box-1">
            <div className="partnership-content">
              <div className="partnership-text">
                <h3>Partnerstwo dla firm</h3>
                <p>Współpraca z konkursem MECHATON to nie tylko wsparcie edukacji i rozwoju młodych talentów inżynierskich, ale także szereg korzyści dla Twojej firmy. Partnerzy konkursu zyskują dostęp do utalentowanych absolwentów, możliwość promowania swojej marki oraz okazję do prezentacji najnowszych technologii.</p>
                <p>Oferujemy różne pakiety współpracy, które można dostosować do indywidualnych potrzeb i celów Twojej organizacji. Niezależnie od wielkości firmy, znajdziemy formułę partnerstwa, która przyniesie obopólne korzyści.</p>
                <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Zostań partnerem</a>
              </div>
              <div className="partnership-image">
                <img src={IndustryPng} alt="Partnerstwo dla firm" />
              </div>
            </div>
          </div>
          
          <div className="partnership-box" id="partnership-box-2">
            <div className="partnership-content">
              <div className="partnership-image">
                <img src={IntercollegiatePng} alt="Partnerstwo dla uczelni" />
              </div>
              <div className="partnership-text">
                <h3>Współpraca międzyuczelniana</h3>
                <p>MECHATON to platforma, która łączy środowiska akademickie różnych uczelni. Współpraca międzyuczelniana pozwala na wymianę doświadczeń, transfer wiedzy oraz tworzenie interdyscyplinarnych zespołów studenckich.</p>
                <p>Zapraszamy uczelnie techniczne do nawiązania partnerstwa, które wzbogaci ofertę dydaktyczną i otworzy nowe możliwości dla studentów. Wspólnie możemy realizować projekty badawcze, organizować warsztaty i tworzyć nowoczesne programy edukacyjne.</p>
                <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Nawiąż współpracę</a>
              </div>
            </div>
          </div>
          
          <div className="partnership-box" id="partnership-box-3">
            <div className="partnership-content">
              <div className="partnership-text">
                <h3>Mentoring podczas wydarzenia</h3>
                <p>MECHATON to nie tylko konkurs, ale również czas na rozwój, który daje szanse połączyć doświadczonych specjalistów z młodymi pasjonatami inżynierii. Mentorom oferujemy możliwość dzielenia się wiedzą, doświadczeniem oraz wpływania na rozwój przyszłych kadr technicznych.</p>
                <p>Jeśli jesteś ekspertem w dziedzinie mechaniki, automatyki, elektroniki lub pokrewnych dziedzin, zapraszamy do udziału. Twoje doświadczenie może inspirować i wspierać młode talenty.</p>
                <a href="#" className="btn" onClick={e => { e.preventDefault(); document.getElementById('formularz-kontaktowy')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Zostań mentorem</a>
              </div>
              <div className="partnership-image">
                <img src={MentoringPng} alt="Mentoring podczas wydarzenia" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Korzyści ze współpracy</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"></div>
              <h3>Dla firm</h3>
              <p>Partnerstwo z konkursem MECHATON przynosi firmom konkretne korzyści biznesowe i wizerunkowe.</p>
              <ul>
                <li>Dostęp do bazy utalentowanych absolwentów</li>
                <li>Możliwość promocji marki w środowisku akademickim</li>
                <li>Udział w wydarzeniach branżowych</li>
                <li>Wpływ na kształcenie przyszłych kadr</li>
                <li>Możliwość testowania innowacyjnych rozwiązań</li>
              </ul>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"></div>
              <h3>Dla uczelni</h3>
              <p>Współpraca międzyuczelniana w ramach konkursu MECHATON przynosi korzyści edukacyjne i badawcze.</p>
              <ul>
                <li>Wzbogacenie oferty dydaktycznej</li>
                <li>Wymiana doświadczeń i transfer wiedzy</li>
                <li>Wspólne projekty badawcze</li>
                <li>Promocja uczelni wśród kandydatów na studia</li>
                <li>Dostęp do nowoczesnych technologii</li>
              </ul>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"></div>
              <h3>Dla mentorów</h3>
              <p>Udział w mentoringu podczas konkursu MECHATON to rozwój zawodowy i satysfakcja z dzielenia się wiedzą.</p>
              <ul>
                <li>Rozwój umiejętności przywódczych</li>
                <li>Satysfakcja z wpływu na rozwój młodych talentów</li>
                <li>Nawiązywanie kontaktów branżowych</li>
                <li>Aktualizacja wiedzy w kontakcie z innowacyjnymi projektami</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          left: '60%',
          top: '-288px',
          transform: 'translateX(-50%)',
          zIndex: -1,
          pointerEvents: 'none',
          width: '2800px',
          maxWidth: '80vw',
          opacity: 0.97,
          filter: 'blur(0.1px)'
        }}>
          <img src={SatelliteRobot} alt="Satellite" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" id="formularz-kontaktowy">
        <div className="container">
          <div className="section-title">
            <h2>Skontaktuj się z nami</h2>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="form-control" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Firma / Instytucja *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    className="form-control" 
                    value={formData.company}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="form-control" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="partnership-type">Rodzaj współpracy *</label>
                <select 
                  id="partnership-type" 
                  name="partnershipType"
                  className="form-control" 
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Wybierz rodzaj współpracy</option>
                  <option value="company">Partnerstwo biznesowe</option>
                  <option value="university">Współpraca międzyuczelniana</option>
                  <option value="mentor">Mentoring podczas wydarzenia</option>
                  <option value="other">Inne</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Wiadomość *</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="privacy" style={{display: 'inline', marginLeft: '10px'}}>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności. *</label>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="btn">Wyślij zapytanie</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section removed as requested */}
    </main>
    <Footer />
  </>
  );
};

export default PartnershipPage;
