import React, { useState } from 'react';
import './contactForm.css';
import { db } from '../firebase/firebaseConfig';
import { ref, push } from "firebase/database"; 

function ContactForm() {
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
      const docRef = await push(ref(db, "enrollments"), formData);
      alert("Enrollment Successful! Reference ID: " + docRef.key);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
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
            <span className="phone-number">9205053891</span>
          </div>
        </div>

        <div className="form-card">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtext">You can reach us anytime</p>
          
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
                <option value="csat-2025">CSAT COURSE 2025</option>
                <option value="prelims-kaushal">PRELIMS KAUSHAL</option>
                <option value="moksha">MOKSHA</option>
                <option value="moksha-plus">MOKSHA PLUS</option>
                <option value="samarth">SAMARTH</option>
                <option value="mains-warrior">MAINS WARRIOR</option>
                <option value="combo-course">COMBO COURSE</option>
              </select>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
