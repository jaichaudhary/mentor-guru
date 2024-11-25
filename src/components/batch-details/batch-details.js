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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
