import React, { useState, useRef, useEffect } from 'react';
import veoliaLogo from '../assets/VEOLIA.jpg';
import secowarwickLogo from '../assets/SECOWARWICK.jpg';
import commonLogo from '../assets/COMMON.jpg';
import commonMechaton from '../assets/common-mechaton.jpg';
import secowarwickMechaton from '../assets/secowarwick-mechaton.jpg';
import veoliaMechaton from '../assets/veolia-mechaton.jpg';
import oldTv from '../assets/old_tv_no_bg.png';
import meshVideo from '../assets/mesh.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';

const EditionsPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);
  const splineRef = useRef(null);

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
      <section className="page-header">
        <div className="container" style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'32px', justifyContent:'center', flexWrap:'wrap'}}>
          <div
            ref={splineRef}
            style={{flex:'1 1 800px', minWidth:'620px', maxWidth:'1600px', height:'800px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', marginLeft:'-20px'}}
          >
            {/* Splash video overlay */}
            {showSplash && (
              <div style={{
                position:'absolute',
                zIndex:10,
                top:140,
                left:50,
                background:'#000',
                width:'80%',
                height:'60%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                opacity: fadeSplash ? 0 : 1,
                transition: 'opacity 0.6s ease'
              }}>
                <video src={meshVideo} autoPlay muted playsInline style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
            )}
            <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', transform:'scale(0.7)', transformOrigin:'center', marginLeft:'-100px'}}>
              <iframe frameBorder="0" src="https://my.spline.design/mechanism-8E3rWLDN8xWbn5XZ5yG7oNU0/" width="100%" height="100%" style={{borderRadius:'18px', background:'#fff', border:'none', outline:'none', boxShadow:'none'}} allowFullScreen></iframe>
            </div>
            {/* Old TV overlay - always in front of splash */}
            <img src={oldTv} alt="old tv" style={{position:'absolute', zIndex: 20, width:'200%', maxWidth:'1300px', pointerEvents:'none', left:'50%', transform:'translate(-50%, 1%)', transformOrigin:'center'}} />
          </div>
          <div style={{flex:'0 0 320px', minWidth:'260px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <h1 style={{margin:0, color:'#111', fontSize:'3.2rem', fontWeight:800, textAlign:'center', letterSpacing:'-1px'}}>Edycje konkursu</h1>
          </div>
        </div>
      </section>

      {/* Upcoming Edition Callout - now below the red title box */}
  <section className="upcoming-edition-callout" style={{background:'#fff', boxShadow:'0 2px 12px #0001', margin:'32px auto 0 auto', maxWidth:'1000px', width:'100%', padding:'32px 24px', display:'flex', flexDirection:'column', alignItems:'center', gap:'18px', justifyContent:'center'}}>
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
        
      </section>
      {/* Mechaton Edition Boxes */}
  <section className="section" style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'64px', width:'100%'}}>
        {/* III edycja - COMMON S.A. */}
        <div className="edition-card" style={{width:'100%', maxWidth:'1200px'}}>
            <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'300px'}}>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={commonLogo} alt="COMMON S.A. logo" style={{maxHeight:'200px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
              </div>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={commonMechaton} alt="III edycja - COMMON S.A." style={{maxHeight:'260px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
              </div>
            </div>
            <div className="edition-content">
              <div className="edition-date" style={{fontWeight:700, color:'#630102', fontSize:'1.2rem', marginBottom:'8px'}}>11.12 - 13.12.2024 r.</div>
              {/* Removed edition name from left, now only in bold below */}
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

        {/* II edycja - SECO/WARWICK */}
        <div className="edition-card" style={{width:'100%', maxWidth:'1200px'}}>
            <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'300px'}}>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={secowarwickLogo} alt="SECO/WARWICK logo" style={{maxHeight:'70px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
              </div>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={secowarwickMechaton} alt="II edycja - SECO/WARWICK" style={{maxHeight:'260px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
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

        {/* I edycja - VEOLIA */}
        <div className="edition-card" style={{width:'100%', maxWidth:'1200px'}}>
            <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'300px'}}>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={veoliaLogo} alt="VEOLIA logo" style={{maxHeight:'200px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
              </div>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={veoliaMechaton} alt="I edycja - VEOLIA" style={{maxHeight:'260px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
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
      </section>




    </main>
    <Footer />
    </>
  );
};

export default EditionsPage;
