// This SVG is a gold arrow for use as an up or down button overlay
// You can use this as a React component or as an <img src> if you prefer

export const GoldArrowUp = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" stroke="#BFA46A" strokeWidth="2" fill="#2B2417" />
    <path d="M24 14 L34 28 H14 Z" fill="#BFA46A" />
  </svg>
);

export const GoldArrowDown = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" stroke="#BFA46A" strokeWidth="2" fill="#2B2417" />
    <path d="M24 34 L34 20 H14 Z" fill="#BFA46A" />
  </svg>
);
