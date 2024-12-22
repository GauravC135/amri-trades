import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Feel free to reach out to us. We'd
          love to hear from you!
        </p>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>support@amri-trades.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 Amri-Trades Lane, New York, NY, USA</p>
        </div>
      </div>

      {/* Contact Form
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div> */}

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24152.324368891762!2d-73.99497367639965!3d40.73544651932127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e15d75%3A0x7ba4ad8f0e15343d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1689794567893!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
