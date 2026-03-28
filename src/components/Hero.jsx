import { useEffect, useRef } from 'react';

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
);

const tickerItems = [
  'React', 'TypeScript', 'CSS Mastery', 'Vite', 'Responsive Design',
  'Animation', 'Frontend Dev', 'UI/UX', 'Next.js', 'Web Performance',
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      const shape1 = hero.querySelector('.hero__shape--1');
      const shape2 = hero.querySelector('.hero__shape--2');
      if (shape1) shape1.style.transform = `translate(${dx * 30}px, ${dy * 30}px)`;
      if (shape2) shape2.style.transform = `translate(${dx * -20}px, ${dy * -20}px)`;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__visuals" aria-hidden="true">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="hero__inner">
        <div className="hero__badge hero-animate-in" style={{ '--delay': '0.1s' }}>
          <GlobeIcon />
          <span>Available for International Roles</span>
          <span className="hero__badge-dot" aria-hidden="true" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-text hero-animate-in" style={{ '--delay': '0.25s' }}>
              Frontend
            </span>
          </span>
          <span className="hero__title-line hero__title-line--accent">
            <span className="hero__title-text accent hero-animate-in" style={{ '--delay': '0.45s' }}>
              Design <SparkleIcon />
            </span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-text hero-animate-in" style={{ '--delay': '0.65s' }}>
              Elevated.
            </span>
          </span>
        </h1>

        <p className="hero__desc hero-animate-in" style={{ '--delay': '0.85s' }}>
          I'm <strong>Numchai Boonchan</strong> — a frontend developer crafting 
          precise, high-end web experiences. Computer Education student at&nbsp;
          <strong>Khon Kaen University</strong>.
        </p>

        <div className="hero__actions hero-animate-in" style={{ '--delay': '1.05s' }}>
          <a
            className="hero__btn hero__btn--primary hover-target"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Work
            <span className="hero__btn-arrow">→</span>
          </a>
          <a
            href="https://github.com/Exteeth"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary hover-target"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>

        <div className="hero__stats hero-animate-in" style={{ '--delay': '1.2s' }}>
          <div className="hero__stat">
            <span className="hero__stat-num">3+</span>
            <span className="hero__stat-label">Live Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">15+</span>
            <span className="hero__stat-label">Tech Mastered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Committed</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="hero__scroll-cue hero-animate-in hover-target"
        style={{ '--delay': '1.5s' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
      >
        <span className="hero__scroll-cue-track">
          <ArrowDownIcon />
        </span>
        <span className="hero__scroll-cue-label">Scroll</span>
      </button>

      {/* Ticker tape */}
      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="hero__ticker-item" key={i}>
              {item} <span className="hero__ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
