// Custom SVGs
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const DownArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__visuals">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>

      <div className="hero__inner">
        <div className="hero__badge hero-animate-in" style={{ '--delay': '0.1s' }}>
          <GlobeIcon />
          Available Worldwide
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-text hero-animate-in" style={{ '--delay': '0.3s' }}>Frontend Design</span>
          </span>
          <br />
          <span className="hero__title-line">
            <span className="hero__title-text accent hover-target hero-animate-in" style={{ '--delay': '0.5s' }}>
              Elevated. <StarIcon />
            </span>
          </span>
        </h1>

        <p className="hero__desc hero-animate-in" style={{ '--delay': '0.7s' }}>
          I'm <strong>Numchai Boonchan</strong>, a frontend developer blending precise 
          code with high-end aesthetic interactions. Currently studying Computer Education at Khon Kaen University.
        </p>

        <div className="hero__actions hero-animate-in" style={{ '--delay': '0.9s' }}>
          <a
            className="hero__btn hero__btn--primary hover-target"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Work
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
      </div>

      <div
        className="hero__scroll-arrow hover-target"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <DownArrowIcon />
      </div>
    </section>
  );
}
