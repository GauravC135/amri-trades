import React from "react";
import './Career.css';  // Import the CSS file

const CareerPage = () => {
  const handleApplyClick = () => {
    // Replace with the actual Google Form URL
    const googleFormURL = 'https://your-google-form-url-here'; 
    window.open(googleFormURL, '_blank');
  };

  return (
    <div className="career-page">
      <header>
        <h1>We Are Hiring</h1>
        <p>Seize the opportunity to work with a renowned and certified trading firm, renowned for its excellence in this industry.</p>
      </header>

      <main>
        <section className="job-opportunity">
          <h2>Don't miss your chance to work with one of the most respected and certified trading firms out there!</h2>
          <p>This is an amazing opportunity to work for the best in the business. Apply now!</p>
          <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>
        </section>

        <section className="remote-work">
          <h3>Work From Home</h3>
          <p>Apply Now! We will connect with you if you qualify for the positions.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Trading Firm. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;
