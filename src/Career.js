import React from "react";
import './Career.css';  // Import the CSS file
import FloatingWhatsAppButton from "./FloatingWAButton";

const CareerPage = () => {
  const handleApplyClick = () => {
    // Replace with the actual Google Form URL
    const googleFormURL = 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jStf5RUMlpHQURIRVkxODhYQ0FXSkZCUFU4SlVMRC4u'; 
    window.open(googleFormURL, '_blank');
  };

  return (
    <div className="career-page">
       <FloatingWhatsAppButton />
      <header>  
        <h1>Join Our Team at AmriTrades VSR</h1>
        <br/>
        <h2>If you're a motivated and enthusiastic individual looking for a new challenge, we encourage you to apply.</h2>
        <br/>
        <p>At AmriTrades VSR, we provide dynamic career paths and opportunities for professional growth. Our collaborative workplace is tailored to foster a culture of excellence, innovation, and continuous learning.Through our structured training and development initiatives, we empower our team members to thrive and expand their skill sets. Additionally, we offer a comprehensive benefits package to support the well-being and success of our employees.</p>
      </header>

      <main>
        <section className="job-opportunity">
          {/* <h2>This is an amazing opportunity to work for the best in the business. Apply now!</h2> */}
          {/* <p></p> */}
          <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>
        </section>

        <section className="remote-work">
          <h3>Work From Home</h3>
          <p>Apply Now! We will connect with you if you qualify for the positions.</p>
        </section>
      </main>

    </div>
  );
};

export default CareerPage;
