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

const projects = [
  {
    id: 1,
    title: 'Texas Auto',
    subtitle: 'High-Conversion Auto Repair Hub',
    description: 'A rugged yet approachable web presence engineered to drive local customer traffic. Features custom React components, seamless map integrations, and optimized loading speeds for the Texas market.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Maps API'],
    type: 'Client Project',
    liveUrl: 'https://texas-auto-repair-center.vercel.app/',
    imgUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Mid County Lube',
    subtitle: 'Responsive Service Experience',
    description: 'A robust, mobile-first landing page built to convert. Leveraging custom dynamic data structures for service menus, it provides a lightning-fast experience across all devices.',
    tech: ['React', 'SEO Optics', 'Responsive UI'],
    type: 'Client Project',
    liveUrl: 'https://midcountylubeandautorepair.vercel.app',
    imgUrl: 'https://images.unsplash.com/photo-1598460613865-68045610ec1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'WebKhongKwan',
    subtitle: 'Digital Gifting Platform',
    description: 'A highly interactive platform for creating personalized surprise websites. Built with over 15 rich modular themes and seamless user flows utilizing modern frontend architecture.',
    tech: ['Next.js', 'React Architecture', 'CSS Modules'],
    type: 'Full-Stack Platform',
    liveUrl: 'https://www.webkhongkwan.com/',
    imgUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
          {projects.map((project) => (
            <article className={`project-card reveal`} key={project.id}>
              
              <div className="project-card__visual hover-target">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Visit ${project.title}`}></a>
                <img src={project.imgUrl} alt={project.title} loading="lazy" />
                
                {/* The Magic Hover Button - CSS scales this up on hover */}
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
                    <span className="project-card__tag" key={ti}>
                      {t}
                    </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
