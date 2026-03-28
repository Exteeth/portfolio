// Minimal SVGs
const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skills__icon">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ToolsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skills__icon">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skills__icon">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Arch',
      icon: <FrontendIcon />,
      skills: ['React & Next.js', 'JavaScript / TypeScript', 'CSS Modules / Tailwind', 'Vite / Webpack Build'],
    },
    {
      title: 'Design & UX',
      icon: <DesignIcon />,
      skills: ['Figma to React', 'Responsive Container Queries', 'Web Animations (Framer/CSS)', 'Accessible Interfaces'],
    },
    {
      title: 'Workflow',
      icon: <ToolsIcon />,
      skills: ['Git / GitHub', 'Vercel Deployment', 'Performance Optimization', 'SEO Fundamentals'],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <div className="skills__header reveal">
          <h2 className="section__label">02. Toolkit</h2>
          <h3 className="section__title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>
            The stack I shape with.
          </h3>
        </div>

        <div className="skills__grid">
          {categories.map((cat, ci) => (
            <div className="skills__card hover-target reveal-stagger" key={ci} style={{ animationDelay: `${ci * 0.1}s` }}>
              {cat.icon}
              <h3 className="skills__title">{cat.title}</h3>
              <ul style={{ listStyle: 'none' }}>
                {cat.skills.map((skill, si) => (
                  <li className="skills__item" key={si}>
                    <CheckIcon />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
