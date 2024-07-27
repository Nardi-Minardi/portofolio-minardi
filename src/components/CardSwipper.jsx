import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// const baseURL = 'http://localhost/portofolio/';
const baseURL = 'https://nardiminardi.com/';

const CardSwipper = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="swiper-section bg-white border-2 border-gray-200 rounded-lg shadow-sm p-4 md:p-8 mb-4'>">
      <div className="container">
        <div className="feature">
          <div className="feature-inner">
            <div className="feature-header mb-16">
              <div className="feature-icon mr-16">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <g fillRule="nonzero" fill="none">
                    <path d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                    <path d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF" />
                    <path d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                    <path d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF" />
                    <path d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                    <path d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#43F1FF" />
                    <path d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#4353FF" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 style={{ color: '#000' }}>Disarankan untuk anda.</h5>
        <p>Ikuti beberapa program dan acara untuk menambah wawasan dan keterampilan anda.</p>

        <Swiper
        modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            "clickable": true,
            "dynamicBullets": true
          }}
          navigation={true}
          className="mySwiper">
          <SwiperSlide>
            <div className="mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={`./images/logo-prakerja.png`} alt="prakerja" className="img-fluid" height="20" width="20" />
                </div>
                <div className="col-md-8">
                  <h5>Prakerja</h5>
                  <p>Gali potensi dirimu dengan Kartu Prakerja.</p>
                  <a className="btn-swipper" href="https://www.prakerja.go.id/" target="_blank">Lihat</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={`./images/logo-bpptik.jpg`} alt="bpptik" className="img-fluid" height="20" width="20" />
                </div>
                <div className="col-md-8">
                  <h5 >BPPTIK</h5>
                  <p>Pelatihan dan sertifikasi SKKNI gratis.</p>
                  <a className="btn-swipper" href="https://bpptik.kominfo.go.id/" target="_blank">Lihat</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={`./images/logo-dicoding.png`} alt="dicoding" className="img-fluid" height="20" width="20" />
                </div>
                <div className="col-md-8">
                  <h5>Dicoding</h5>
                  <p>Bangun Karirmu Sebagai Developer Profesional.</p>
                  <a className="btn-swipper" href="https://www.dicoding.com/" target="_blank">Lihat</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={`./images/logo-digitaltalent.png`} alt="digital talent" className="img-fluid" height="20" width="20" />
                </div>
                <div className="col-md-8">
                  <h5 >Digital Talent Kominfo</h5>
                  <p>Program pelatihan pengembangan kompetensi.</p>
                  <a className="btn-swipper" href="https://digitalent.kominfo.go.id/" target="_blank">Lihat</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={`./images/logo-microsoft.png`} alt="microsoft" className="img-fluid" height="20" width="20" />
                </div>
                <div className="col-md-8">
                  <h5 >Microsoft Sertifikasi</h5>
                  <p>Sertifikasi mengikuti peran dan persyaratan teknis saat ini.</p>
                  <a className="btn-swipper" href="https://docs.microsoft.com/en-us/learn/certifications/" target="_blank">Lihat</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default CardSwipper;
