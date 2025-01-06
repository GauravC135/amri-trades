import React from "react";
import "./FloatingWAButton.css"; // Import the CSS file for styling

const FloatingWhatsAppButton = () => {
  const phoneNumber = "9321783539"; // Replace with your WhatsApp number.
  const message = "Hello, I need more information."; // Optional pre-filled message.

  return (
    <button
      className="floating-whatsapp-button"
      onClick={() =>
        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        )
      }
      title="Chat with us!" // Display the message on hover
    >
      <img
        src="WALogo2.png" // WhatsApp logo image URL
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default FloatingWhatsAppButton;
