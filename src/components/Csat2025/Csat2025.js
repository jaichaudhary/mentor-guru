import React, { useState } from 'react';
import './csat2025.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { db } from '../firebase/firebaseConfig';
import { ref, push } from "firebase/database"; 
import CsatFaq from '../faq/CsatFaq';
import ComboCourse from '../combo/ComboCourse';


function Csat2025() {

  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: ''
    });
  
    const handleChange = (e) => {
      setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const docRef = await push(ref(db, "enrollments"), formData);  // Push to Realtime DB
        alert("Enrollment Successful! Reference ID: " + docRef.key);  // Use key for ID
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
      <button className="batch-button">Batch 1</button>

      <div className="content-section">
        <div className="info-section">
          <p className="csat-description">
            The best course for CSAT 2025 with comprehensive coverage of all tropics, with through understanding supported by practice test, handouts, PYQ analysis, test series and mentorship.
          </p>
          <div className="pricing">
            <span className="price">₹ 1999</span> <span className="tax">+taxes</span>
          </div>
          <p className="start-date">
            📅 <span className="orange-text">Starting from 2nd January 2025</span>
          </p>
          <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1XgZl4prdXZjqV_jZPSZ0lqSnI2YtuYej/view?usp=sharing" target="_blank" className="schedule-button">
  Brochure <span className="external-icon material-icons">description</span>
</a>


<button 
  className="enroll-button"
  onClick={() => window.location.href='https://razorpay.me/@mentorguru?amount=nmRXZlFEe67Qhp%2F%2BZVSocw%3D%3D'}
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
        icon: <i className="fas fa-tv"></i>  // TV icon for live coverage
      },
      {
        title: "Daily Practice Sheet",
        description: "Handout and practice sheet after every class",
        icon: <i className="fas fa-file-alt"></i>  // Document icon for practice sheets
      },
      {
        title: "Test Series",
        description: "4 sectional tests and 2 full length tests. Analysis of tests",
        icon: <i className="fas fa-clipboard-check"></i>  // Clipboard icon for test series
      },
      {
        title: "PYQ's",
        description: "Coverage of last 10 years previous questions",
        icon: <i className="fas fa-book-open"></i>  // Book icon for PYQs
      },
      {
        title: "Mentorship",
        description: "Mentorship sessions shall be conducted on regular basis",
        icon: <i className="fas fa-chalkboard-teacher"></i>  // Teacher icon for mentorship
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

      {/* Mentorship Section */}
      {/* <div className="mentorship-section">
        <div className="mentorship-content">
          <div className="mentorship-info">
            <h2>COMBO <span className="highlight-text">COURSE</span></h2>
            <p>Prelims Kaushal + CSAT Course 2025</p>
            <button 
  className="mentorship-button"
  onClick={() => window.location.href='https://razorpay.me/@mentorguru?amount=1dWOigOTbkIj7L%2BG4LNf0A%3D%3D'}
>
  Enroll Now
</button>
          </div>

          
        </div>
      </div> */}

      <ComboCourse />


      {/* Still In Doubt Section */}
      <div className="doubt-section">
        <div className="doubt-content">
          <div className="doubt-text">
            <h2><strong>Have a doubt?</strong></h2>
            <p>Start your preparation for UPSC exam. Ask your first question now.</p>
            <div className="phone-section">
              <span className="phone-icon">📞</span>
              <span className="whatsapp-icon">
    <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="WhatsApp" width="20" className="whatsapp-logo" />
  </span>
              <span className="phone-number">9205053891</span> {/* add whatsapp logo */}
            </div>
          </div>

          <div className="form-card">
            <h2 className="form-title">Get in Touch</h2>
            <p className="form-subtext">You can reach us anytime</p>
            
            {/* Form with Realtime Database Submission */}
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First name" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last name" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <select 
                  name="course" 
                  value={formData.course} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>Select your course</option>
                  <option value="csat">CSAT COURSE 2025</option>
                  <option value="mentorship">PRELIMS KAUSHAL</option>
                  <option value="test-series">MOKSHA</option>
                  <option value="test-series">MOKSHA PLUS</option>
                  <option value="test-series">SAMARTH</option>
                  <option value="test-series">MAINS WARRIOR</option>
                </select>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <CsatFaq />
    </>
    
  );
}

export default Csat2025;