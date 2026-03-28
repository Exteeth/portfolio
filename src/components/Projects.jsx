const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CodeLayerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

/* ─── CSS Art Covers ─────────────────────────────────── */

// Project 1 — Texas Auto: industrial grid with motion lines
const CoverTexasAuto = () => (
  <div className="pcover pcover--texas" aria-hidden="true">
    <div className="pcover__bg" />
    <div className="pcover__grid" />
    <div className="pcover__lines">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="pcover__line" style={{ '--i': i }} />
      ))}
    </div>
    <div className="pcover__circle pcover__circle--1" />
    <div className="pcover__circle pcover__circle--2" />
    <div className="pcover__label">
      <span className="pcover__num">01</span>
      <span className="pcover__tag">Auto Repair</span>
    </div>
    {/* Wrench icon SVG art */}
    <svg className="pcover__art" viewBox="0 0 120 120" fill="none">
      <path d="M90 10 C105 25 105 50 90 65 L30 110 C25 115 15 115 10 110 C5 105 5 95 10 90 L55 30 C70 15 75 -5 90 10Z"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="88" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" opacity="0.4"/>
    </svg>
  </div>
);

// Project 2 — Mid County Lube: speed lines + dashboard feel
const CoverMidCounty = () => (
  <div className="pcover pcover--mid" aria-hidden="true">
    <div className="pcover__bg" />
    <div className="pcover__speedlines">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="pcover__speed" style={{ '--i': i }} />
      ))}
    </div>
    <div className="pcover__dial" />
    <div className="pcover__dial pcover__dial--2" />
    <div className="pcover__label">
      <span className="pcover__num">02</span>
      <span className="pcover__tag">Lube & Service</span>
    </div>
    <svg className="pcover__art" viewBox="0 0 120 120" fill="none">
      {/* Speedometer arc */}
      <path d="M20 80 A50 50 0 1 1 100 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      <path d="M35 80 A35 35 0 1 1 85 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      <line x1="60" y1="80" x2="82" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <circle cx="60" cy="80" r="6" fill="currentColor" opacity="0.5"/>
    </svg>
  </div>
);

// Project 3 — WebKhongKwan: soft gift ribbons + confetti dots
const CoverWebKhongKwan = () => (
  <div className="pcover pcover--kwon" aria-hidden="true">
    <div className="pcover__bg" />
    <div className="pcover__dots">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="pcover__dot" style={{ '--i': i }} />
      ))}
    </div>
    <div className="pcover__ribbon pcover__ribbon--h" />
    <div className="pcover__ribbon pcover__ribbon--v" />
    <div className="pcover__label">
      <span className="pcover__num">03</span>
      <span className="pcover__tag">Gift Platform</span>
    </div>
    <svg className="pcover__art" viewBox="0 0 120 120" fill="none">
      {/* Gift box */}
      <rect x="25" y="50" width="70" height="55" rx="4" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <rect x="20" y="38" width="80" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="60" y1="38" x2="60" y2="105" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      {/* Bow */}
      <path d="M60 38 C50 28 35 25 35 35 C35 42 50 42 60 38Z" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <path d="M60 38 C70 28 85 25 85 35 C85 42 70 42 60 38Z" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    </svg>
  </div>
);

const covers = [CoverTexasAuto, CoverMidCounty, CoverWebKhongKwan];

/* ─────────────────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    title: 'Texas Auto',
    subtitle: 'High-Conversion Auto Repair Hub',
    description: 'A rugged yet approachable web presence engineered to drive local customer traffic. Features custom React components, seamless map integrations, and optimized loading speeds for the Texas market.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Maps API'],
    type: 'Client Project',
    liveUrl: 'https://texas-auto-repair-center.vercel.app/',
  },
  {
    id: 2,
    title: 'Mid County Lube',
    subtitle: 'Responsive Service Experience',
    description: 'A robust, mobile-first landing page built to convert. Leveraging custom dynamic data structures for service menus, it provides a lightning-fast experience across all devices.',
    tech: ['React', 'SEO Optics', 'Responsive UI'],
    type: 'Client Project',
    liveUrl: 'https://midcountylubeandautorepair.vercel.app',
  },
  {
    id: 3,
    title: 'WebKhongKwan',
    subtitle: 'Digital Gifting Platform',
    description: 'A highly interactive platform for creating personalized surprise websites. Built with over 15 rich modular themes and seamless user flows utilizing modern frontend architecture.',
    tech: ['Next.js', 'React Architecture', 'CSS Modules'],
    type: 'Full-Stack Platform',
    liveUrl: 'https://www.webkhongkwan.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <div className="projects__header reveal">
          <h2 className="section__label">03. Selected Works</h2>
          <h3 className="section__title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>
            Proof of Work.
          </h3>
        </div>

        <div className="projects__list">
          {projects.map((project, idx) => {
            const Cover = covers[idx];
            return (
              <article className="project-card reveal" key={project.id}>

                <div className="project-card__visual hover-target">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Visit ${project.title}`}></a>
                  <Cover />
                  <div className="project-card__visit">Visit</div>
                </div>

                <div className="project-card__info reveal-stagger">
                  <span className="project-card__role">
                    <CodeLayerIcon /> {project.type}
                  </span>

                  <h3 className="project-card__title">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover-target">
                      {project.title}
                    </a>
                  </h3>

                  <p className="projects__desc">{project.description}</p>

                  <div className="project-card__tech">
                    {project.tech.map((t, ti) => (
                      <span className="project-card__tag" key={ti}>{t}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '1rem' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero__btn hero__btn--secondary hover-target"
                      style={{ padding: '12px 24px', fontSize: 'var(--text-sm)' }}
                    >
                      View Live Site <ExternalLinkIcon />
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
