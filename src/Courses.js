import React, { useState } from "react";
import "./Courses.css";

const CoursePage = () => {
  const [activeOnlineFeature, setActiveOnlineFeature] = useState(null);
  const [activeOfflineFeature, setActiveOfflineFeature] = useState(null);

  const onlineBenefits = [
    {
      name: "Leverage Technology and Skills",
      description:
        "Streamline workflow, increase productivity, and learn how to leverage technology for success.",
    },
    {
      name: "Manage Your Work Efficiently",
      description:
        "Prioritize tasks, automate workflows, and increase productivity with digital tools.",
    },
    {
      name: "Earn a Lucrative Income",
      description:
        "Build a business or investment portfolio to earn multiple streams of income.",
    },
    {
      name: "Achieve Luxury Lifestyle",
      description:
        "Create a vision for your ideal lifestyle and achieve financial freedom and luxury.",
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
        <div className="bio">
          <img
            src={`${process.env.PUBLIC_URL}/AkayAmri.png`} // Correct way to reference public folder
            alt="Akshay Amri"
          />
          <h2>Meet Your Mentor: Akshay Amri</h2>
          <p>
            Akshay Amri is an expert in financial education and trading. With years of experience, he helps individuals unlock their true potential and achieve financial freedom.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
