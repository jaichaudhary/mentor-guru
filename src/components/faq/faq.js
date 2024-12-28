import React, { useState } from "react";
import "./faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When does the course start?",
      answer: "The batch officially kicks off when you purchase the course.",
    },
    {
      question: "What all is covered in the batch?",
      answer:
        "Targets and follow-up analysis. Mentor connectivity on WhatsApp or Telegram during working hours. Assessment of the student and his/her performance.",
    },
    {
      question: "How does the Mentor Guru platform help students?",
      answer:
        "Mentor Guru offers personalised learning experiences with Adaptive Tests, Real-time Doubt Resolution, and tailored Study Paths that adjust to your learning speed and style, making your preparation more focused and effective. To summarise – Mentor Guru will guide students till their selection.",
    },
    {
      question:
        "What is the importance of Daily Targets & Personal Mentorship in some of the Courses that Mentor Guru Provide?",
      answer:
        "Daily Targets in Mentorship courses help keep your preparation on track by ensuring regular study habits and measurable progress. Personal mentorship offers real-time doubt clearing and personalised guidance, significantly enhancing understanding and retention of concepts.",
    },
    {
      question: "Who will be the Mentors?",
      answer:
        "Dipendra Adhikari sir along with a group of Interview Appeared Experienced mentors will guide students.",
    },
    {
      question: "What is the purpose of the program Samarth?",
      answer:
        "To help you develop discipline by writing two answers daily for 60 days. So maintaining your streak is important, questions missed on a particular day cannot be submitted on any other day.",
    },
  ];

  return (
    <section className="faq section">
      <h2 className="section__title">Frequently Asked Questions</h2>
      <div className="faq__container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq__item ${activeIndex === index ? "faq__item--active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq__question">
              {faq.question}
              <span className="faq__icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div className="faq__answer">
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
