import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    // Normally, here you would send the data to a server (e.g., using an API)
    setFormStatus("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit</button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>

      {/* Contact Platforms */}
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
          <a
            href="https://www.instagram.com/yourprofile"   
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
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
          <a
            href="tel:+1234567890"
            className="platform-card"
          >
            <img src="/call-icon.png" alt="Call" />
            <p>Call Us</p>
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24152.324368891762!2d-73.99497367639965!3d40.73544651932127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e15d75%3A0x7ba4ad8f0e15343d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1689794567893!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
