import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <p className="mb-0">© 2024 Nice Software Solutions Pvt Ltd. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <p className="mb-1">+91 - 8007861579</p>
            <p className="mb-1">info@nicesoftwaresolutions.com</p>
            <p className="mb-1">
              Plot No. 21, IT Park, Wing - A, Ground Floor, Gayatri Nagar, Nagpur, Maharashtra - 440022
            </p>
            <div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
