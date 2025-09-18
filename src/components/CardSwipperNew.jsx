import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CardSwipper = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const recommendations = [
    {
      id: 1,
      title: "Prakerja",
      subtitle: "Program Pengembangan Kompetensi",
      description: "Tingkatkan skills dengan pelatihan berkualitas dan dapatkan bantuan biaya hidup. Kesempatan emas untuk upgrade karir!",
      image: "./images/logo-prakerja.png",
      url: "https://www.prakerja.go.id/",
      category: "Funding",
      badge: "🔥 Trending",
      benefits: ["Pelatihan Gratis", "Bantuan Biaya", "Sertifikat Resmi"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "BPPTIK Kominfo",
      subtitle: "Sertifikasi SKKNI Gratis",
      description: "Raih sertifikasi internasional SKKNI tanpa biaya! Tingkatkan kredibilitas profesional Anda dengan standar industri.",
      image: "./images/logo-bpptik.jpg",
      url: "https://bpptik.kominfo.go.id/",
      category: "Certification",
      badge: "🎯 Recommended",
      benefits: ["Sertifikat SKKNI", "Gratis 100%", "Diakui Industri"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Dicoding",
      subtitle: "Developer Academy",
      description: "Bangun karir sebagai developer profesional dengan kurikulum yang disusun bersama industri tech terkemuka!",
      image: "./images/logo-dicoding.png",
      url: "https://www.dicoding.com/",
      category: "Learning",
      badge: "⭐ Top Choice",
      benefits: ["Kurikulum Industri", "Mentor Expert", "Job Guarantee"],
      color: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "Digital Talent",
      subtitle: "Kompetensi Digital Indonesia",
      description: "Program unggulan pemerintah untuk membangun talenta digital Indonesia. Bergabunglah dengan revolusi digital!",
      image: "./images/logo-digitaltalent.png",
      url: "https://digitalent.kominfo.go.id/",
      category: "Government",
      badge: "🏆 Official",
      benefits: ["Program Pemerintah", "Networking Luas", "Karir Digital"],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Microsoft Learn",
      subtitle: "Global Certification",
      description: "Dapatkan sertifikasi Microsoft yang diakui global! Buka peluang karir internasional dengan teknologi terdepan.",
      image: "./images/logo-microsoft.png",
      url: "https://docs.microsoft.com/en-us/learn/certifications/",
      category: "Global",
      badge: "🌍 International",
      benefits: ["Sertifikat Global", "Microsoft Official", "Career Boost"],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="recommendations-section">
      <div className="container">
        <div className="section-header">
          <div className="header-badge">
            <i className="fas fa-rocket"></i>
            <span>Specially Curated For You</span>
          </div>
          
          <h2 className="section-title">
            Saatnya <span className="gradient-text">Upgrade Skills</span> Anda!
          </h2>
          
          <p className="section-description">
            Jangan biarkan kesempatan berlalu! Ikuti program-program terbaik yang telah dipilih khusus 
            untuk mengakselerasi karir dan meningkatkan kompetensi profesional Anda.
          </p>
          
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Alumni Sukses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Job Placement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Learning Support</span>
            </div>
          </div>
        </div>

        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={true}
            className="recommendations-swiper"
          >
            {recommendations.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="recommendation-card">
                  <div className={`card-gradient bg-gradient-to-r ${item.color}`}></div>
                  
                  <div className="card-badge">
                    {item.badge}
                  </div>
                  
                  <div className="card-header">
                    <div className="logo-container">
                      <img src={item.image} alt={item.title} className="program-logo" />
                    </div>
                    <div className="category-tag">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="program-title">{item.title}</h3>
                    <p className="program-subtitle">{item.subtitle}</p>
                    <div className="program-description-container">
                      <p className="program-description">
                        {expandedCards[item.id] 
                          ? item.description 
                          : truncateText(item.description, 100)
                        }
                      </p>
                      {item.description.length > 100 && (
                        <button 
                          className="read-more-btn"
                          onClick={() => toggleExpanded(item.id)}
                        >
                          {expandedCards[item.id] ? 'Lebih sedikit' : 'Selengkapnya'}
                        </button>
                      )}
                    </div>
                    
                    <div className="benefits-list">
                      {item.benefits.map((benefit, index) => (
                        <span key={index} className="benefit-item">
                          <i className="fas fa-check"></i>
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-actions">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      <span>Mulai Sekarang</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                    
                    <button className="info-button">
                      <i className="fas fa-info-circle"></i>
                      Detail
                    </button>
                  </div>
                  
                  <div className="card-footer">
                    <div className="urgency-indicator">
                      <i className="fas fa-clock"></i>
                      <span>Pendaftaran terbatas!</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="call-to-action">
          <div className="cta-content">
            <h3>Masih Ragu? Konsultasi Gratis Dulu!</h3>
            <p>Tim ahli kami siap membantu Anda memilih program yang tepat</p>
            <button className="consultation-btn">
              <i className="fas fa-phone"></i>
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSwipper;
