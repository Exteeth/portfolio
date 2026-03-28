import { useState } from 'react';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:numchaigamer@gmail.com?subject=Inquiry from ${form.name} (Portfolio)&body=${encodeURIComponent(form.message)}%0A%0AReply to: ${form.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <div className="contact__header reveal">
          <h2 className="section__label">04. Next Steps</h2>
          <h3 className="section__title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>
            Let's build together.
          </h3>
          <p>
            Currently seeking international front-end developer roles. 
            Have an ambitious project or a position on your team? Let me know.
          </p>
        </div>

        <div className="contact__grid">
          
          {/* Form */}
          <div className="contact__card reveal-left">
            <form onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Name</label>
                <input
                  className="contact__input hover-target"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email</label>
                <input
                  className="contact__input hover-target"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea
                  className="contact__input contact__textarea hover-target"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Numchai, we have an opening for a React Developer..."
                  required
                />
              </div>

              <button type="submit" className="contact__submit hover-target">
                Send Message <SendIcon />
              </button>
            </form>
          </div>

          {/* Info list */}
          <div className="contact__info reveal-right">
            <div className="contact__info-list">
              
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MailIcon />
                </div>
                <div className="contact__info-text">
                  <h4>Email</h4>
                  <a href="mailto:numchaigamer@gmail.com" className="hover-target">numchaigamer@gmail.com</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <GithubIcon />
                </div>
                <div className="contact__info-text">
                  <h4>GitHub Profile</h4>
                  <a href="https://github.com/Exteeth" target="_blank" rel="noopener noreferrer" className="hover-target">@Exteeth</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPinIcon />
                </div>
                <div className="contact__info-text">
                  <h4>Location / Education</h4>
                  <p>Khon Kaen Univ. | Open to Relocate</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
