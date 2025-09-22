import React from 'react';
import veoliaLogo from '../assets/VEOLIA.jpg';
import secowarwickLogo from '../assets/SECOWARWICK.jpg';
import commonLogo from '../assets/COMMON.jpg';
import commonMechaton from '../assets/common-mechaton.jpg';
import secowarwickMechaton from '../assets/secowarwick-mechaton.jpg';
import veoliaMechaton from '../assets/veolia-mechaton.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditionsPage = () => (
  <>
    <Header />
    <main>
      {/* Page Header */}

      {/* Top Title */}
      <section className="page-header">
        <div className="container">
          <h1>Edycje konkursu</h1>
        </div>
      </section>

      {/* Mechaton Edition Boxes */}

      <section className="section">
        <div className="container">
          {/* III edycja - COMMON S.A. */}
          <div className="edition-card">
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
          <div className="edition-card">
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
          <div className="edition-card">
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
        </div>
      </section>




    </main>
    <Footer />
  </>
);

export default EditionsPage;
