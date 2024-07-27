import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import MainLayout from '@/layouts/mainLayout';

const SERVICE_ID = "service_qoaqofh";
const TEMPLATE_ID = "template_p4rkhq1";
const USER_ID = "user_xeM8zmAOMagjMZKrhs9FQ";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
};

const Kontak = () => {
  return (
    <MainLayout>
    <div className='contact-section mt-3'>
      <div className='container'>
        <h5 style={{ color: '#000', textAlign: 'center', marginBottom: '30px' }}>Hubungi saya, jika anda tertarik dengan saya</h5>
        <form id="contact-form" onSubmit={handleOnSubmit} method="POST">
          <div className="form-group mb-3">
            <label htmlFor="name">Nama Anda</label>
            <input type="text" className="form-control" name='name' required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email Anda</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name='email' required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Pesan</label>
            <textarea className="form-control" rows="5" name='message' required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </MainLayout>
  )
}

export default Kontak;
