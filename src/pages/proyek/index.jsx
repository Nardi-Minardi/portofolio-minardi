import React, { useState } from 'react';
import listProyek from '../../utils/listProyek.json';
import MainLayout from '@/layouts/mainLayout';

const Proyek = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique categories
  const categories = ['all', ...new Set(listProyek.map(item => item.title))];

  // Filter projects based on category and search
  const filteredProjects = listProyek.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.title === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className='proyek-page'>
        {/* Hero Section */}
        <section className="proyek-hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <i className="fas fa-rocket"></i>
                <span>Portfolio</span>
              </div>
              <h1 className="page-title">My Projects</h1>
              <p className="page-description">
                Explore my diverse collection of projects spanning web development, 
                mobile applications, and software engineering solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="proyek-filters">
          <div className="container">
            <div className="filter-wrapper">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input 
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="category-filters">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="proyek-grid">
          <div className="container">
            {filteredProjects.length === 0 ? (
              <div className="no-projects">
                <i className="fas fa-search"></i>
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredProjects.map((category, categoryIndex) => (
                <div className="category-section" key={categoryIndex}>
                  <div className="category-header">
                    <div className="category-info">
                      <h2 className="category-title">{category.title}</h2>
                      <p className="category-description">{category.desc}</p>
                      <div className="category-meta">
                        <span className="job-description">{category.jobDesc}</span>
                        <span className="project-count">{category.proyek.length} Projects</span>
                      </div>
                    </div>
                  </div>

                  <div className="projects-grid">
                    {category.proyek.map((project, projectIndex) => (
                      <div className="project-card" key={project.id}>
                        <div className="project-image">
                          <img src={project.image} alt={project.title} />
                          <div className="project-overlay">
                            <div className="project-actions">
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="action-btn primary"
                              >
                                <i className="fas fa-external-link-alt"></i>
                                View Project
                              </a>
                              <button className="action-btn secondary">
                                <i className="fas fa-info-circle"></i>
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="project-content">
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-tags">
                            <span className="tag">{category.title}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Proyek;
