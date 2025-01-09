import React, { useState } from 'react';
import './csat2025.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { db } from '../firebase/firebaseConfig';
import { ref, push } from "firebase/database"; 
import CsatFaq from '../faq/CsatFaq';
import ComboCourse from '../combo/ComboCourse';
import ContactForm from '../form/ContactForm';


function Csat2025() {

 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: ''
  });

  const [startDate, setStartDate] = useState("2nd January 2025");
  const [brochureLink, setBrochureLink] = useState("https://drive.google.com/file/d/1XgZl4prdXZjqV_jZPSZ0lqSnI2YtuYej/view?usp=sharing");
  const [enrollLink, setEnrollLink] = useState("https://hbzxwj.courses.store/614936");

const handleChange = (e) => {
  setFormData({ 
    ...formData, 
    [e.target.name]: e.target.value 
  });
};

const handleBatchChange = (batch) => {
  if(batch === 1) {
    setStartDate("2nd January 2025");
    setBrochureLink("https://drive.google.com/file/d/1YBvWh4wTRUkydtuTFFjv8-pDF735NoDB/view?usp=sharing");
    setEnrollLink("https://hbzxwj.courses.store/614936");  // Batch 1 Link
  } else if(batch === 2) {
    setStartDate("21 January 2025");
    setBrochureLink("https://drive.google.com/file/d/1Cx01UjP3F5rp3d6h0AT9gngeTrCsAqcJ/view?usp=sharing");
    setEnrollLink("https://hbzxwj.courses.store/615762");  // Batch 2 Link
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const docRef = await push(ref(db, "enrollments"), formData);
    alert("Enrollment Successful! Reference ID: " + docRef.key);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '' });
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to submit. Please try again.");
  }
};


  return (

    <>
    <div className="csat-container">
      <h1 className="csat-title">
        CSAT COURSE 2025
      </h1>
      <div className="highlight-line"></div>
      <button className="batch-button" onClick={() => handleBatchChange(1)}>Batch 1</button>
        <button className="batch-button" onClick={() => handleBatchChange(2)}>Batch 2</button>

      <div className="content-section">
        <div className="info-section">
          <p className="csat-description">
            The best course for CSAT 2025 with comprehensive coverage of all topics, with thorough understanding supported by practice test, handouts, PYQ analysis, test series and mentorship.
          </p>
          <div className="pricing">
            <span className="price">₹ 1999</span> <span className="tax">+taxes</span>
          </div>
          <p className="start-date">
              📅 <span className="orange-text">Starting from {startDate}</span>
            </p>
          <div className="cta-buttons">
          <a href={brochureLink} target="_blank" className="schedule-button">
                Brochure <span className="external-icon material-icons">description</span>
              </a>


              <button 
  className="enroll-button"
  onClick={() => window.location.href = enrollLink}
>
  Enroll Now ⚡
</button>

          </div>
        </div>

        <div className="mentor-section">
          <img
            src={"img/dinesh-mishra.svg"}
            alt="Vivek Waghmare"
            className="mentor-image"
          />
          <p className="mentor-name">Dinesh Mishra</p>
          <p className="mentor-role">IIT Kanpur Alumni</p>
          <p className="mentor-skill">5+ Years of Experience</p>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
        {[
      {
        title: "Live Coverage of CSAT",
        description: "Live coverage of CSAT syllabus; Quantitative Aptitude, Reading Comprehension, Logical Reasoning",
        icon: <i className="fas fa-tv"></i>  
      },
      {
        title: "Daily Practice Sheet",
        description: "Handout and practice sheet after every class",
        icon: <i className="fas fa-file-alt"></i>  
      },
      {
        title: "Test Series",
        description: "4 sectional tests and 2 full length tests. Analysis of tests",
        icon: <i className="fas fa-clipboard-check"></i> 
      },
      {
        title: "PYQ's",
        description: "Coverage of last 10 years previous questions",
        icon: <i className="fas fa-book-open"></i> 
      },
      {
        title: "Mentorship",
        description: "Mentorship sessions will be conducted on regular basis",
        icon: <i className="fas fa-chalkboard-teacher"></i> 
      }
    ].map((feature, index) => (
      <div className="feature-card" key={index}>
        <div className="feature-header">{feature.title}</div>
        <div className="feature-icon">{feature.icon}</div>
        <p className="feature-description">{feature.description}</p>
      </div>
    ))}
        </div>
      </div>

      <ComboCourse />
      <ContactForm />
    </div>

    <CsatFaq />
    </>
    
  );
}

export default Csat2025;