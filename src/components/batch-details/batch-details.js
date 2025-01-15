import React from "react";
import "./batch-details.css";
import { BUTTON_TEXT, PRICING } from "./constants"; // Adjusted path to constants.js

const BatchDetails = ({ programDetails, activeBatch }) => {
  const isFreeCourse = programDetails?.price === PRICING.FREE; // Use PRICING enum

  return (
    <div className="batch-details__container">
      {/* Batch Card */}
      <div className="batch-details__card">
        <div className="batch-details__left">
          <img
            src={programDetails?.image || "1-1_mentorship.png"}
            alt={programDetails?.title || "1-1 Mentorship"}
            className="batch-details__image"
          />
        </div>
        <div className="batch-details__info">
          <p className="batch-details__guidance">
            {programDetails?.guidance || "✨ Personal Guidance"}
          </p>
          <h2 className="batch-details__name">
            {programDetails?.title ||
              `FOCUS Batch for UPSC ${activeBatch || ""}`}
          </h2>
          <ul className="batch-details__features">
            {programDetails?.features ? (
              programDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            ) : (
              <>
                <li>👥 Get Accountability partner</li>
                <li>
                  ⭐ Complete preparation for Prelims & Mains {activeBatch}
                </li>
                <li>∞ Unlimited access to SuperKalam</li>
                <li>🎁 Test Series worth ₹25K</li>
              </>
            )}
          </ul>
          <div className="batch-details__buttons">
            {/* Join/Buy Button */}
            {programDetails?.buyLink && (
              <a
                href={programDetails.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="batch-details__learn-more"
              >
                {isFreeCourse ? BUTTON_TEXT.JOIN_NOW : BUTTON_TEXT.BUY}
              </a>
            )}

            {/* Brochure Button */}
            {programDetails?.brochureLink && (
              <a
                href={programDetails.brochureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="batch-details__view-timetable"
              >
                Brochure
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
