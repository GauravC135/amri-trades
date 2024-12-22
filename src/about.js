import React from "react";
import "./about.css";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "team1.jpg",
      description: "John has over 10 years of experience in the financial market and leads the company with a vision for innovation and growth.",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "team2.jpg",
      description: "Jane is the tech wizard behind our trading tools, ensuring reliability and scalability for all users.",
    },
    {
      name: "Alex Brown",
      role: "Marketing Head",
      image: "team3.jpg",
      description: "Alex brings creativity and strategy to connect with our audience and expand our reach globally.",
    },
  ];

  return (
    <div className="about-page">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to Amri-Trades</h1>
        <p>
          Our mission is to empower individuals with the knowledge and tools they need 
          to make informed financial decisions. At Amri-Trades, we believe in creating 
          a supportive community that helps everyone succeed.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
