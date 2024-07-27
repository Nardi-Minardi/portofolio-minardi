import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testimonial from '../utils/testimonial.json';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

const Testimonial = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <div style={{ backgroundColor: '#fff', marginTop: '20px' }}>
        <Button variant="primary" onClick={handleShow} style={{ marginLeft: '20px', marginTop: '10px' }}>
          Add Testimonial
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Testimonial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Anda</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Asal Anda</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  contoh* Jakarta
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Foto Anda</Form.Label>
                <Form.Control type="file" />
                <Form.Text className="text-muted">
                  File berupa jpg.jpeg.png
                </Form.Text>
              </Form.Group>
              <Form.Label>Leave a comment here</Form.Label>
              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save It!
            </Button>
          </Modal.Footer>
        </Modal>

        <h5 style={{ color: "#000", textAlign: 'center', paddingTop: '30px' }}>Testimonials</h5>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {
            testimonial.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.image} />
                  <div className="myCarousel">
                    <h3>{item.nama}</h3>
                    <h4>{item.asal}</h4>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </>
  );
}

export default Testimonial;
