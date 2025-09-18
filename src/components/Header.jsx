import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { DarkMode } from '.';

const handleNotif = (e) => {
  e.preventDefault();
  Swal.fire({
    title: '<strong>Terima kasih sudah mengunjungi portfolio saya!</strong>',
    text: 'Jangan ragu untuk menghubungi saya jika ada yang ingin didiskusikan.',
    icon: 'success',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Siap!',
    confirmButtonColor: '#3b82f6',
    background: 'var(--bg-card)',
    color: 'var(--text-primary)',
  })
}

const Header = () => {
  return (
    <header>
      <div className="container">
        <section className="header-wrapper">
          <div className="brand">
            <Link href="/">
              <h3>Minardi</h3>
            </Link>
          </div>

          <nav className="desktop-nav">
            <Link href="/">Beranda</Link>
            <Link href="/proyek">Proyek</Link>
            <Link href="/pengalaman">Pengalaman</Link>
            <Link href="/kontak">Kontak</Link>
            <Link href="/catatan">Catatan</Link>
          </nav>

          <div className="header-info">
            <button 
              className="notification-btn"
              onClick={handleNotif} 
              title="Notifikasi"
            >
              <i className="fas fa-bell"></i>
            </button>
            {/* <DarkMode/> */}
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header;
