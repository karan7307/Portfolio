import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass-panel' : ''}`} style={scrolled ? { borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 } : { background: 'transparent', borderBottom: 'transparent' }}>
      <div className="container">
        <a href="#" className="nav-logo">
          Karan<span className="heading-gradient">.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#certifications">Certs</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/Karan Kushwaha ( Resume ) .pdf" download="Karan Kushwaha ( Resume ) .pdf" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
