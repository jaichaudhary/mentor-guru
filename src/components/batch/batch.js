import React, { useState } from "react";
import BatchDetails from "../batch-details/batch-details";
import "./batch.css";

export default function Batch() {
  const [activeBatch, setActiveBatch] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);


  const comboCourse = {
    guidance: "✨ Comprehensive Preparation",
    title: "Combo Course (Prelims + CSAT)",
    features: [
      "👥 Holistic coverage of the syllabus with customized individual plan in 4 Months",
      "⭐ One Stop Solution for your Prelims GS paper I & II (CSAT)",
      "∞ Analysis of PYQs and identify patterns/themes for each subject",
    ],
    image: "combo.jpg",
    buyLink: "https://hbzxwj.courses.store/615608",
  };

  const freeCourse = {
    guidance: "✨ Free Resources",
    title: "Free UPSC Course",
    features: [
      "📚 Join this series of free webinars led by Dipendra Adhikari Sir (AIR 600 - CSE 2020), where you'll gain valuable insights into UPSC preparation and have the exclusive chance to interact directly with him.",
    ],
    image: "open.svg",
    buyLink: "https://hbzxwj.courses.store/617877",
    price: "Free",
  };

  const sociologyCourse = {
    guidance: "✨ Optional Subject Mastery",
    title: "Sociology Optional",
    features: [
      "👥 One-to-One Metorship with one-to-one doubt resolution",
      "⭐️ Macro-Planning and time management with pyq analysis",
      "∞ Live Answer Writing sessions with live evaluation of 4 Sectional and 2 FLTs",
    ],
    image: "SOCIOLOGY.jpg",
    buyLink: "https://hbzxwj.courses.store/620343",
    brochureLink:
      "https://drive.google.com/file/d/113AHQ6zNPQ-909qW9iH3L53CeBAEIZxs/view?usp=sharing",
  };

  const psirCourse = {
    guidance: "✨ Optional Subject Mastery",
    title: "PSIR Optional",
    features: [
      "👥 One-to-One Metorship with one-to-one doubt resolution",
      "⭐️ Macro-Planning and time management with pyq analysis",
      "∞ Live Answer Writing sessions with live evaluation of 4 Sectional and 2 FLTs",
    ],
    image: "PSIR-OPTIONAL.jpg",
    buyLink: "https://hbzxwj.courses.store/620339",
    brochureLink:
      "https://drive.google.com/file/d/1MuC4H2TUuY-iR5i8LimVVw7tX9TbX00h/view?usp=sharing",
  };

  const batchPrograms = {
    Prelims: [
      {
        guidance: "✨ Customized Support",
        title: "Prelims Kaushal",
        features: [
          "👥 Complete supervision by Dipendra Adhikari sir",
          "⭐ Continuous 1-1 mentorship by interview appeared experienced mentors.",
          "∞ Five revisions before prelims",
        ],
        image: "prelims.svg",
        buyLink: "https://hbzxwj.courses.store/614904",
        brochureLink:
          "https://drive.google.com/file/d/1OyFeqY8jiJaS3Maox6bjC_ZNNJ0Selz6/view?usp=sharing",
      },
      {
        guidance: "✨ Customized Support",
        title: "CSAT Course 2025-B1",
        features: [
          "🔴 Live complete coverage of CSAT syllabus",
          "⭐ Coverage of last 10 years of PYQs",
          "∞ Handouts and practice sheets after every class",
        ],
        image: "CSAT-COURSE-2025.jpg",
        buyLink: "https://hbzxwj.courses.store/614936",
        brochureLink:
          "https://drive.google.com/file/d/1YBvWh4wTRUkydtuTFFjv8-pDF735NoDB/view?usp=sharing",
      },
    ],
    Mains: [
      {
        guidance: "✨ Customized Support",
        title: "Moksha Plus",
        features: [
          "👥 Regular group sessions by Dipendra Adhikari sir",
          "⭐ Continuous 1-1 mentorship by interview appeared experienced mentors.",
          "∞ Comprehensive coverage of major + minor subjects in a time-bound manner",
        ],
        image: "moksha-plus.jpg",
        buyLink: "https://hbzxwj.courses.store/614924",
        brochureLink:
          "https://drive.google.com/file/d/1nrMS5ZJ_dPqoI3jrqIPGB1gWUDTizECq/view?usp=sharing",
      },
    ],

  
    Optional: [sociologyCourse, psirCourse],

    Combo: [comboCourse],
    Free: [freeCourse],
  };

  
  const allPrograms = [...Object.values(batchPrograms).flat()];

  return (
    <div className="batch">
      <section className="batch-details__header">
        <div className="buttonbox">Click Here for Courses</div>
        {/* Dropdown Menu for Mobile View */}
        <div className="batch-details__dropdown">
          <button
            className="batch-details__dropdown-toggle"
            onClick={toggleDropdown}
          >
            {activeBatch}
          </button>
          {showDropdown && (
            <ul className="batch-details__dropdown-menu">
              {Object.keys(batchPrograms).concat("All").map((batch) => (
                <li
                  key={batch}
                  className={`batch-details__dropdown-item ${
                    activeBatch === batch ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveBatch(batch);
                    setShowDropdown(false);
                  }}
                >
                  {batch}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="batch-details__year-buttons">

          <button
            className={`batch-details__year-button ${
              activeBatch === "All" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("All")}
          >
            All
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "Prelims" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Prelims")}
          >
            Prelims
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "Mains" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Mains")}
          >
            Mains
          </button>

         
          <button
            className={`batch-details__year-button ${
              activeBatch === "Optional" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Optional")}
          >
            Optional
          </button>

          <button
            className={`batch-details__year-button ${
              activeBatch === "Combo" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Combo")}
          >
            Combo
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "Free" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Free")}
          >
            Free Course
          </button>
        </div>
      </section>

      <div className="batch__programs">
        {(activeBatch === "All"
          ? allPrograms
          : batchPrograms[activeBatch]
        ).map((program, index) => (
          <BatchDetails
            key={`${activeBatch}-${index}`}
            activeBatch={activeBatch}
            programDetails={program}
          />
        ))}
      </div>
    </div>
  );
}
