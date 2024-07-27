import React from 'react';

// const baseURL = 'http://localhost/portofolio/';
const baseURL = 'https://nardiminardi.com/';

const Hero = () => {
  return (
    <div className="container">
      <section className="bg-white border-2 border-gray-200 rounded-lg shadow-sm p-4 md:p-8 mb-4">

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-20">

          <div className="flex lg:w-1/2 xl:w-1/2 w-full">
            <img src={`./images/fotoProfile.png`} alt="foto-profile" className="rounded-md" />
          </div>



          <div className="flex flex-col w-full lg:w-full xl:w-full">

            <h3>Minardi</h3>
            <h5>Fullstack Developer,</h5>
            <p className="hero-desc text-justify">Dengan pengalaman yang kuat dalam Web Development, Software Engineering, dan Mobile Development, saya telah memperoleh sertifikasi dengan nilai terbaik dari Badan Nasional Sertifikasi Profesi. Keahlian saya meliputi pemrograman, Laravel, React JS, dan React Native. Saya berdedikasi untuk mencari peluang baru yang akan memungkinkan saya untuk mengaplikasikan dan mengembangkan keahlian ini lebih lanjut.</p>


            <div className="find-about-me">

              <div className="cv-info">
                <p>Cari Tahu Tentang Saya ?</p>
                <a className="btn-cv" target="_blank" href={`./images/cv.pdf`}>Download CV</a>
              </div>

              <div className="hero-social-info">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/nardi-minardi-007182179/" target="_blank">
                      <i className="fab fa-linkedin fa-2x" title="Linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Nardi-Minardi" target="_blank">
                      <i className="fab fa-github fa-2x" title="Github"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>

  )
}

export default Hero;
