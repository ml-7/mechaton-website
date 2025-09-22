# Integracja elementów 3D ze Spline w React

## Metoda 1: Komponent iframe (najprostsza)

Stworzyłem komponent `SplineComponent.jsx` który możesz użyć tak:

```jsx
import SplineComponent from '../components/SplineComponent';

// W komponencie:
<SplineComponent 
  sceneUrl="https://my.spline.design/TWOJ_PROJEKT_ID"
  width="100%"
  height="500px"
  className="spline-hero"
/>
```

## Metoda 2: Biblioteka @splinetool/react-spline

1. Zainstaluj bibliotekę:
```bash
npm install @splinetool/react-spline
```

2. Użyj w komponencie:
```jsx
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/TWOJ_PROJEKT_ID/scene.splinecode" />
    </div>
  );
}
```

## Przykłady integracji:

### 1. Hero section z 3D modelem:
```jsx
// W HomePage.jsx
<section className="hero">
  <div className="container">
    <div className="hero-content">
      <div className="hero-text">
        <h1>MECHATON</h1>
        <p>Innowacyjny konkurs inżynierski...</p>
      </div>
      <div className="hero-3d">
        <SplineComponent 
          sceneUrl="https://my.spline.design/robotarm-copy-xyz"
          height="600px"
        />
      </div>
    </div>
  </div>
</section>
```

### 2. Interaktywny model w sekcji "O nas":
```jsx
<div className="about-content">
  <div className="about-text">
    <p>Mechaton to prestiżowy konkurs...</p>
  </div>
  <div className="about-3d">
    <SplineComponent 
      sceneUrl="https://my.spline.design/mechanicalgears-xyz"
      height="400px"
    />
  </div>
</div>
```

## Style CSS dla Spline:

```css
.spline-hero {
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-3d {
  position: relative;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-3d {
    height: 300px;
  }
}
```

## Popularne modele ze Spline Community:

1. **Roboty i mechanizmy**: Szukaj "robot arm", "mechanical", "gears"
2. **Elektronika**: "circuit board", "chip", "electronics"
3. **Inżynieria**: "engine", "turbine", "blueprint"

## Performance tips:

1. Ustaw odpowiednią wysokość/szerokość
2. Użyj `loading="lazy"` dla iframe
3. Rozważ preloader dla większych modeli
4. Dodaj fallback dla urządzeń mobilnych

## Gdzie znaleźć modele:

- app.spline.design/community
- Szukaj tagów: #engineering #mechanical #tech #robot
- Filtruj według licencji (darmowe/płatne)