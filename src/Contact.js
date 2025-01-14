import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import FloatingWhatsAppButton from "./FloatingWAButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // EmailJS configuration (replace with your EmailJS service ID, template ID, and user ID)
    emailjs
      .send(
        "service_8pwnmha", // Replace with your EmailJS service ID
        "template_b2d9r7k", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "cxRUXzDSHKliyvo74" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Message sent successfully! We'll get back to you soon.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setFormStatus("Failed to send message. Please try again later.");
        }
      );
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
       <FloatingWhatsAppButton />
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
          <p>Amri.trades100@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91 9321783539</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>1Plot no c5, Barlinge layout, Laxminagar, Nagpur, Maharashtra 440022</p>
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
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Your Phone Number"
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
            href="mailto:Amri.trades100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <img src="EmaiLogo.png" alt="Email" />
            <p>Email Us</p>
          </a>
          <a
            href="https://www.instagram.com/amritrades?igsh=N2w2aXA3bWloMjdp&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
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

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        {/* <iframe
          title="Google Map"
          src="hhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.681768469364!2d79.06552807471692!3d21.12524978445852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c152bf00f48f%3A0x64e9315288bb7227!2sAmri%20Trades!5e0!3m2!1sen!2sin!4v1736162465234!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.681768469364!2d79.06552807471692!3d21.12524978445852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c152bf00f48f%3A0x64e9315288bb7227!2sAmri%20Trades!5e0!3m2!1sen!2sin!4v1736162465234!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border:"0" }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
    </div>
  );
};

export default Contact;
