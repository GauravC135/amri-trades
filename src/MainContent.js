import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MainContent.css";
import FloatingWhatsAppButton from "./FloatingWAButton";

const MainContent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const featureCards = document.querySelectorAll(".feature-card");
    const courseCards = document.querySelectorAll(".course-card");
    const aboutSection = document.querySelectorAll(".about-us");
   

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add("visible");
          entry.target.classList.add("highlight");
        } else {
          entry.target.classList.remove("highlight");
        }
      });
    }, options);

    featureCards.forEach((card) => observer.observe(card));
    courseCards.forEach((card) => observer.observe(card));
    aboutSection.forEach((section) => observer.observe(section));

    return () => {
      featureCards.forEach((card) => observer.unobserve(card));
      courseCards.forEach((card) => observer.unobserve(card));
      aboutSection.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleCardClick = () => {
    navigate(`/courses`);
  };

  return (
    <div>
      <FloatingWhatsAppButton />

      {/* Features Section */}
      <div className="features-section">
        <h2>WHAT WE PROVIDE</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="features1.png" alt="Feature 1" />
            <div className="feature-text">
              <h3>Learn from Scratch</h3>
            </div>
            <div className="feature-details">
              <p>
                Learn the fundamentals of the stock market, including key concepts and strategies to begin your trading journey.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img src="Features4.jpeg" alt="Feature 2" />
            <div className="feature-text">
              <h3>Live Q/A Session</h3>
            </div>
            <div className="feature-details">
              <p>
                We offer live Q&A sessions where you can interact with experts and get answers to all your trading-related questions.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img src="feature3.png" alt="Feature 3" />
            <div className="feature-text">
              <h3>One to One Guidance</h3>
            </div>
            <div className="feature-details">
              <p>
                Receive personalized guidance tailored to your trading goals and experience, ensuring a strong foundation in trading.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <h2>ABOUT US</h2>
        <div className="about-us">
          <div className="about-text">
            <p>
              Welcome to AmriTradesVSR, a premier institution dedicated to fostering financial independence. Our mission is to demystify the trading process, providing personalized guidance and support. Through our unique pedagogical approach, which integrates experiential learning, expert mentorship, and real-world case studies, we empower individuals to excel in the trading arena. By joining our community, you will unlock your full financial potential and embark on a journey towards achieving lasting financial freedom.
            </p>
            <a href="#about" className="btn">
              Know More About Us
            </a>
          </div>
          <div className="about-image">
            <img src="about-us.jpg" alt="About Us" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses-section">
        <h2>OUR COURSES</h2>
        <div className="course-cards">
          <div className="course-card online" onClick={() => handleCardClick()}>
            <h3>Online Trading Course</h3>
            <p>
              A comprehensive online course that covers everything from the basics to advanced trading strategies.
            </p>
            <a
              href="https://forms.gle/xyz"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </div>
          <div className="course-card offline" onClick={() => handleCardClick()}>
            <h3>Offline Trading Bootcamp</h3>
            <p>
              Join us in-person for a hands-on bootcamp to gain practical experience and knowledge.
            </p>
            <a
              href="https://forms.gle/abc"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      {/* CEO Introduction Section */}
      <div className="ceo-section">
       
        <div className="ceo-content">
          <div className="ceo-text">
            <p>
              Having learned from veterans in the field and gained vast, versatile experience in the markets, Anish has adopted a practical, in-depth tested approach in his strategies. Yet, he has designed the course in the simplest manner of understanding, ensuring accessibility for everyone. Featured in reputable media platforms such as Times of India, Hindustan Times, Economic Times, and more, Anish has remained consistent in delivering excellent stock market education to aspiring traders through his effective teaching methods. He has been honored with the "Millennium Brilliance Award" for the best trainer in the stock market industry, while Booming Bulls Academy, India's leading stock market training institution, stands as a testament to his excellence in education.
            </p>
            <p className="ceo-name">Akshay Amri, CEO & Founder</p>
          </div>
          <div className="ceo-image">
            <img src="AkshayAmri.png" alt="CEO" />
          </div>
        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="brochure-section">
        <div className="brochure-card">
          <div className="brochure-text">
            <h2>Download Our Brochure</h2>
            <p>
              Get a detailed overview of our services, offerings, and vision. Click below to download the brochure now!
            </p>
          </div>
          <a href="/brochure.pdf" className="brochure-btn" download>
            Download Brochure
          </a>
        </div>
      </div>

      {/* Contact Platforms Section */}
      <div className="contact-platforms-section">
        <h2>Connect With Us</h2>
        <div className="contact-platforms">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <img src="/email-icon.png" alt="Email" />
            <p>Email Us</p>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="platform-card">
      <img src="/instagram-icon.png" alt="Instagram" />
      <p>Instagram</p>
    </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <img src="/linkedin-icon.png" alt="LinkedIn" />
            <p>LinkedIn</p>
          </a>
          <a href="tel:+1234567890" className="platform-card">
            <img src="/call-icon.png" alt="Call" />
            <p>Call Us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
