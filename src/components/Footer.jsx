import React from 'react';
import { ProgressBar } from '.';

const Footer = () => {
  return (
    <footer className="footer-section bg-white p-4 md:p-8 mb-4">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='contact-info'>
              <h5>Kontak Info</h5>
              <p>+62877-8328-6645<br></br>
                nardiminardi20@gmail.com<br></br>
                Jl.Bahari II, No.25, Rt04/Rw07<br></br>
                Gandaria Selatan,<br></br>
                Cilandak, Jakarta Selatan<br></br>
                12420.
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <h5 style={{ color: '#000' }}>Keterampilan Dasar Bahasa Pemrograman</h5>
            <span>PHP</span>
            <ProgressBar bgcolor="#777BB3" progress='71' height={10} />
            <span>Javascript</span>
            <ProgressBar bgcolor="#FFCE5A" progress='65' height={10} />
            <span>HTML5</span>
            <ProgressBar bgcolor="#E44D27" progress='94' height={10} />
            <span>CSS3</span>
            <ProgressBar bgcolor="#1572B6" progress='85' height={10} />

          </div>

          <p className='copyright'>© 2021 &nbsp; Minardi  &nbsp; |  &nbsp; Fullstack Developer</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
