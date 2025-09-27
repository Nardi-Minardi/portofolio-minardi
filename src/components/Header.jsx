import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/proyek', label: 'Proyek' },
    { href: '/pengalaman', label: 'Pengalaman' },
    { href: '/kontak', label: 'Kontak' },
    { href: '/catatan', label: 'Catatan' }
  ];

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <section className="header-wrapper">
          <div className="brand">
            <Link href="/" onClick={closeMobileMenu}>
              <h3>Minardi</h3>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={router.pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button 
              className="notification-btn"
              onClick={handleNotif} 
              title="Notifikasi"
            >
              <i className="fas fa-bell"></i>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-content">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={router.pathname === item.href ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
          )}
        </section>
      </div>
    </header>
  )
}

export default Header;
