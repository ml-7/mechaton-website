
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";



const iframeLinks = [
  "https://www.energiadlalodzi.pl/tag/mechaton/",
  "https://technikum.io/mechaton/",
  "https://www.lodzkie.pl/strona-glowna/aktualnosci/mechaton,-czyli-budowanie-mostów-między-nauką-i-przemysłem",
  "https://mlodziwlodzi.pl/minimechaton-dla-uczniow-na-wydziale-mechanicznym-pl/",
  "https://zsp9.pl/26288-2/"
];

function LinkSwitcher({ current, setCurrent }) {
  const [displayed, setDisplayed] = useState(iframeLinks[current]);
  const [animating, setAnimating] = useState(false);
  const [pending, setPending] = useState(null); // 'left' or 'right' or null

  // Animate typing in
  useEffect(() => {
    if (pending) return; // Don't type in if we're about to delete
    setAnimating(true);
    let timeout;
    let i = 0;
    function type() {
      setDisplayed(iframeLinks[current].slice(0, i));
      if (i <= iframeLinks[current].length) {
        timeout = setTimeout(() => {
          i++;
          type();
        }, 18);
      } else {
        setAnimating(false);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [current, pending]);

  // Animate deleting out
  function handleArrow(direction) {
    if (animating) return;
    setAnimating(true);
    setPending(direction);
    let timeout;
    let i = displayed.length;
    function erase() {
      setDisplayed(displayed.slice(0, i));
      if (i > 0) {
        timeout = setTimeout(() => {
          i--;
          erase();
        }, 12);
      } else {
        // After erase, change current and let useEffect animate typing in
        setCurrent(prev => {
          if (direction === 'left') return (prev - 1 + iframeLinks.length) % iframeLinks.length;
          if (direction === 'right') return (prev + 1) % iframeLinks.length;
          return prev;
        });
        setPending(null);
      }
    }
    erase();
    return () => clearTimeout(timeout);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', gap: '1.5rem', minHeight: '3.5rem', position: 'relative', zIndex: 10 }}>
      <button
        aria-label="Poprzedni link"
        onClick={() => handleArrow('left')}
        style={{ fontSize: '2.2rem', background: 'none', border: 'none', cursor: 'pointer', color: '#630102', fontWeight: 'bold', textShadow: '0 2px 8px #e5393533', padding: '0 0.7rem', transition: 'color 0.2s', position: 'relative', zIndex: 11, pointerEvents: 'auto' }}
        disabled={animating}
      >
  ◀
      </button>
      <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', borderRadius: '2rem', boxShadow: '0 2px 12px #0001', padding: '0.7rem 1.5rem', minWidth: '260px', gap: '0.7rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '1.2rem' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7" stroke="#888" strokeWidth="2"/><line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
        <a href={iframeLinks[current]} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: '#222', textDecoration: 'underline', wordBreak: 'break-all', textAlign: 'center', display: 'inline-block', background: 'none', border: 'none', padding: 0 }}>
          {displayed}
          <span className="blinking-cursor" style={{
            display: 'inline-block',
            width: '2px',
            height: '1.3em',
            marginLeft: '2px',
            background: '#630102',
            color: 'transparent',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            verticalAlign: 'middle',
            userSelect: 'none',
            borderRadius: '1px',
          }}>
            |
          </span>
        </a>
      </div>
      <button
        aria-label="Następny link"
        onClick={() => handleArrow('right')}
        style={{ fontSize: '2.2rem', background: 'none', border: 'none', cursor: 'pointer', color: '#630102', fontWeight: 'bold', textShadow: '0 2px 8px #e5393533', padding: '0 0.7rem', transition: 'color 0.2s', position: 'relative', zIndex: 11, pointerEvents: 'auto' }}
        disabled={animating}
      >
  ▶
      </button>
    </div>
  );
}

const AboutUsPage = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <style>{`
        @keyframes blink-cursor { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .blinking-cursor { animation: blink-cursor 1s steps(1) infinite; }
      `}</style>
  <Header />
      <div className="about-us-page" style={{ marginTop: '110px' }}>
        <LinkSwitcher current={current} setCurrent={setCurrent} />
        <div className="responsive-iframe-container" style={{position: 'relative' , width: '90%', margin: '0 auto 2rem auto', paddingBottom: '45%', height: 0, boxShadow: '0 6px 32px 0 #0002, 0 1.5px 8px 0 #0001', borderRadius: '1.2rem', overflow: 'hidden'}}>
          <iframe
            src={iframeLinks[current]}
            title="Inni o nas - artykuł"
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '1.2rem'}}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
