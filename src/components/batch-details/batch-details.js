<<<<<<< HEAD
import React from "react";
import "./batch-details.css";

const BatchDetails = ({ programDetails }) => {
  return (
    <div className="batch-details__container">
      {/* Batch Card */}
      <div className="batch-details__card">
        <div className="batch-details__left">
          <img
            src={programDetails.image} // Use the image from programDetails
            alt={programDetails.title}
            className="batch-details__image"
          />
        </div>
        <div className="batch-details__info">
          <p className="batch-details__guidance">{programDetails.guidance}</p>
          <h2 className="batch-details__name">{programDetails.title}</h2>
          <ul className="batch-details__features">
            {programDetails.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="batch-details__buttons">
            {/* Buy Button */}
            <a
              href={programDetails.buyLink} // Unique buy link for each program
              target="_blank"
              rel="noopener noreferrer"
              className="batch-details__learn-more"
            >
              Buy
            </a>

            {/* Brochure Button */}
            <a
              href={programDetails.brochureLink} // Unique brochure link for each program
              target="_blank"
              rel="noopener noreferrer"
              className="batch-details__view-timetable"
            >
              Brochure
            </a>
=======
import React, { useState } from 'react';
import './batch-details.css';

const BatchDetails = ({activeBatch, setActiveBatch}) => {

  return (
    <div className="batch-details__container">

      {/* Batch Card */}
      <div className="batch-details__card">
        <div className="batch-details__left">
        <img
          src="1-1_mentorship.png" // Replace with actual image URL
          alt="1-1 Mentorship"
          className="batch-details__image"
        />
        </div>
        <div className="batch-details__info">
          <p className="batch-details__guidance">✨ Personal Guidance</p>
          <h2 className="batch-details__name">FOCUS Batch for UPSC {activeBatch}</h2>
          <ul className="batch-details__features">
            <li>👥 Get Accountability partner</li>
            <li>⭐ Complete preparation for Prelims & Mains {activeBatch}</li>
            <li>∞ Unlimited access to SuperKalam</li>
            <li>🎁 Test Series worth ₹25K</li>
          </ul>
          <div className="batch-details__buttons">
            <button className="batch-details__learn-more">Learn More</button>
            <button className="batch-details__view-timetable">View Timetable</button>
>>>>>>> origin/master
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
