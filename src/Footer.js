import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <p>© 2024 Amri trades VSR. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right contact-info">
            <p>+91 - 9321783539</p>
            <p>Amri.trades100@gmail.com</p>
            <p>Plot no c5, Barlinge layout, Laxminagar, Nagpur, Maharashtra 440022</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/amri-trade-vsr-367183339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
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
