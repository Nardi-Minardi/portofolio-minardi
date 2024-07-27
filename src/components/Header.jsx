import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { DarkMode } from '.';


const handleNotif = (e) => {
  e.preventDefault();
  Swal.fire({
    title: '<strong>Terima kasih sudah mengunjungi saya.</strong>',
    icon: 'info',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}


const Header = () => {
  return (
    <header>
      <div className="header-dots header-dots-1 is-moving-object is-translating" data-translating-factor="160">
        <svg width="279" height="97" xmlns="http://www.w3.org/2000/svg">
          <g fill="#43F1FF" fillRule="evenodd">
            <path d="M71.686 0l-2.899 1.334L68 4.157l.926 2.688L71.686 8l2.6-1.31L76 4.156l-1.295-2.94z" />
            <path fillOpacity=".64" d="M38.843 2l-1.45.667L37 4.079l.463 1.344 1.38.577 1.3-.655L41 4.079l-.648-1.47z" />
            <path fillOpacity=".24" d="M65.843 55l-1.45.667L64 57.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".64" d="M94.765 29l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".8" d="M58.765 25l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".48" d="M18.843 44l-1.45.667L17 46.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".64" d="M8.843 29l-1.45.667L7 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".48" d="M32.843 29l-1.45.667L31 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM.922 45l-.725.333L0 46.04l.232.672.69.289.65-.328L2 46.04l-.324-.735z" />
            <path fillOpacity=".24" d="M267.843 93l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".8" d="M275.765 75l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".48" d="M259.843 78l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
          </g>
        </svg>
      </div>
      <div className="header-dots header-dots-2 is-moving-object is-translating" data-translating-factor="160">
        <svg width="279" height="97" xmlns="http://www.w3.org/2000/svg">
          <g fill="#43F1FF" fillRule="evenodd">
            <path d="M71.686 0l-2.899 1.334L68 4.157l.926 2.688L71.686 8l2.6-1.31L76 4.156l-1.295-2.94z" />
            <path fillOpacity=".64" d="M38.843 2l-1.45.667L37 4.079l.463 1.344 1.38.577 1.3-.655L41 4.079l-.648-1.47z" />
            <path fillOpacity=".24" d="M65.843 55l-1.45.667L64 57.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".64" d="M94.765 29l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".8" d="M58.765 25l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".48" d="M18.843 44l-1.45.667L17 46.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".64" d="M8.843 29l-1.45.667L7 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".48" d="M32.843 29l-1.45.667L31 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM.922 45l-.725.333L0 46.04l.232.672.69.289.65-.328L2 46.04l-.324-.735z" />
            <path fillOpacity=".24" d="M267.843 93l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
            <path fillOpacity=".8" d="M275.765 75l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z" />
            <path fillOpacity=".48" d="M259.843 78l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z" />
          </g>
        </svg>
      </div>

      <div className="container">
        <section className="header-wrapper">
          <h3>Minardi</h3>

          <div className="header-info">

            {/* <DarkMode/> */}

            <div>
              <i style={{ cursor: 'pointer', color: '#fff', fontSize: '18px' }} onClick={handleNotif} className="fas fa-bell" title="notification"></i>
            </div>
          </div>

        </section>
        <nav>
          <Link href="/">Beranda</Link>
          <Link href="/proyek">Proyek</Link>
          <Link href="/pengalaman">Pengalaman</Link>
          <Link href="/kontak">Kontak</Link>
          <Link href="/catatan">Catatan</Link>

        </nav>
      </div>
    </header>
  )
}

export default Header;
