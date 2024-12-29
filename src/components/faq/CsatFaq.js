import React, { useState } from "react";
import "./faq.css";

function CsatFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of the CSAT course?",
      answer: "Our CSAT course is designed to help UPSC aspirants master the skills required to confidently tackle CSAT Paper II in the Prelims. This course will help you in clearing Paper 2 of Prelims easily.",
    },
    {
      question: "Who should enroll in this course?",
      answer: (
        <ul>
          <li>Aspirants struggling with CSAT topics like reasoning, comprehension, or mathematics.</li>
          <li>Candidates aiming to build speed and accuracy in solving CSAT questions.</li>
          <li>Those looking for a structured study plan with expert guidance.</li>
        </ul>
      ),
    },
    {
      question: "What does the course cover?",
      answer: (
        <ul>
          <li>Reading Comprehension</li>
          <li>Logical Reasoning & Analytical Ability</li>
          <li>Quantitative Aptitude (Time, Speed, Distance, Percentages, Ratios, etc.)</li>
          <li>Data Interpretation (Graphs, Charts, and Tables)</li>
          <li>Decision Making and Problem Solving</li>
        </ul>
      ),
    },
    {
      question: "What is the duration of the course?",
      answer: "The course typically runs for 4 months with live classes, practice sessions, and mock tests to ensure thorough preparation.",
    },
    {
      question: "Do you provide study material for the course?",
      answer: (
        <ul>
          <li>Yes, all enrolled students receive class handouts, including:</li>
          <li>Practice sets for each topic.</li>
        </ul>
      ),
    },
    {
      question: "Are there any mock tests included in the course?",
      answer: "Yes, the course includes multiple mock tests modeled on the UPSC CSAT pattern. These tests help you assess your progress and build exam confidence.",
    },
    {
      question: "What is the mode of delivery for the course?",
      answer: (
        <ul>
          <li>Live interactive sessions with faculty.</li>
          <li>Recorded lectures for flexible learning.</li>
          <li>Doubt-clearing sessions and one-on-one mentoring.</li>
        </ul>
      ),
    },
    {
      question: "How much time should I dedicate to the course daily?",
      answer: "We recommend dedicating 2-3 hours daily, which includes attending live classes, reviewing study material, and practicing mock questions.",
    },
    {
      question: "How can I contact you for more information?",
      answer: "You can reach out to us via the Contact Us section on the website or email us directly at ask@mentorguru.in.",
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
              {activeIndex === index && (
                <div>{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CsatFaq;
