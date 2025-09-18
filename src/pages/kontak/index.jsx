import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import MainLayout from '@/layouts/mainLayout';

const SERVICE_ID = "service_qoaqofh";
const TEMPLATE_ID = "template_p4rkhq1";
const USER_ID = "user_xeM8zmAOMagjMZKrhs9FQ";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
      console.log(result.text);
      
      Swal.fire({
        icon: 'success',
        title: 'Pesan Berhasil Dikirim!',
        text: 'Terima kasih telah menghubungi saya. Saya akan merespons segera.',
        confirmButtonColor: '#6366f1'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      e.target.reset();
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ups, ada yang salah!',
        text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'nardi.minardi@gmail.com',
      link: 'mailto:nardi.minardi@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telepon',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Minardi',
      link: 'https://www.linkedin.com/in/nardi-minardi-007182179/'
    }
  ];

  return (
    <MainLayout>
      <section className='contact-section'>
        <div className='container'>
          <div className="contact-header">
            <h1 className="section-title">
              <span className="title-accent">Hubungi</span> Saya
            </h1>
            <p className="section-description">
              Mari berdiskusi tentang proyek Anda atau kolaborasi yang menarik. 
              Saya siap membantu mewujudkan ide digital Anda.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-header">
                <h3>Informasi Kontak</h3>
                <p>Beberapa cara untuk menghubungi saya</p>
              </div>
              
              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="method-content">
                      <h4>{item.title}</h4>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="contact-form-container">
              <div className="form-header">
                <h3>Kirim Pesan</h3>
                <p>Ceritakan tentang proyek atau ide Anda</p>
              </div>

              <form className="contact-form" onSubmit={handleOnSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subjek</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Topik atau judul pesan"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Jelaskan proyek atau pertanyaan Anda..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Kontak;
