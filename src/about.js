import React, { useState } from 'react';
import './about.css';
import FloatingWhatsAppButton from "./FloatingWAButton";

const About = () => {
  // Define teamMembers array with details
  const teamMembers = [
    // {
    //   name: "John Doe",
    //   role: "Founder & CEO",
    //   image: "team1.jpg", // Replace with actual image paths
    //   description: "John has over 10 years of experience in the financial market and leads the company with a vision for innovation and growth.",
    // },
    {
      name: "Akshay Amri",
      role: "Mentor",
      image: "AkshayAmri.jpeg", // Replace with actual image paths
      description: "Akshay is a trader and mentor, an expert in technical analysis, who will teach you in the most simplified way.",
    },
    {
      name: "Anjali Dongre",
      role: "Marketing Head",
      image: "AnjaliDongre.jpeg", // Replace with actual image paths
      description: "Anjali is the one who will connect students and clients, bridging the gap to reach and impact as many people as possible.",
    },
    {
      name: "Ritik Dongre",
      role: "Operations Head",
      image: "Ritik.png", // Replace with actual image paths
      description: "Ritik is the one who manages all operations and oversees the team’s roles, ensuring smooth workflow and efficiency.",
    },
    {
      name: "Zeeshan Deshmukh",
      role: "Digital Marketing Head",
      image: "TeamMember4.png", // Replace with actual image paths
      description: "Zeeshan is the one who manages social media and drives creativity, ensuring maximum reach and engagement.",
    },
    
  ];

  const [activeQuestions, setActiveQuestions] = useState({});

  const faqData = [
    {
      category: 'General Questions',
      questions: [
        { question: 'What is AmriTradesVSR?', answer: 'AmriTradesVSR is an online trading education platform designed to empower young individuals with the knowledge, skills, and confidence to achieve financial freedom.' },
        { question: 'What services do you offer?', answer: 'We provide comprehensive trading education, expert mentorship, and a supportive community to help you master the art of trading.' },
        { question: 'Who is AmriTradesVSR for?', answer: 'Our platform is designed for young individuals interested in trading and financial independence.' },
      ]
    },
    {
      category: 'Trading Education',
      questions: [
        { question: 'What type of trading education do you offer?', answer: 'We provide a comprehensive curriculum covering the basics of trading, technical analysis, risk management, and advanced trading strategies.' },
        { question: 'How is the education delivered?', answer: 'Our education is delivered through a combination of online learning, live webinars, and interactive quizzes.' },
        { question: 'Do you offer personalized mentorship?', answer: 'Yes, our expert mentors are available to provide personalized guidance and support.' },
      ]
    },
    {
      category: 'Membership and Support',
      questions: [
        { question: 'How do I join AmriTradesVSR?', answer: 'You can join by signing up on our website and selecting a membership plan that suits your needs.' },
        { question: 'What types of membership plans do you offer?', answer: 'We offer various membership plans, including monthly and annual subscriptions, each with varying levels of access to our education and support services.' },
        { question: 'How do I contact support?', answer: 'You can contact our support team through email, phone, or chat on WhatsApp.' },
      ]
    },
    {
      category: 'Payments and Refunds',
      questions: [
        { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, online payments, and bank transfers.' },
        { question: 'Can I get refunds after a class?', answer: 'No, there are no such policies.' },
        { question: 'Can I recover my fees within a year?', answer: 'Yes, our program is designed to provide a strong foundation for trading success. By applying the principles and strategies taught in our program, you can potentially generate returns that exceed your investment within a year, thereby recovering your fees and earning a profit.' },
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setActiveQuestions((prevActiveQuestions) => {
      const newActiveQuestions = { ...prevActiveQuestions };
      const questionKey = `${categoryIndex}-${questionIndex}`;
      newActiveQuestions[questionKey] = !prevActiveQuestions[questionKey];
      return newActiveQuestions;
    });
  };

  return (
    <div className="about-page">
       <FloatingWhatsAppButton />
      <div className="welcome-section">
        <h1>Welcome to AmriTradesVSR</h1>
        <p>Our mission is to demystify the trading process, providing personalized guidance and support...</p>
      </div>

      <div className="team-section">
        <h2>Meet Our Creative Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-section">
  <h2>What Our Clients Say</h2>
  <div className="testimonials">
    {/* First Row with 3 Cards */}
    <div className="testimonial-card">
      <p>"US market is in bull mode now. I am earning well. Thank you for teaching trading strategies 🙏"</p>
      <p>- Jayshree</p>
    </div>

    <div className="testimonial-card">
      <p>"I have learned so much in a short time. The courses are thorough and easy to understand."</p>
      <p>- Apeksha S.</p>
    </div>
    <div className="testimonial-card">
      <p>"The personalized support made all the difference in my success. Highly recommended!"</p>
      <p>- Kunal P.</p>
    </div>
  </div>

  {/* Second Row with 2 Centered Cards */}
  <div className="testimonials-second-row">
  <div className="testimonial-card">
      <p>"AmriTradesVSR changed the way I view trading. The mentorship is second to none!"</p>
      <p>- Gaurav C.</p>
    </div>
    <div className="testimonial-card">
      <p>"The insights and mentorship provided have helped me grow my trading skills significantly."</p>
      <p>- Manthan B.</p>
    </div>
  </div>
</div>


      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq-category">
            <h3>{category.category}</h3>
            <ul>
              {category.questions.map((item, questionIndex) => {
                const questionKey = `${categoryIndex}-${questionIndex}`;
                const isActive = activeQuestions[questionKey];
                return (
                  <li key={questionIndex} className={isActive ? 'active' : ''} onClick={() => toggleQuestion(categoryIndex, questionIndex)}>
                    <div className="faq-question">
                      {item.question}
                      <span className={isActive ? 'minus-icon' : 'plus-icon'}>
                        {isActive ? '−' : '+'}
                      </span>
                    </div>
                    {isActive && <span className="faq-answer">{item.answer}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
