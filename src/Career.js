import React from "react";
import './Career.css';  // Import the CSS file
import FloatingWhatsAppButton from "./FloatingWAButton";

const CareerPage = () => {
  const handleApplyClick = () => {
    // Replace with the actual Google Form URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLScpco6GkK_sCOT4OixETFO8bYEUY-4v9jsOzDoNmx_4ICZ82g/viewform?usp=sf_link'; 
    window.open(googleFormURL, '_blank');
  };

  return (
    <div className="career-page">
       <FloatingWhatsAppButton />
      <header>
        <h1>We Are Hiring</h1>
        <p>Seize the opportunity to work with a renowned and certified trading firm, renowned for its excellence in this industry.</p>
      </header>

      <main>
        <section className="job-opportunity">
          <h2>This is an amazing opportunity to work for the best in the business. Apply now!</h2>
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
