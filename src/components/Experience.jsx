import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Freelance Content Writer & Digital Designer",
    company: "Freelance Platform",
    duration: "January 2025 – December 2025",
    location: "Uttar Pradesh, India",
    points: [
      "Authored 100+ SEO-optimized blog articles and web content for 20+ clients across technology, lifestyle, and business sectors, increasing organic traffic by an average of 35%.",
      "Collaborated with development teams to create responsive website layouts and content strategies, resulting in improved user experience and conversion rates.",
      "Conduct keyword research and implemented on-page SEO best practices to improve search engine rankings for client websites."
    ]
  },
  {
    role: "Fresher",
    company: "Fiverr For Business",
    duration: "January 2025 – November 2025",
    location: "Uttar Pradesh, India",
    points: [
      "Currently developing AI-powered content solutions and exploring machine learning applications in digital marketing.",
      "Building portfolio of technical projects integrating artificial intelligence with creative content development.",
      "Engaging with clients to understand business requirements and deliver tailored digital solutions."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Professional <span className="heading-gradient">Experience</span>.
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '30px', background: 'var(--bg-color)', padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                <Briefcase size={20} color="var(--accent-1)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '0.5rem' }}>{exp.role}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--accent-2)', fontWeight: '600' }}>{exp.company}</span>
                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>{exp.duration}</span>
                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>{exp.location}</span>
              </div>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
