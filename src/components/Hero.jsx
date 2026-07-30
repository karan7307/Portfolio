import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'AI & ML Specialist',
  'Multicloud Automation Engineer',
  'Data & Cloud Architect'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 90);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="section animate-fade-in" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '110px', paddingBottom: '3rem', position: 'relative' }}>
      {/* Dynamic Theme Floating Ambient Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2" style={{ top: '20%', right: '-15%', width: '40vw', height: '40vw', opacity: 0.25 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem', justifyContent: 'space-between' }}>

          <div style={{ flex: '1 1 55%', minWidth: '320px' }}>
            <p style={{ color: 'var(--accent-1)', fontWeight: '600', marginBottom: '1.2rem', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '0.45rem 1.2rem', borderRadius: '20px', fontSize: '0.88rem', boxShadow: '0 2px 15px var(--glass-glow)' }}>
              <span>✨</span> Computer Science Student | <span style={{ fontWeight: 700 }}>{currentText}</span><span className="typewriter-cursor">|</span>
            </p>
            
            <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.8rem)', marginBottom: '1.5rem', letterSpacing: '-1.5px', fontWeight: 900, lineHeight: 1.1 }}>
              Hi, I'm <br />
              <span className="heading-gradient" style={{ filter: 'drop-shadow(0 0 35px var(--glass-glow))' }}>Karan Kushwaha.</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '850px', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              AI/ML and Cloud Engineer passionate about intelligent systems, multi-cloud automation, and building scalable applications. Multi-certified across Microsoft, Nutanix, and Google Cloud.
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', overflow: 'hidden', position: 'relative' }}>
                <span>View Work</span> <ArrowRight size={20} />
              </a>
              <a href="/Karan Kushwaha ( Resume ) .pdf" download="Karan Kushwaha ( Resume ) .pdf" className="btn btn-secondary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
                Download Resume
              </a>
              
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', marginLeft: '0.5rem' }}>
                <a href="https://github.com/karan7307" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.85rem', borderRadius: '50%', display: 'flex' }} title="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/karan-kushwaha-552829364" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.85rem', borderRadius: '50%', display: 'flex' }} title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:karankushwaha18210@gmail.com" className="btn-secondary" style={{ padding: '0.85rem', borderRadius: '50%', display: 'flex' }} title="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%', width: 'clamp(260px, 24vw, 380px)', height: 'clamp(260px, 24vw, 380px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 0 50px var(--glass-glow)', animation: 'float 12s infinite ease-in-out' }}>
              <img src="/My Photo.jpeg" alt="Karan Kushwaha" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
