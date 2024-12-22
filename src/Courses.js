import React, { useState } from "react";
import "./Courses.css";

const Courses = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const curriculumPoints = [
    {
      id: 1,
      title: "Basic to Advanced Training",
      details:
        "This module covers the fundamentals and advanced concepts of trading, from understanding the stock market to mastering complex strategies.",
    },
    {
      id: 2,
      title: "Future & Options",
      details:
        "Learn the basics of futures and options trading, including strategies to manage risk and increase returns.",
    },
    {
      id: 3,
      title: "Time Management & Goal Setting",
      details:
        "Master the art of managing your time effectively, setting clear goals, and achieving them consistently.",
    },
    {
      id: 4,
      title: "Financial Literacy & Planning",
      details:
        "Gain essential knowledge on managing personal finances, creating budgets, and planning for long-term financial success.",
    },
    {
      id: 5,
      title: "Identifying Profitable Opportunities",
      details:
        "Learn how to spot profitable trading opportunities by analyzing the market trends and economic factors.",
    },
  ];

  const handleCurriculumSelect = (curriculum) => {
    setSelectedCurriculum(curriculum);
  };

  return (
    <div className="courses-page">
      {/* Curriculum Section */}
      <div className="curriculum-section">
        <h2>Course Curriculum</h2>
        <div className="curriculum-layout">
          {/* Central Box */}
          <div className="central-box">Curriculum</div>

          {/* Surrounding Boxes */}
          <div className="surrounding-boxes">
            {curriculumPoints.map((curriculum) => (
              <div
                key={curriculum.id}
                className={`curriculum-box ${
                  selectedCurriculum?.id === curriculum.id ? "active" : ""
                }`}
                onClick={() => handleCurriculumSelect(curriculum)}
              >
                <h3>{curriculum.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <div className="details-panel">
          {selectedCurriculum ? (
            <>
              <h3>{selectedCurriculum.title}</h3>
              <p>{selectedCurriculum.details}</p>
            </>
          ) : (
            <p>Select a curriculum point to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
