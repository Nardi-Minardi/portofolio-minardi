import React, { useState, useEffect } from 'react';
import catatan from '../../utils/catatan.json';
import MainLayout from '@/layouts/mainLayout';

const Pagination = ({ perPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPost / perPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) return null;

  return (
    <nav className="pagination-nav">
      <ul className='pagination-list'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            onClick={() => currentPage > 1 && paginate(currentPage - 1)} 
            className='page-link'
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        </li>
        
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button 
              onClick={() => paginate(number)} 
              className='page-link'
            >
              {number}
            </button>
          </li>
        ))}
        
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)} 
            className='page-link'
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Catatan = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setData(catatan);
  }, []);

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
      (filter === 'certificate' && item.file && item.file.includes('.pdf')) ||
      (filter === 'tutorial' && item.url);
    return matchesSearch && matchesFilter;
  });

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentData = filteredData.slice(firstPageIndex, lastPageIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const getItemType = (item) => {
    if (item.url) return 'tutorial';
    if (item.file && item.file.includes('.pdf')) return 'certificate';
    return 'other';
  };

  const getItemIcon = (item) => {
    const type = getItemType(item);
    switch (type) {
      case 'tutorial':
        return 'fas fa-play-circle';
      case 'certificate':
        return 'fas fa-certificate';
      default:
        return 'fas fa-file-alt';
    }
  };

  return (
    <MainLayout>
      <section className='notes-section'>
        <div className='container'>
          <div className="notes-header">
            <h1 className="section-title">
              <span className="title-accent">Catatan</span> & Sertifikasi
            </h1>
            <p className="section-description">
              Kumpulan pembelajaran, sertifikasi, dan tutorial yang telah saya buat. 
              Dokumentasi perjalanan belajar dalam dunia programming dan teknologi.
            </p>
          </div>

          <div className="notes-controls">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Cari catatan atau sertifikasi..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            <div className="filter-tabs">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                <i className="fas fa-th-large"></i>
                Semua
              </button>
              <button
                className={`filter-btn ${filter === 'certificate' ? 'active' : ''}`}
                onClick={() => handleFilterChange('certificate')}
              >
                <i className="fas fa-certificate"></i>
                Sertifikat
              </button>
              <button
                className={`filter-btn ${filter === 'tutorial' ? 'active' : ''}`}
                onClick={() => handleFilterChange('tutorial')}
              >
                <i className="fas fa-play-circle"></i>
                Tutorial
              </button>
            </div>
          </div>

          <div className="notes-stats">
            <div className="stat-card">
              <i className="fas fa-award"></i>
              <div>
                <span className="stat-number">{data.filter(item => getItemType(item) === 'certificate').length}</span>
                <span className="stat-label">Sertifikat</span>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-video"></i>
              <div>
                <span className="stat-number">{data.filter(item => getItemType(item) === 'tutorial').length}</span>
                <span className="stat-label">Tutorial</span>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-book"></i>
              <div>
                <span className="stat-number">{data.length}</span>
                <span className="stat-label">Total Item</span>
              </div>
            </div>
          </div>

          {currentData.length === 0 ? (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>Tidak Ada Hasil</h3>
              <p>Coba ubah kata kunci pencarian atau filter yang dipilih.</p>
            </div>
          ) : (
            <>
              <div className="notes-grid">
                {currentData.map((item, index) => (
                  <div key={item.id || index} className={`note-card ${getItemType(item)}`}>
                    <div className="card-image">
                      <img 
                        src={`./images/${item.image}`} 
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="card-overlay">
                        <div className="card-type">
                          <i className={getItemIcon(item)}></i>
                          <span>{getItemType(item) === 'certificate' ? 'Sertifikat' : 'Tutorial'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      
                      <div className="card-actions">
                        <a 
                          href={item.url || `./images/${item.file}`} 
                          target='_blank'
                          rel="noopener noreferrer"
                          className="view-btn"
                        >
                          <i className={item.url ? 'fas fa-external-link-alt' : 'fas fa-download'}></i>
                          {item.url ? 'Lihat Tutorial' : 'Unduh Sertifikat'}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Pagination 
                perPage={perPage} 
                totalPost={filteredData.length} 
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </section>
    </MainLayout>
  )
}

export default Catatan;
