import React, { useState, useRef, useEffect } from 'react';
import veoliaLogo from '../assets/VEOLIA.jpg';
import secowarwickLogo from '../assets/SECOWARWICK.jpg';
import commonLogo from '../assets/COMMON.jpg';
import commonMechaton from '../assets/common-mechaton.jpg';
import secowarwickMechaton from '../assets/secowarwick-mechaton.jpg';
import veoliaMechaton from '../assets/veolia-mechaton.jpg';
import oldTv from '../assets/old_tv_no_bg.png';
import circleArrow from '../assets/circle-arrow-icon.jpg';
import meshVideo from '../assets/mesh.mp4';
import livingRoom from '../assets/livingroom.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';
import { GoldArrowUp, GoldArrowDown } from '../components/GoldArrowButtons';

const EditionsPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);
  const splineRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [arrowsSpinning, setArrowsSpinning] = useState(false);
  // 0: COMMON, 1: SECO/WARWICK, 2: VEOLIA
  const [visibleEdition, setVisibleEdition] = useState(null); // null = hidden
  // For mesh flash on button click
  const [flashMesh, setFlashMesh] = useState(false);
  // Remove first-click jump logic, always cycle

  useEffect(() => {
    const arrowTimer = setTimeout(() => setShowArrow(true), 8000);
    const titleTimer = setTimeout(() => setShowTitle(true), 8000);
    return () => {
      clearTimeout(arrowTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setFadeSplash(true), 5000);
    let removeTimer;
    if (fadeSplash) {
      removeTimer = setTimeout(() => setShowSplash(false), 600); // 600ms fade
    }
    return () => {
      clearTimeout(timer);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, [fadeSplash]);
  return (
    <>
      <Header />
      <RegistrationForm open={formOpen} onClose={() => setFormOpen(false)} />
      <main style={{marginTop: '-50px'}}>
      {/* Page Header */}
      <section className="page-header" style={{position:'relative', overflow:'visible'}}>
        {/* Living Room image as background */}
        <img src={livingRoom} alt="Living Room" style={{
          position:'absolute',
          top: '-1750px',
          left:'57%',
          transform:'translateX(-50%)',
          width:'400%',
          maxWidth:'5000px',
          height:'auto',
          zIndex:1,
          opacity:0.9,
          pointerEvents:'none',
          objectFit:'cover',
          filter:'brightness(0.95) blur(4px)',
          clipPath: 'inset(0 0 15% 0)'
        }} />
        <div className="container" style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'32px', justifyContent:'center', flexWrap:'wrap', position:'relative', zIndex:2}}>
          <div
            ref={splineRef}
            style={{
              flex:'1 1 800px',
              minWidth:'620px',
              maxWidth:'1600px',
              height:'600px',
              display:'flex',
              alignItems:'flex-end',
              justifyContent:'flex-start',
              position:'relative',
              marginLeft:'350px',
              marginBottom:'0px',
              marginTop:'-10px', // move model higher
            }}
          >
            {/* Splash video overlay */}
            {showSplash && (
              <div style={{
                position:'absolute',
                zIndex: 15, // above model
                bottom:'-210px',
                left:'-280px',
                background:'#000',
                width:'120%',
                height:'150%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                opacity: fadeSplash ? 0 : 1,
                transition: 'opacity 0.6s ease',
                borderRadius:'28px',
                overflow:'hidden',
              }}>
                <video src={meshVideo} autoPlay muted playsInline loop style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
            )}
            {/* White square behind the model */}
            <div style={{
              position: 'absolute',
              left: '-40%',
              bottom: '-40%',
              width: '130%',
              height: '150%',
              background: '#fff',
              borderRadius: '32px',
              zIndex: 7,
              boxShadow: '0 8px 48px #0002',
            }} />
            {(showSplash || flashMesh) && (
              <div style={{
                position:'absolute',
                zIndex: 15, // above model
                bottom:'-210px',
                left:'-280px',
                background:'#000',
                width:'120%',
                height:'150%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                opacity: (fadeSplash && !flashMesh) ? 0 : 1,
                transition: 'opacity 0.6s ease',
                borderRadius:'28px',
                overflow:'hidden',
              }}>
                <video src={meshVideo} autoPlay muted playsInline loop style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
            )}

            {/* Hide model when arrowsSpinning is true or edition card is visible */}
            {!arrowsSpinning && visibleEdition === null && (
              <div style={{
                width:'90%',
                height:'110%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                transform:'scale(1.4)',
                transformOrigin:'bottom left',
                marginLeft:'-350px',
                marginBottom:'-310px',
                position: 'relative',
                zIndex: 10,
              }}>
                <iframe frameBorder="0" src="https://my.spline.design/mechanism-8E3rWLDN8xWbn5XZ5yG7oNU0/" width="100%" height="100%" style={{borderRadius:'18px', background:'#fff', border:'none', outline:'none', boxShadow:'none'}} allowFullScreen></iframe>
              </div>
            )}

            {/* Gold arrow buttons on TV */}
            <div style={{
              position: 'absolute',
              zIndex: 30,
              right: '46px',
              bottom: '165px',
              display: 'flex',
              flexDirection: 'column',
              gap: '132px',
              alignItems: 'center',
              pointerEvents: 'auto',
            }}>
              <button
                style={{background:'none', border:'none', padding:0, cursor:'pointer', transform: 'scale(1.7)'}}
                onClick={() => {
                  setVisibleEdition(prev => {
                    const next = prev === null ? 2 : (prev + 1) % 3;
                    setFlashMesh(true);
                    setTimeout(() => setFlashMesh(false), 500);
                    return next;
                  });
                }}
              >
                <GoldArrowUp />
              </button>
              <button
                style={{background:'none', border:'none', padding:0, cursor:'pointer', transform: 'scale(1.7)'}}
                onClick={() => {
                  setVisibleEdition(prev => {
                    const next = prev === null ? 0 : (prev + 2) % 3;
                    setFlashMesh(true);
                    setTimeout(() => setFlashMesh(false), 500);
                    return next;
                  });
                }}
              >
                <GoldArrowDown />
              </button>
            </div>

            {/* Old TV overlay - always in front of splash */}
            <img src={oldTv} alt="old tv" style={{
              position:'absolute',
              zIndex: 20,
              width:'250%',
              maxWidth:'2100px',
              pointerEvents:'none',
              left:'-86%',
              bottom:'-155%',
              transform:'none',
              transformOrigin:'bottom left',
            }} />

            {/* Turnable arrow indicator (appears after 8s) */}
            <style>{`
              @keyframes spin-return {
                0% { transform: rotate(0deg); }
                20% { transform: rotate(30deg); }
                50% { transform: rotate(-30deg); }
                80% { transform: rotate(20deg); }
                100% { transform: rotate(0deg); }
              }
              @keyframes spin-circle {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .spin-return-anim {
                animation: spin-return 2.2s cubic-bezier(.4,1.6,.6,1) infinite;
                display: block;
              }
              .spin-circle-anim {
                animation: spin-circle 1s linear infinite;
                display: block;
              }
              .arrow-fade-in {
                opacity: 0;
                transition: opacity 1.2s cubic-bezier(.4,1.6,.6,1);
              }
              .arrow-fade-in.visible {
                opacity: 1;
              }
            `}</style>
            {/* Hide arrow indicator when arrowsSpinning is true or edition card is visible */}
            {showArrow && !arrowsSpinning && visibleEdition === null && (
              <div
                style={{
                  position: 'absolute',
                  left: '170px',
                  bottom: '-180px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img
                  src={circleArrow}
                  className={`spin-return-anim arrow-fade-in visible`}
                  style={{width:'48px', height:'48px', objectFit:'contain', opacity:0.92, filter:'drop-shadow(0 2px 6px #0002)'}}
                />
              </div>
            )}
            {/* Only show the last Mechaton edition card (VEOLIA) centered in TV */}
            {!arrowsSpinning && visibleEdition !== null && (
              <div style={{
                position: 'absolute',
                top: '60%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
                zIndex: 14, // below mesh overlay
                width: '900px',
                maxWidth: '90vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}>
                {/* All edition cards stacked in the same overlay position */}
                <div style={{position:'relative', width:'100%', maxWidth:'800px', minHeight:'380px'}}>
                  {/* III edycja - COMMON S.A. */}
                  {visibleEdition === 0 && (
                    <div className="edition-card" style={{position:'absolute', top:0, left:0, width:'100%', zIndex:3, opacity:1}}>
                      <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'180px'}}>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={commonLogo} alt="COMMON S.A. logo" style={{maxHeight:'120px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
                        </div>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={commonMechaton} alt="III edycja - COMMON S.A." style={{maxHeight:'160px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
                        </div>
                      </div>
                      <div className="edition-content">
                        <div className="edition-date" style={{fontWeight:700, color:'#630102', fontSize:'1.2rem', marginBottom:'8px'}}>11.12 - 13.12.2024 r.</div>
                        <span className="edition-year" style={{display:'none'}}>III edycja - COMMON S.A.</span>
                        <div style={{fontWeight:700, fontSize:'2rem', color:'#630102', marginBottom:'0.5em'}}>III edycja - COMMON S.A.</div>
                        <div className="edition-topic" style={{color:'#111', fontWeight:'bold', marginTop:'0.2em', marginBottom:'1.5em', fontSize:'1.1rem'}}>
                          Projekt 3D zespołu smarowania gazomierza turbinowego CGT-02, działającego w pozycjach poziomej i pionowej.
                        </div>
                        <div className="edition-stats">
                          <div className="stat-item">
                            <div className="stat-number">15</div>
                            <div className="stat-label">Zespołów</div>
                          </div>
                          <div className="stat-item">
                            <div className="stat-number">69</div>
                            <div className="stat-label">Uczestników</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* II edycja - SECO/WARWICK */}
                  {visibleEdition === 1 && (
                    <div className="edition-card" style={{position:'absolute', top:0, left:0, width:'100%', zIndex:3, opacity:1}}>
                      <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'180px'}}>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={secowarwickLogo} alt="SECO/WARWICK logo" style={{maxHeight:'70px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
                        </div>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={secowarwickMechaton} alt="II edycja - SECO/WARWICK" style={{maxHeight:'160px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
                        </div>
                      </div>
                      <div className="edition-content">
                        <div className="edition-date" style={{fontWeight:700, color:'#630102', fontSize:'1.2rem', marginBottom:'8px'}}>22.11 - 24.11.2023 r.</div>
                        <span className="edition-year" style={{display:'none'}}>II edycja - SECO/WARWICK</span>
                        <div style={{fontWeight:700, fontSize:'2rem', color:'#630102', marginBottom:'0.5em'}}>II edycja - SECO/WARWICK</div>
                        <div className="edition-topic" style={{color:'#111', fontWeight:'bold', marginTop:'0.2em', marginBottom:'1.5em', fontSize:'1.1rem'}}>
                          Koncepcja napędu pionowego dwukomorowego pieca próżniowego CMe 9912 z wanną olejową.
                        </div>
                        <div className="edition-stats">
                          <div className="stat-item">
                            <div className="stat-number">15</div>
                            <div className="stat-label">Zespołów</div>
                          </div>
                          <div className="stat-item">
                            <div className="stat-number">74</div>
                            <div className="stat-label">Uczestników</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* I edycja - VEOLIA (topmost) */}
                  {visibleEdition === 2 && (
                    <div className="edition-card" style={{position:'absolute', top:0, left:0, width:'100%', zIndex:3, opacity:1}}>
                      <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'180px'}}>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={veoliaLogo} alt="VEOLIA logo" style={{maxHeight:'120px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
                        </div>
                        <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                          <img src={veoliaMechaton} alt="I edycja - VEOLIA" style={{maxHeight:'160px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
                        </div>
                      </div>
                      <div className="edition-content">
                        <div className="edition-date" style={{fontWeight:700, color:'#630102', fontSize:'1.2rem', marginBottom:'8px'}}>18.01 - 20.01.2023 r.</div>
                        <span className="edition-year" style={{display:'none'}}>I edycja - VEOLIA</span>
                        <div style={{fontWeight:700, fontSize:'2rem', color:'#630102', marginBottom:'0.5em'}}>I edycja - VEOLIA</div>
                        <div className="edition-topic" style={{color:'#111', fontWeight:'bold', marginTop:'0.2em', marginBottom:'1.5em', fontSize:'1.1rem'}}>
                          Projekt odzysku ciepła z zakładu przemysłowego do sieci wysokoparametrowej DN800.
                        </div>
                        <div className="edition-stats">
                          <div className="stat-item">
                            <div className="stat-number">11</div>
                            <div className="stat-label">Zespołów</div>
                          </div>
                          <div className="stat-item">
                            <div className="stat-number">50</div>
                            <div className="stat-label">Uczestników</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* TV label overlay - centered in front, styled as gold arrow buttons */}
            <div style={{
              position: 'absolute',
              zIndex: 100,
              top: '82px',
              left: '92%',
              transform: 'translateX(-50%)',
              color: '#BFA46A', // gold like arrow buttons
              background: '#2B2417', // dark like button background
              fontWeight: 900,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textShadow: '0 1px 8px #000, 0 0 2px #000',
              fontFamily: 'inherit',
              pointerEvents: 'none',
              userSelect: 'none',
              textTransform: 'uppercase',
              borderRadius: '12px',
              padding: '6px 32px',
              boxShadow: '0 2px 8px #0005',
              border: '3px solid #BFA46A', // gold border
            }}>
              mechaton
            </div>
          </div>
          {showTitle && !arrowsSpinning && visibleEdition === null && (
            <div style={{
              flex:'0 0 320px',
              minWidth:'260px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              position: 'absolute',
              left: '390px',
              top: '120px',
              zIndex: 20,
              width: '320px',
              pointerEvents: 'none',
            }}>
              <style>{`
                @keyframes bounceIn {
                  0% { transform: translateY(40px) scale(0.7); opacity: 0; }
                  60% { transform: translateY(-18px) scale(1.1); opacity: 1; }
                  80% { transform: translateY(6px) scale(0.95); }
                  100% { transform: translateY(0) scale(1); opacity: 1; }
                }
                .bounce-letter {
                  display: inline-block;
                  animation: bounceIn 0.7s cubic-bezier(.5,1.8,.5,1) both;
                }
              `}</style>
              <h1 style={{
                margin:0,
                color:'#111',
                fontSize:'5rem',
                fontWeight:800,
                textAlign:'center',
                letterSpacing:'-1px',
                pointerEvents: 'auto',
                whiteSpace: 'nowrap',
              }}>
                {'Edycje konkursu'.split('').map((char, i) => (
                  <span
                    key={i}
                    className="bounce-letter"
                    style={{ animationDelay: `${0.08 * i + 0.1}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
            </div>
          )}
        </div>
      </section>
    {/* Registration block removed */}
    </main>
    <div style={{marginTop: '464px'}}>
      <Footer />
    </div>
    </>
  );
};

export default EditionsPage;
