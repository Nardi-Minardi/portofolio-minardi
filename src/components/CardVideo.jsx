import React, { useState } from 'react';
import listVideo from '../utils/listVideo.json';

const CardVideo = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const handleVideoSelect = (videoId, categoryTitle) => {
    setSelectedVideo(videoId);
    setIsPlaying(true);
  };

  return (
    <section className="learning-hub-section">
      <div className="container">
        <div className="section-header">
          
          <h2 className="section-title">
            Belajar <span className="gradient-text">Programming</span> Sambil Praktik!
          </h2>
          
          <p className="section-description">
            Kumpulan video pembelajaran programming terpilih yang akan membawa skills Anda ke level berikutnya. 
            Dari basic hingga advanced...
          </p>
        </div>

        <div className="learning-content">
          <div className="categories-panel">
            <div className="panel-header">
              <h3>
                <i className="fas fa-list"></i>
                Pilih Kategori Pembelajaran
              </h3>
              <p>Klik kategori di bawah untuk melihat video pembelajaran yang tersedia</p>
            </div>
            
            <div className="categories-list">
              {listVideo.map((category, index) => (
                <div 
                  key={index} 
                  className={`category-item ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(index)}
                >
                  <div className="category-header">
                    <div className="category-info">
                      <h4 className="category-title">
                        <i className="fas fa-folder"></i>
                        {category.title}
                      </h4>
                      <span className="video-count">
                        {category.video.length} video tersedia
                      </span>
                    </div>
                    <div className="category-toggle">
                      <i className={`fas ${activeCategory === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                  </div>
                  
                  {activeCategory === index && (
                    <div className="videos-list animate-slideInUp">
                      {category.video.map((video, videoIndex) => (
                        <div 
                          key={video.id}
                          className={`video-item ${selectedVideo === video.id ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoSelect(video.id, category.title);
                          }}
                        >
                          <div className="video-info">
                            <i className="fas fa-play"></i>
                            <span className="video-title">{video.desc}</span>
                          </div>
                          <div className="video-duration">
                            <i className="fas fa-clock"></i>
                            <span>Playlist</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            
          </div>

          <div className="video-player-panel">
            {!selectedVideo ? (
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <i className="fas fa-video"></i>
                </div>
                <h3>Pilih Video untuk Mulai Belajar</h3>
                <p>
                  Klik pada kategori di sebelah kiri, lalu pilih video yang ingin Anda tonton. 
                  Mari mulai journey programming Anda!
                </p>
              </div>
            ) : (
              <div className="video-player animate-fadeIn">
                <div className="player-header">
                  <h3>
                    <i className="fas fa-play-circle"></i>
                    Sedang Memutar Playlist
                  </h3>
                  <button 
                    className="close-player"
                    onClick={() => {
                      setSelectedVideo(null);
                      setIsPlaying(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <div className="video-container">
                  <iframe 
                    src={`https://www.youtube.com/embed/videoseries?list=${selectedVideo}&autoplay=1`}
                    title="Programming Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                  ></iframe>
                </div>
                
                <div className="player-controls">
                  <div className="control-info">
                    <i className="fas fa-info-circle"></i>
                    <span>Gunakan kontrol player YouTube untuk navigasi video</span>
                  </div>
                  <div className="control-actions">
                    <button className="control-btn">
                      <i className="fas fa-bookmark"></i>
                      Bookmark
                    </button>
                    <button className="control-btn">
                      <i className="fas fa-share"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default CardVideo;
