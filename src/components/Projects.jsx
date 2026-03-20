import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Code Review & Bug Detection',
    description: 'An AI-powered code analysis tool built with Fast API and React. Integrates LLMs (GPT-4 / Llama-3) to detect bugs, security issues, and performance problems. Features auto-fix suggestions, code-quality scoring, and a Monaco-based editor.',
    tags: ['Python', 'FastAPI', 'React', 'LLMs', 'GPT-4'],
    github: 'https://github.com/karan7307',
    demo: '#'
  },
  {
    title: 'Digital Content Platform',
    description: 'SEO-optimized platform for publishing tech and lifestyle articles, improving organic reach across diverse business sectors.',
    tags: ['React', 'Node.js', 'SEO'],
    github: 'https://github.com/karan7307',
    demo: '#'
  },
  {
    title: 'AI Software Engineer System',
    description: 'AI Software Engineer System is an advanced AI platform that automates software development using multiple AI agents to design, generate, test, and deploy applications, functioning like a virtual software engineering team.',
    tags: ['AI / LLM Models', 'Multi-Agent AI', 'Python & FastAPI', 'React & Next.js', 'PostgreSQL & MongoDB'],
    status: 'Work in progress',
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Projects<span className="heading-gradient"> </span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                {project.status && (
                  <span style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '20px', color: 'var(--accent-3)', whiteSpace: 'nowrap', fontWeight: '500' }}>
                    {project.status}
                  </span>
                )}
              </div>

              <div style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.7', fontSize: '0.95rem' }}>
                {project.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: i !== project.description.split('\n\n').length - 1 ? '1rem' : 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '20px', color: 'var(--accent-1)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '500' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-1)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <Github size={20} /> <span style={{ fontSize: '0.95rem' }}>Code</span>
                  </a>
                )}
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '500' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-3)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <ExternalLink size={20} /> <span style={{ fontSize: '0.95rem' }}>Live demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
