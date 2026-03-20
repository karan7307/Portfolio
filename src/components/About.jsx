import { Code, Layout, Server, Database, Brain, Cloud, Terminal, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ maxWidth: '950px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              About <span className="heading-gradient">Me</span>.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Microsoft, Nutanix, and Google Cloud multi-certified Computer Science student specializing in Artificial Intelligence and Machine Learning with 1 year of freelance content creation and web design experience. Proven ability to deliver SEO optimized content and digital assets while developing technical expertise in cloud computing, multicloud automation, hyperconverged infrastructure, data engineering, and AI applications. Seeking to leverage strong technical skills, multiple industry certifications, and creative problem-solving abilities to contribute to innovative projects in AI/ML, cloud automation, or infrastructure engineering roles.
            </p>

            <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.08)', padding: '1rem', borderRadius: '12px' }}>
                <GraduationCap size={32} color="var(--accent-1)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Chandigarh University</h3>
                <p style={{ color: 'var(--accent-2)', fontWeight: '500', marginBottom: '0.5rem' }}>Bachelor of Technology in Computer Science and Engineering (AI & ML Specialization)</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>July 2025 – July 2029 | Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Technical <span className="heading-gradient">Skills.</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Terminal size={20} /> Programming & Web Dev</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Python (FastAPI, REST API), C/C++ (DSA), React, Node.js, JavaScript, HTML/CSS, Responsive Design, Infrastructure as Code (IaC)</p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Brain size={20} /> AI & Machine Learning</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Azure Cognitive Services, Computer Vision, Generative AI, Nutanix AI Platform, LLMs, Prompt Engineering, NLP Basics</p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cloud size={20} /> Cloud & Infra</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Microsoft Azure & Fabric, Google Cloud Platform, Nutanix HCI, Multicloud Automation, VDI/DaaS, Nutanix Calm, Orchestration</p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={20} /> Data & Other Tools</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Microsoft Fabric Data Engineering, Data Pipelines, MongoDB, MySQL, SEO Optimization, Azure Portal, GCP Console, Prism</p>
              </div>

            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Soft Skills:</strong> Creative Problem Solving • Team Collaboration • Client Communication • Project Management • Time Management
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
