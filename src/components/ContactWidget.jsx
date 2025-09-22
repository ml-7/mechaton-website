import React, { useState, useEffect } from 'react';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showLoadingDots, setShowLoadingDots] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const toggleWidget = () => {
    if (isOpen) {
      // Rozpocznij animację zamykania
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setShowLoadingDots(false);
      }, 300); // 300ms - czas animacji
    } else {
      // Otwórz okienko i pokaż animację kropek
      setIsOpen(true);
      setShowLoadingDots(true);
    }
  };

  useEffect(() => {
    if (showLoadingDots) {
      // Po 13 sekundach ukryj kropki
      const timer = setTimeout(() => {
        setShowLoadingDots(false);
      }, 13000);
      
      return () => clearTimeout(timer);
    }
  }, [showLoadingDots]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Utworzenie linku mailto
      const subject = encodeURIComponent('Wiadomość ze strony Mechaton');
      const body = encodeURIComponent(
        `Email nadawcy: ${formData.email}\n\nTreść wiadomości:\n${formData.message}`
      );
      const mailtoLink = `mailto:mechaton@info.p.lodz.pl?subject=${subject}&body=${body}`;
      
      // Otwarcie klienta email
      window.location.href = mailtoLink;
      
      console.log('Przekierowanie do klienta email:', formData);
      alert('Otwiera się Twój klient email aby wysłać wiadomość!');
      
      // Wyczyszczenie formularza
      setFormData({ email: '', message: '' });
      
      // Płynne zamykanie po wysłaniu
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setShowLoadingDots(false);
      }, 300);
      
    } catch (error) {
      console.error('Błąd podczas wysyłania:', error);
      alert('Wystąpił błąd. Spróbuj ponownie.');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className={`contact-widget-button ${isOpen ? 'active' : ''}`} onClick={toggleWidget}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="white"/>
        </svg>
      </div>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className={`contact-widget-modal ${isClosing ? 'closing' : ''}`}>
          <div className="contact-widget-header">
            <h3>Skontaktuj się z nami</h3>
            <button className="close-button" onClick={toggleWidget}>×</button>
          </div>
          
          {/* 3D Model */}
          <div className="contact-widget-3d-space">
            {showLoadingDots ? (
              <div className="loading-dots-container">
                <div className="loading-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            ) : (
              <iframe 
                src="https://my.spline.design/welcomerobotwhite-gfKb9iEjYLMg17a80WuGBOn4/?autoplay=false" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  border: 'none',
                  background: 'white'
                }}
              />
            )}
          </div>

          <form onSubmit={handleSubmit} className="contact-widget-form">
            <div className="form-group">
              <label htmlFor="email">Twój email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="twoj.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Treść wiadomości:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Opisz swoją sprawę..."
                rows="4"
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactWidget;