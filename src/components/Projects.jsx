import { useState } from 'react';
import { ExternalLink, Github, Code2, Sparkles, Server } from 'lucide-react';

const projects = [
  {
    title: 'Smart Library Management System',
    description: 'Smart Library Management System is an AI-powered web application that transforms a traditional library into a modern digital platform. The system allows users to search, manage, and access books using intelligent search, voice commands, OCR-based document scanning, multilingual translation, and chatbot support.',
    tags: ['Python Flask', 'Flask-CORS', 'JSON Storage', 'AI Chatbot', 'OCR Scan'],
    icon: Code2,
    github: 'https://github.com/karan7307/Smart-Library-Management-System',
    demo: '#'
  },
  {
    title: 'Azure Document Intelligence',
    description: 'Azure Document Intelligence (earlier called Form Recognizer) is a cloud-based AI service from Microsoft that helps you automatically extract data from documents like PDFs, images, forms, invoices, and receipts.',
    tags: ['Python + Flask', 'Azure Cognitive AI', 'JavaScript', 'CSS3', 'Data Extraction'],
    icon: Sparkles,
    github: 'https://github.com/karan7307/-Document-Intelligence',
    demo: '#'
  },
  {
    title: 'Speech-Translator',
    description: 'Speech Translation Application – React + TailwindCSS + FastAPI + Azure Speech Services. This full-stack application integrates advanced speech processing features using Microsoft Azure Cognitive Services. It provides a modern and user-friendly interface built with React + TailwindCSS and a lightweight backend using FastAPI.',
    tags: ['React', 'FastAPI', 'TailwindCSS', 'Azure Speech AI', 'Python'],
    icon: Server,
    github: 'https://github.com/karan7307/Speech-Translator',
    demo: '#'
  }
];

const TiltProjectCard = ({ project }) => {
  const IconComponent = project.icon;
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 18;
    const rotateY = (x - centerX) / 18;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      className="glass-panel tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        width: '100%',
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ background: 'var(--badge-bg)', padding: '0.65rem', borderRadius: '14px', border: '1px solid var(--badge-border)', display: 'flex' }}>
            <IconComponent size={24} color="var(--accent-1)" />
          </div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>{project.title}</h3>
        </div>
        {project.status && (
          <span style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.25)', borderRadius: '20px', color: 'var(--accent-3)', whiteSpace: 'nowrap', fontWeight: '600' }}>
            {project.status}
          </span>
        )}
      </div>

      <div style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', flexGrow: 1, lineHeight: '1.75', fontSize: '1rem' }}>
        <p>{project.description}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '2rem' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.82rem',
              padding: '0.45rem 0.9rem',
              background: 'var(--badge-bg)',
              border: '1px solid var(--badge-border)',
              borderRadius: '20px',
              color: 'var(--text-primary)',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
        {project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '600', fontSize: '0.98rem' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <Github size={18} /> View Code
          </a>
        )}
        {project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '600', fontSize: '0.98rem' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-3)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1rem', textAlign: 'center' }}>
          Featured <span className="heading-gradient">Projects</span>.
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3.5rem', fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)', maxWidth: '900px', margin: '0 auto 3.5rem auto', lineHeight: '1.7' }}>
          Innovative AI applications, cloud automation frameworks, and intelligent developer tools built with scalable architectures.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.2rem', width: '100%' }}>
          {projects.map((project, index) => (
            <TiltProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
