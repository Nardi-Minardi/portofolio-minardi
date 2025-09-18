import React from 'react';
import Link from 'next/link';
import { ProgressBar } from '.';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const skills = [
    { name: 'PHP', level: 85, color: '#777BB3' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 88, color: '#61DAFB' },
    { name: 'Laravel', level: 82, color: '#FF2D20' },
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3', level: 90, color: '#1572B6' },
    { name: 'Node.js', level: 78, color: '#339933' },
    { name: 'MySQL', level: 80, color: '#4479A1' }
  ];

  const services = [
    { name: 'Web Development', icon: 'fas fa-code' },
    { name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', icon: 'fas fa-palette' },
    { name: 'System Architecture', icon: 'fas fa-sitemap' }
  ];

  return (
    <footer className="modern-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            

            {/* Services */}
            <div className="footer-services">
              <h4 className="footer-section-title">
                <i className="fas fa-rocket"></i>
                Services
              </h4>
              
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <span className="service-name">{service.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="cta-section">
                <p className="cta-text">Ready to start your project?</p>
                <Link href="/kontak" className="cta-button">
                  <span>Let&apos;s Talk</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Skills */}
            <div className="footer-skills">
              <h4 className="footer-section-title">
                <i className="fas fa-chart-line"></i>
                Technical Skills
              </h4>
              
              <div className="skills-showcase">
                {skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="skill-showcase-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© {currentYear} Minardi.</p>
            </div>
            
            
            <div className="footer-badge">
              <span className="badge-text">Available for projects</span>
              <div className="status-indicator active"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
