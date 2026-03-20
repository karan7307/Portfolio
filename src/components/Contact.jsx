import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '4rem' }}>
      <div className="blob blob-2"></div>
      <div className="container">
        <div className="glass-panel" style={{ padding: '4rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            Let's <span className="heading-gradient">Connect</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            I'm open to internships, entry-level positions, and freelance opportunities in AI/ML, cloud automation, or infrastructure engineering.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
            <a href="mailto:karankushwaha18210@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
              <Mail size={24} color="var(--accent-1)" /> karankushwaha18210@gmail.com, karankushwaha3481@gmail.com
            </a>
            <div style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
              <MapPin size={24} color="var(--accent-3)" /> SGPGI, Lucknow, Uttar Pradesh, India
            </div>
          </div>

          <a href="mailto:karankushwaha18210@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
