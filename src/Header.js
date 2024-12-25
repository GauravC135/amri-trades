import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Styles.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBannerImage = () => {
    switch (location.pathname) {
      case "/courses":
        return "Pic2AT.png";
      case "/about":
        return "Pic3AT.png";
      case "/resources":
        return "pic5AT.jpg";
      case "/contact":
        return "pic6AT.jpg";
      default:
        return "pic4AT.jpg";
    }
  };

  return (
    <>
      {/* Image Banner with Join Us button over it */}
      <div className="page-header-image">
        <img
          src={getBannerImage()}
          alt="Page Banner"
          className="header-img"
        />
        <div className="join-us-section">
          <button
            className="join-us-button"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdEegi3q9Ev4AlETsQj65bZPDz4jTFDoSSWSIRWS2OHGr0yVg/viewform?usp=sf_link",
                "_blank"
              )
            }
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar
        expand="lg"
        className={`broad-navbar ${isScrolled ? "scrolled" : "transparent"}`}
        fixed="top"
        expanded={isNavbarExpanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setIsNavbarExpanded(false)} className="shift-logo">
            <img
              src="Amri Logo V02.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
            className="custom-burger"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/courses" onClick={() => setIsNavbarExpanded(false)}>Courses</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setIsNavbarExpanded(false)}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/resources" onClick={() => setIsNavbarExpanded(false)}>Resources</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setIsNavbarExpanded(false)}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/career" onClick={() => setIsNavbarExpanded(false)}>Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
