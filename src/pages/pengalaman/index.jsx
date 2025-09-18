import MainLayout from '@/layouts/mainLayout';
import React from 'react';

const Pengalaman = () => {
  const experiences = [
    {
      id: 1,
      period: "Jan 2024 - Jun 2024",
      company: "Voice Sonics Labs",
      position: "Frontend Developer",
      description: [
        "Implementation UI/UX to Web",
        "Integration CI/CD environment AWS",
        "Integration Chat GPT 3.5 turbo (generate image to text)",
        "Integration whisper to transcribe video (dubbing)",
        "Integration Oauth2 google firebase and google account",
        "Development Frontend application with React, Next js, Redux, Next/Ui, Tailwind"
      ],
      technologies: [
        "Next.js", "React", "JavaScript", "Redux", "Tailwind CSS", 
        "ChatGPT", "Google Cloud", "AWS", "Firebase", "Node.js", "Git"
      ],
      type: "current"
    },
    {
      id: 2,
      period: "Mar 2021 - Mar 2024",
      company: "NUWSP",
      position: "MIS Specialist",
      description: [
        "Fullstack development web application",
        "Fullstack development mobile application",
        "Menyiapkan/mengelola sistem informasi web",
        "Menyiapkan/mengelola sistem manajemen server"
      ],
      technologies: [
        "Laravel", "React", "React Native", "PHP", "CodeIgniter", "MySQL",
        "JavaScript", "Node.js", "Socket.io", "AWS", "Firebase", "Bootstrap"
      ],
      type: "previous"
    },
    {
      id: 3,
      period: "Mar 2019 - Feb 2021",
      company: "PT 360 Consulting",
      position: "Web Programmer",
      description: [
        "Development Program Inventory",
        "Migration Oracle Database to PostgreSQL",
        "Migration Program Desktop to Web Application"
      ],
      technologies: [
        "Laravel", "JavaScript", "jQuery", "PostgreSQL", "HTML5", 
        "CSS3", "Bootstrap", "Git", "Visual Studio Code"
      ],
      type: "previous"
    }
  ];

  return (
    <MainLayout>
      <section className='experience-section'>
        <div className='container'>
          <div className="experience-header">
            <h1 className="section-title">
              <span className="title-accent">Pengalaman</span> Profesional
            </h1>
            <p className="section-description">
              Perjalanan karir saya dalam pengembangan software dan teknologi informasi
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`experience-card ${exp.type}`}>
                <div className="timeline-connector">
                  <div className="timeline-dot"></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="experience-content">
                  <div className="experience-main">
                    <div className="experience-header-info">
                      <span className="experience-period">{exp.period}</span>
                      <div className="experience-title">
                        <h3 className="position">{exp.position}</h3>
                        <h4 className="company">{exp.company}</h4>
                      </div>
                    </div>

                    <div className="experience-description">
                      <ul className="responsibility-list">
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="experience-technologies">
                    <h5 className="tech-title">Teknologi yang Digunakan</h5>
                    <div className="tech-badges">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Pengalaman;
