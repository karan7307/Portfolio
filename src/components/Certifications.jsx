import { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: "Microsoft Certified: SQL AI Developer Associate", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_microsoftcertified-sqlaideveloperassociate-activity-7484594720959209472-bR54?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Microsoft Certified: Fabric Data Engineer Associate", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_microsoftcertification-fabricdataengineer-activity-7397611850986733569-rULV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - Artificial Intelligence 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-nutanixuniversity-certification-activity-7395445985772019712-hYKQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - Multicloud Automation 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-ncpmca6-cloudautomation-activity-7398943646609248256-3AFR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - End User Computing 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-certification-euc-activity-7403103927543427072-wz-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Google Certified: Google Cloud Associate Cloud Engineer", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_certification-googlecloudplatform-googlecloud-activity-7416692483985760256-1iqd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" }
];

const TiltCertCard = ({ cert }) => {
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 12;
    const rotateY = (x - centerX) / 12;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`);
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
        padding: '1.8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        height: '100%',
        width: '100%',
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out'
      }}
    >
      <div style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '0.9rem', borderRadius: '50%', flexShrink: 0, display: 'flex' }}>
        <Award size={26} color="var(--accent-2)" />
      </div>
      <div style={{ flexGrow: 1 }}>
        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', transition: 'color 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-2)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <p style={{ fontSize: '1rem', lineHeight: '1.45', fontWeight: '600', margin: 0 }}>{cert.name}</p>
            <ExternalLink size={16} style={{ flexShrink: 0, color: 'var(--text-secondary)' }} />
          </a>
        ) : (
          <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.45', fontWeight: '600', margin: 0 }}>{cert.name}</p>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Licenses & <span className="heading-gradient">Certifications</span>.
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '1.8rem', width: '100%' }}>
          {certs.map((cert, index) => (
            <TiltCertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
