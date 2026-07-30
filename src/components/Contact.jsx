import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '4rem' }}>
      <div className="blob blob-2"></div>
      <div className="container">
        <div className="glass-panel" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', textAlign: 'center', width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.2rem' }}>
            Let's <span className="heading-gradient">Connect</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', maxWidth: '850px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
            I'm open to full-time roles, internships, entry-level positions, and freelance opportunities in AI/ML, cloud automation, or infrastructure engineering. Feel free to reach out anytime!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '3.5rem' }}>
            <a
              href="mailto:karankushwaha18210@gmail.com"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--badge-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={22} color="var(--accent-1)" />
              <span>karankushwaha18210@gmail.com</span>
            </a>

            <div
              style={{
                color: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px'
              }}
            >
              <MapPin size={22} color="var(--accent-3)" />
              <span>SGPGI, Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>

          <a href="mailto:karankushwaha18210@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.15rem' }}>
            Get In Touch <Send size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
