const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 44, height: 44, opacity: 0.1 }}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export default function About() {
  const stats = [
    { value: '3+', label: 'Shipped Products' },
    { value: '15+', label: 'Tech Stack Mastery' },
    { value: '100%', label: 'Commitment' },
  ];

  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <div className="about__grid">
          
          <div className="about__content reveal-left">
            <h2 className="section__label">01. Who I am</h2>
            <h3 className="section__title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>
              Engineering Beauty.
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              I'm Numchai Boonchan, a Front-End Developer studying Computer Education at Khon Kaen University. I specialize in building responsive, accessible, and uniquely engaging digital experiences.
            </p>
            <p>
              My philosophy is simple: write clean code, design without compromise, and create interfaces that feel alive. From robust auto service platforms to delicate gifting websites, I deliver production-ready React applications with high aesthetic standards.
            </p>

            <div className="about__stats">
              {stats.map((stat, i) => (
                <div className="about__stat" key={i}>
                  <div className="about__stat-num hover-target">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual reveal-right">
            <div className="about__decoration"></div>
            <div className="about__card hover-target">
              <img
                src="/profile.webp"
                alt="Numchai Boonchan"
                className="about__card-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="about__card-fallback" 
                style={{ 
                  display: 'none', 
                  height: '100%', 
                  width: '100%', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexDirection: 'column',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-muted)'
                }}
              >
                <CodeIcon />
                <span style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>[ public/profile.webp ]</span>
              </div>
              
              <div className="about__card-overlay">
                <span className="about__card-text">Numchai Boonchan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
