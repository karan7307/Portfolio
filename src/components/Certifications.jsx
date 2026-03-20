import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: "Microsoft Certified: Fabric Data Engineer Associate", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_microsoftcertification-fabricdataengineer-activity-7397611850986733569-rULV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Microsoft Certified: Azure Fundamentals", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_microsoftazure-az900-azurefundamentals-activity-7402313185413873665-KiiO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - Artificial Intelligence 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-nutanixuniversity-certification-activity-7395445985772019712-hYKQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - Multicloud Automation 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-ncpmca6-cloudautomation-activity-7398943646609248256-3AFR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Nutanix Certified Professional - End User Computing 6", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_nutanix-certification-euc-activity-7403103927543427072-wz-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Google Certified: Google Cloud Associate Cloud Engineer", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_certification-googlecloudplatform-googlecloud-activity-7416692483985760256-1iqd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" },
  { name: "Data Fundamentals Certification", url: "https://www.linkedin.com/posts/karan-kushwaha-552829364_ibmskillsbuild-ibm-skillsbuild-activity-7380236463134744577-9rCV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFqJAc4BJAK1Mb7f_kSBYAmmsMiLQ7eQmU0" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', textAlign: 'center' }}>
          Licenses & <span className="heading-gradient">Certifications</span>.
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {certs.map((cert, index) => (
            <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <div style={{ background: 'rgba(147, 51, 234, 0.08)', padding: '0.8rem', borderRadius: '50%', flexShrink: 0 }}>
                <Award size={24} color="var(--accent-2)" />
              </div>
              <div style={{ flexGrow: 1 }}>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-2)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '500', margin: 0 }}>{cert.name}</p>
                    <ExternalLink size={14} style={{ flexShrink: 0, color: 'var(--text-secondary)' }} />
                  </a>
                ) : (
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '500', margin: 0 }}>{cert.name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
