import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => (
  <>
    <Header />
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Strona główna</a> <span>›</span> O Mechatonie
          </div>
          <h1>O Mechatonie</h1>
          <p>Poznaj ideę i cele ogólnopolskiego konkursu inżynierskiego organizowanego przez Wydział Mechaniczny Politechniki Łódzkiej.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Czym jest Mechaton?</h2>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <p>Mechaton to prestiżowy konkurs inżynierski organizowany przez Wydział Mechaniczny Politechniki Łódzkiej, który łączy w sobie elementy mechaniki, automatyki i elektroniki. Jest to przestrzeń, gdzie studenci i pasjonaci techniki mogą zaprezentować swoje umiejętności, kreatywność i innowacyjność.</p>
              
              <p>Konkurs ma formę maratonu projektowego (hackathonu), podczas którego zespoły mają określony czas na zaprojektowanie, zbudowanie i zaprezentowanie działającego prototypu rozwiązującego postawione przed nimi zadanie inżynierskie.</p>
              
              <p>Mechaton to nie tylko rywalizacja, ale przede wszystkim możliwość zdobycia unikalnego doświadczenia, współpracy w interdyscyplinarnych zespołach oraz nawiązania kontaktów z przedstawicielami przemysłu i potencjalnymi pracodawcami.</p>
            </div>
            <div className="content-image">
              <img src="https://via.placeholder.com/600x400" alt="Zespół pracujący podczas Mechatonu" style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Cele i misja</h2>
          </div>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Rozwój umiejętności</h3>
              <p>Doskonalenie praktycznych umiejętności inżynierskich i praca z nowoczesnymi technologiami pod okiem doświadczonych mentorów.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Innowacyjność</h3>
              <p>Wspieranie innowacyjnego myślenia i kreatywnego podejścia do rozwiązywania złożonych problemów technicznych.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Współpraca</h3>
              <p>Promowanie współpracy interdyscyplinarnej i umiejętności pracy zespołowej wśród przyszłych inżynierów.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Transfer wiedzy</h3>
              <p>Budowanie mostu między środowiskiem akademickim a przemysłem oraz wymiana wiedzy i doświadczeń.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Rozwój talentów</h3>
              <p>Identyfikacja i wspieranie młodych talentów inżynierskich, którzy będą kształtować przyszłość polskiego przemysłu.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon"></div>
              <h3>Wsparcie przemysłu</h3>
              <p>Tworzenie platformy do nawiązywania kontaktów między studentami a potencjalnymi pracodawcami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Dla kogo jest Mechaton?</h2>
          </div>
          <div className="content-grid">
            <div className="content-image">
              <img src="https://via.placeholder.com/600x400" alt="Uczestnicy Mechatonu" style={{width: '100%', height: 'auto'}} />
            </div>
            <div className="content-text">
              <p>Mechaton jest przeznaczony przede wszystkim dla:</p>
              
              <ul>
                <li><strong>Studentów kierunków technicznych</strong> - informatyki, mechaniki, automatyki, elektroniki, mechatroniki i pokrewnych</li>
                <li><strong>Młodych inżynierów</strong> - absolwentów, którzy chcą rozwijać swoje umiejętności praktyczne</li>
                <li><strong>Pasjonatów technologii</strong> - wszystkich, którzy interesują się nowoczesnymi rozwiązaniami inżynierskimi</li>
                <li><strong>Startupów technologicznych</strong> - młodych firm poszukujących możliwości prezentacji swoich pomysłów</li>
              </ul>
              
              <p>W konkursie mogą brać udział zespoły składające się z 2-4 osób. Przynajmniej połowa członków zespołu musi mieć status studenta uczelni wyższej. Nie ma ograniczeń co do kierunku studiów czy uczelni - Mechaton jest otwarty dla wszystkich kreatywnych umysłów!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Korzyści z udziału</h2>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <p>Udział w Mechatonie to wyjątkowa okazja, która przynosi liczne korzyści:</p>
              
              <ul>
                <li><strong>Praktyczne doświadczenie</strong> - możliwość pracy nad rzeczywistym projektem inżynierskim</li>
                <li><strong>Mentoring ekspertów</strong> - wsparcie doświadczonych inżynierów i naukowców</li>
                <li><strong>Atrakcyjne nagrody</strong> - wartościowe nagrody rzeczowe i finansowe dla najlepszych zespołów</li>
                <li><strong>Kontakty branżowe</strong> - networking z przedstawicielami firm technologicznych</li>
                <li><strong>Możliwość staży i praktyk</strong> - dla wyróżniających się uczestników</li>
                <li><strong>Rozpoznawalność</strong> - udział w prestiżowym konkursie uznawanym w środowisku inżynierskim</li>
                <li><strong>Rozwój umiejętności miękkich</strong> - praca zespołowa, zarządzanie czasem, prezentacja projektów</li>
              </ul>
              
              <p>Ponadto, uczestnictwo w Mechatonie to doskonały punkt w CV, który wyróżni Cię na rynku pracy i pokaże przyszłym pracodawcom Twoje zaangażowanie oraz praktyczne umiejętności.</p>
            </div>
            <div className="content-image">
              <img src="https://via.placeholder.com/600x400" alt="Nagrody w konkursie Mechaton" style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Dołącz do Mechatonu!</h2>
          <p>Nie przegap szansy na rozwój swoich umiejętności inżynierskich, zdobycie cennego doświadczenia i atrakcyjnych nagród.</p>
          <a href="/regulamin/REGULAMIN_MECHATON.pdf" className="btn">Poznaj regulamin i weź udział</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;
