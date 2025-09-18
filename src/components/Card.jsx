import React from 'react';
import service from '../utils/service.json';

const Card = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Layanan Profesional</h2>
          <p className="section-subtitle">
            Solusi teknologi terdepan untuk mengembangkan bisnis Anda
          </p>
        </div>
        
        <div className="services-grid">
          {service.map((item, index) => (
            <div className="service-card" key={item.id}>
              <div className="card-icon">
                <i className={`fas ${getServiceIcon(item.title)}`}></i>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.desc}</p>
                
                <div className="card-status">
                  <span className={`status-badge ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              
              <div className="card-overlay"></div>
              <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to get icons based on service title
const getServiceIcon = (title) => {
  const iconMap = {
    'Web Development': 'fa-code',
    'Mobile Development': 'fa-mobile-alt',
    'UI/UX Design': 'fa-paint-brush',
    'Software Engineering': 'fa-cogs',
    'Database Design': 'fa-database',
    'API Development': 'fa-plug',
    'DevOps': 'fa-server',
    'Consulting': 'fa-lightbulb'
  };
  
  // Find matching icon or use default
  const iconKey = Object.keys(iconMap).find(key => 
    title.toLowerCase().includes(key.toLowerCase().split(' ')[0])
  );
  
  return iconMap[iconKey] || 'fa-star';
}

export default Card;
