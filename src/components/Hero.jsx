import React from 'react';

const Hero = () => {
  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src={`./images/fotoProfile.png`} 
                alt="Minardi Profile" 
                className="profile-image" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="hero-text">
            <div className="hero-badge">
              <span>👋 Halo, saya</span>
            </div>
            
            <h1 className="hero-title">Minardi</h1>
            
            <h2 className="hero-subtitle">
              Fullstack Developer & 
              <span className="gradient-text"> Software Engineer</span>
            </h2>
            
            <p className="hero-description">
              Dengan pengalaman yang kuat dalam Web Development, Software Engineering, dan Mobile Development, 
              saya telah memperoleh sertifikasi dengan nilai terbaik dari Badan Nasional Sertifikasi Profesi. 
              Keahlian saya meliputi pemrograman, Laravel, React JS, dan React Native.
            </p>

            <div className="hero-actions">
              <div className="hero-cta">
                <p className="cta-text">Cari Tahu Tentang Saya?</p>
                <div className="action-buttons">
                  <button className="btn-primary">
                    <i className="fas fa-download"></i>
                    Download CV
                  </button>
                  <button className="btn-secondary">
                    <i className="fas fa-envelope"></i>
                    Hubungi Saya
                  </button>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/nardi-minardi-007182179/" target="_blank" className="social-link linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Nardi-Minardi" target="_blank" className="social-link github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-background">
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
          <div className="bg-element bg-element-3"></div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
