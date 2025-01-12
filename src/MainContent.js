import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
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
          {/* <div className="about-image">
            <img src="about-us.jpg" alt="About Us" />
          </div> */}
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
              href="https://docs.google.com/forms/d/e/1FAIpQLScpco6GkK_sCOT4OixETFO8bYEUY-4v9jsOzDoNmx_4ICZ82g/viewform?usp=sf_link"
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
              href="https://docs.google.com/forms/d/e/1FAIpQLScpco6GkK_sCOT4OixETFO8bYEUY-4v9jsOzDoNmx_4ICZ82g/viewform?usp=sf_link"
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
        <div className="ceo-image">
            <img src="AkshayAmri.png" alt="CEO" />
            <br/>
            <p className="ceo-name">Akshay Amri, Mentor</p>
          </div>
          <div className="ceo-text">
            <p>
             
            Akshay Amri is a distinguished professional in the field of stock market analysis and financial education. Holding a Bachelor’s degree in Computer Applications (BCA), Akshay embarked on his trading journey in 2017. Over the years, he has built a solid foundation of expertise in the intricacies of the stock market. His relentless pursuit of excellence led him to earn certifications as an NISM-certified Research Analyst and a certified Mutual Fund Distributor, further solidifying his credentials in the financial domain.

The year 2021 marked a pivotal moment in Akshay's career when he mastered the art of technical analysis—a discipline that has since become the cornerstone of his professional endeavors. With his in-depth understanding of market trends and technical indicators, Akshay has demonstrated that achieving consistent success in the stock market is attainable through the proper application of technical analysis principles.

Akshay’s mission transcends personal success; he is deeply committed to empowering others through financial literacy and education. Believing that financial knowledge is not a privilege but a necessity, Akshay dedicates his efforts to making this knowledge accessible to everyone. He is the architect behind structured wealth management programs designed to help individuals achieve their financial aspirations and attain financial independence.

Through his work, Akshay aims to inspire and guide people toward a future where financial security and freedom are within reach. His unwavering commitment to enhancing financial literacy has positioned him as a trusted mentor and advocate for financial empowerment.

If you are seeking guidance on navigating the complexities of the financial world or wish to achieve your financial goals, Akshay Amri is here to lead the way with his expertise and vision.            </p>
           
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
          <a href="/Brochure.pdf" className="brochure-btn" download type="application/pdf">
    Download Brochure
</a>

        </div>
      </div>

      {/* Contact Platforms Section */}
      <div className="contact-platforms-section">
        <h2>Connect With Us</h2>
        <div className="contact-platforms">
          <a
            href="mailto:Amri.trades100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <img src="EmaiLogo.png" alt="Email" />
            <p>Email Us</p>
          </a>
          <a href="https://www.instagram.com/amritrades?igsh=N2w2aXA3bWloMjdp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="platform-card">
      <img src="InstaLogo.jpg" alt="Instagram" />
      <p>Instagram</p>
    </a>
          <a
            href="https://www.linkedin.com/in/amri-trade-vsr-367183339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <img src="LinkedInLogo.png" alt="LinkedIn" />
            <p>LinkedIn</p>
          </a>
          <a href="tel:+919321783539" className="platform-card">
            <img src="CallLogo.png" alt="Call" />
            <p>Call Us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
