import React, { useState } from "react";
import "./Courses.css";
import FloatingWhatsAppButton from "./FloatingWAButton";

const CoursePage = () => {
  const [activeOnlineFeature, setActiveOnlineFeature] = useState(null);
  const [activeOfflineFeature, setActiveOfflineFeature] = useState(null);

  const onlineBenefits = [
    {
      name: "Flexible Timing",
      description:
        "Our sessions are conducted entirely online, allowing you the convenience to participate from any location, at any time. This flexibility ensures that you can seamlessly fit them into your schedule, whether you're at home, at work, or even traveling. With no geographical or time constraints, you have the freedom to learn and engage in a way that best suits your lifestyle and commitments.",
    },
    {
      name: "Hand Holding Support ",
      description:
        "We offer dedicated live market support to empower students with hands-on practical experience, helping them build confidence in real-time scenarios. In addition, we conduct regular revision sessions designed to reinforce core concepts, enabling students to revisit crucial topics and address any lingering questions. These sessions ensure a deeper understanding and provide a strong foundation, helping students solidify their knowledge and apply it effectively.",
    },
    {
      name: "Live Session",
      description:
        "All sessions will be conducted live online, ensuring an interactive and engaging learning experience. Unlike pre-recorded content, these live sessions allow students to actively participate, ask questions, and receive immediate clarification on their doubts. This real-time interaction fosters a dynamic and personalized learning environment, enabling students to grasp concepts more effectively and feel fully supported throughout their learning journey.",
    },
    {
      name: "Proven Strategies",
      description:
        "We’ve all experimented with various approaches in search of that elusive perfect plan to ensure success. However, the truth is, there’s no single magic formula that works for everyone. What we can offer, though, are time-tested strategies that deliver tangible results. These methods have been thoroughly tried and refined by us, ensuring their effectiveness. By sharing our firsthand experience and proven techniques, we equip you with practical tools to achieve your goals and navigate challenges with confidence.",
    },
  ];

  const offlineBenefits = [
    {
      name: "Personalized Attention",
      description:
        "Get one-on-one guidance from Akshay Amri, addressing your specific needs and goals.",
    },
    {
      name: "Customized Trading Plan",
      description:
        "Receive a tailored trading plan based on your goals, risk tolerance, and objectives.",
    },
    {
      name: "Interactive Q&A",
      description:
        "Ask questions directly and get answers from an experienced expert.",
    },
    {
      name: "Accelerated Learning",
      description:
        "Learn faster with direct expert guidance and mentorship.",
    },
  ];

  const renderBenefitsSection = (benefits, isOnlineCourse) => (
    <div className="benefits-section">
      <div className="circle-container">
        <div className="circle">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`circle-section section-${index + 1}`}
              onClick={() =>
                isOnlineCourse
                  ? setActiveOnlineFeature(benefit)
                  : setActiveOfflineFeature(benefit)
              }
            >
              <span>{benefit.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-description">
        {isOnlineCourse
          ? activeOnlineFeature
            ? (
                <>
                  <h3>{activeOnlineFeature.name}</h3>
                  <p>{activeOnlineFeature.description}</p>
                </>
              )
            : <p>Select a section on the circle to see details</p>
          : activeOfflineFeature
            ? (
                <>
                  <h3>{activeOfflineFeature.name}</h3>
                  <p>{activeOfflineFeature.description}</p>
                </>
              )
            : <p>Select a section on the circle to see details</p>
        }
      </div>
    </div>
  );

  return (
    <div className="course-page">
       <FloatingWhatsAppButton />
      <header className="main-header">
        <h1>Unlock Your Potential with Our Courses</h1>
        <p>Choose between our comprehensive online and offline courses and start your journey today!</p>
      </header>

      {/* What We Provide Section */}
      {/* <section className="what-we-provide">
        <h2>What We Provide</h2>
        <p>Our courses are designed to equip you with the knowledge and skills to achieve financial success and a luxurious lifestyle.</p>
      </section> */}

      {/* Online Course Section */}
      <section className="online-course">
        <h2>Online Course</h2>
        <p>Explore the benefits of our online courses and how they can help you succeed.</p>
        {renderBenefitsSection(onlineBenefits, true)}
      </section>

      {/* Offline Course Section */}
      <section className="offline-course">
        <h2>Offline Course</h2>
        <p>Experience our personalized offline courses with one-on-one guidance and more.</p>
        {renderBenefitsSection(offlineBenefits, false)}
      </section>

      {/* Instructor Section */}
      <section className="instructor">
        {/* <div className="bio">
          <img
            src={`${process.env.PUBLIC_URL}/AkayAmri.png`} // Correct way to reference public folder
            alt="Akshay Amri"
          />
          <h2>Meet Your Mentor: Akshay Amri</h2>
          <p>
            Akshay Amri is an expert in financial education and trading. With years of experience, he helps individuals unlock their true potential and achieve financial freedom.
          </p>
        </div> */}
          <div className="ceo-section">
          <h2>Meet Your Mentor: Akshay Amri</h2>
       <div className="ceo-content">
       <div className="ceo-image">
           <img src="AkshayAmri.png" alt="CEO" />
         </div>
         <div className="ceo-text">
           <p>
            
           Akshay Amri is a distinguished professional in the field of stock market analysis and financial education. Holding a Bachelor’s degree in Computer Applications (BCA), Akshay embarked on his trading journey in 2017. Over the years, he has built a solid foundation of expertise in the intricacies of the stock market. His relentless pursuit of excellence led him to earn certifications as an NISM-certified Research Analyst and a certified Mutual Fund Distributor, further solidifying his credentials in the financial domain.

The year 2021 marked a pivotal moment in Akshay's career when he mastered the art of technical analysis—a discipline that has since become the cornerstone of his professional endeavors. With his in-depth understanding of market trends and technical indicators, Akshay has demonstrated that achieving consistent success in the stock market is attainable through the proper application of technical analysis principles.

Akshay’s mission transcends personal success; he is deeply committed to empowering others through financial literacy and education. Believing that financial knowledge is not a privilege but a necessity, Akshay dedicates his efforts to making this knowledge accessible to everyone. He is the architect behind structured wealth management programs designed to help individuals achieve their financial aspirations and attain financial independence.

Through his work, Akshay aims to inspire and guide people toward a future where financial security and freedom are within reach. His unwavering commitment to enhancing financial literacy has positioned him as a trusted mentor and advocate for financial empowerment.

If you are seeking guidance on navigating the complexities of the financial world or wish to achieve your financial goals, Akshay Amri is here to lead the way with his expertise and vision.         
          </p>
           <p className="ceo-name">Akshay Amri</p>
         </div>
         
       </div>
     </div>
      </section>
    </div>
  );
};

export default CoursePage;
