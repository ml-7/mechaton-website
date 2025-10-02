import '../index.css';
import mechaton2Voice from '../assets/mechaton2.wav';
import mechaton3Voice from '../assets/mechaton3.mp3';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import commonLogo from '../assets/COMMON.jpg';
import secowarwickLogo from '../assets/SECOWARWICK.jpg';
import veoliaLogo from '../assets/VEOLIA.jpg';
import commonMechaton from '../assets/common-mechaton.jpg';
import secowarwickMechaton from '../assets/secowarwick-mechaton.jpg';
import veoliaMechaton from '../assets/veolia-mechaton.jpg';

const BasicEditionsPage = () => (
  <>
  <Header pushDown />
    <main style={{ minHeight: 'auto', background: '#ffffffff', position: 'relative', left: '-30px', paddingTop: '0px', zIndex: 1 }}>
      <section className="section" style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'60px', width:'100%', paddingTop: '0'}}>
        {/* III edycja - COMMON S.A. */}
        <div className="edition-card" style={{width:'100%', maxWidth:'1200px'}}>
            <div className="edition-image" style={{background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1em', height:'300px'}}>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={commonLogo} alt="COMMON S.A. logo" style={{maxHeight:'100px', maxWidth:'95%', objectFit:'contain', background:'#fff', borderRadius:'12px', boxShadow:'none'}} />
              </div>
              <div style={{flex:'1 1 0', display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                <img src={commonMechaton} alt="III edycja - COMMON S.A." style={{maxHeight:'260px', maxWidth:'95%', objectFit:'contain', borderRadius:'12px', background:'#f5f5f5'}} />
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
              {/* Winners */}
              <div className="edition-winners" style={{marginTop:'18px'}}>
                <div style={{fontWeight:700, color:'#630102', marginBottom:'6px', fontSize:'1.38em'}}>Zwycięzcy:</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #FFD700',
                      color:'#FFD700', fontWeight:900, fontSize:'1.55em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>1</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>WYKORBIONE ÓSEMKI</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Stanisław Janiak, Amelia Kiełbasińska, Jakub Michalski, Piotr Owczarek, Rafał Parfieniuk</span>
                    </span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #C0C0C0',
                      color:'#C0C0C0', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>2</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>DELTA SZWADRON SUPER COOL KOMANDO WILKÓW ALFA</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Damian Adamczyk, Filip Frączkowski, Agnieszka Gręda, Wojciech Walendzik, Szymon Żurawski</span>
                    </span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #cd7f32',
                      color:'#cd7f32', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>3</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>EKIPA SKND3D</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Witold Borkowski, Mikołaj Mizgała, Gracjan Rybiński, Miłosz Ugorny, Jakub Wiśniewski</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Voice recording for Mechaton 3 */}
              <div className="mechaton-audio-block">
                <div className="mechaton-audio-label">Audycja Radia ŻAK z III edycji:</div>
                <audio controls className="mechaton-audio">
                  <source src={mechaton3Voice} type="audio/mp3" />
                  Twoja przeglądarka nie obsługuje odtwarzacza audio.
                </audio>
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
              {/* Winners */}
              <div className="edition-winners" style={{marginTop:'18px'}}>
                <div style={{fontWeight:700, color:'#630102', marginBottom:'6px', fontSize:'1.38em'}}>Zwycięzcy:</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #FFD700',
                      color:'#FFD700', fontWeight:900, fontSize:'1.55em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>1</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>Delta Szwadron Super Cool Komando Wilków Alfa</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Jakub Kadłubaj, Mateusz Matecki, Wojciech Walendzik, Maciej Nowak, Damian Adamczyk</span>
                    </span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #C0C0C0',
                      color:'#C0C0C0', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>2</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>ZAPTASZONE-OCTAVIANY</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Wiktor Lewandowski, Adam Koślin, Filip Chróścikowski, Mateusz Łukaszczyk, Jakub Pawłowski</span>
                    </span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #cd7f32',
                      color:'#cd7f32', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>3</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>
                      <b>2T3ME</b><br/>
                      <span style={{fontWeight:400, color:'#444'}}>Adam Jeżyński, Jakub Dabbous, Marek Cendrowski, Jan Nowiński, Maciej Tutak</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Voice recording for Mechaton 2 */}
              <div className="mechaton-audio-block">
                <div className="mechaton-audio-label">Audycja Radia ŻAK z II edycji:</div>
                <audio controls className="mechaton-audio">
                  <source src={mechaton2Voice} type="audio/wav" />
                  Twoja przeglądarka nie obsługuje odtwarzacza audio.
                </audio>
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
              {/* Winners */}
              <div className="edition-winners" style={{marginTop:'18px'}}>
                <div style={{fontWeight:700, color:'#630102', marginBottom:'6px', fontSize:'1.38em'}}>Zwycięzcy:</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #FFD700',
                      color:'#FFD700', fontWeight:900, fontSize:'1.55em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>1</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>Michał Ozimek, Alicja Tworek, Bartłomiej Dyniak, Kamil Owczarczyk, Remigiusz Pietrzykowski</span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #C0C0C0',
                      color:'#C0C0C0', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>2</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>Maciej Tutak, Jan Nowiński, Adam Jeżyński, Jakub Dabbous</span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
                    <span style={{
                      display:'inline-flex', alignItems:'center', justifyContent:'center',
                      width:'48px', height:'48px', borderRadius:'50%', border:'3px solid #cd7f32',
                      color:'#cd7f32', fontWeight:900, fontSize:'1.38em', background:'#fff',
                      boxShadow:'0 1px 4px #0001', flexShrink:0
                    }}>3</span>
                    <span style={{fontWeight:500, color:'#222', fontSize:'1.13em'}}>Jakub Michalski, Rafał Parfieniuk, Stanisław Janiak, Krzysztof Jachowicz, Amelia Kiełbasińska</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
    <div style={{ position: 'relative', zIndex: 10, marginTop: '-100px' }}>
      <Footer />
    </div>
  </>
);

export default BasicEditionsPage;
