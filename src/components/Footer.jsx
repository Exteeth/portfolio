const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const LogoIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer hover-target">
      <div className="footer__logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 900, fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>
        <LogoIconSmall />
        Numchai.
      </div>

      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
        Designed & Engineered by Numchai Boonchan
      </div>
      
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
