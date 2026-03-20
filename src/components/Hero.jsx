import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section animate-fade-in" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="blob blob-1"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', justifyContent: 'space-between' }}>

          <div style={{ flex: '1 1 400px' }}>
            <p style={{ color: 'var(--accent-1)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Computer Science Student | AI & ML Specialist
            </p>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
              Hi, I'm <br />
              <span className="heading-gradient">Karan Kushwaha.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              AI/ML and Cloud Engineer passionate about intelligent systems, multi-cloud automation, and building scalable applications.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={20} />
              </a>
              <a href="/Karan Kushwaha ( Resume ) .pdf" download="Karan Kushwaha ( Resume ) .pdf" className="btn btn-secondary">
                Download Resume
              </a>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                <a href="https://github.com/karan7307" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}>
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/karan-kushwaha-552829364" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}>
                  <Linkedin size={18} />
                </a>
                <a href="mailto:karankushwaha18210@gmail.com" className="btn-secondary" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}>
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 0-30px rgba(99, 102, 241, 0.3)' }}>
              <img src="/My Photo.jpeg" alt="Karan Kushwaha" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
