import React, { useState } from "react";
import BatchDetails from "../batch-details/batch-details";
import "./batch.css";

export default function Batch() {
  const [activeBatch, setActiveBatch] = useState("All");

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
        brochureLink: "https://drive.google.com/file/d/1OyFeqY8jiJaS3Maox6bjC_ZNNJ0Selz6/view?usp=sharing",
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
        brochureLink: "https://drive.google.com/file/d/1YBvWh4wTRUkydtuTFFjv8-pDF735NoDB/view?usp=sharing",
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
        brochureLink: "https://drive.google.com/file/d/1nrMS5ZJ_dPqoI3jrqIPGB1gWUDTizECq/view?usp=sharing",
      },
      {
        guidance: "✨ Customized Support",
        title: "Moksha",
        features: [
          "👥 Regular group sessions by Dipendra Adhikari sir",
          "⭐ Continuous 1-1 mentorship by interview appeared experienced mentors.",
          "∞ Comprehensive coverage of major subjects in a time-bound manner",
        ],
        image: "Metorship4.svg",
        buyLink: "https://hbzxwj.courses.store/614913",
        brochureLink: "https://drive.google.com/file/d/1nrMS5ZJ_dPqoI3jrqIPGB1gWUDTizECq/view?usp=sharing",
      },
    ],
    "Answer Writing": [
      {
        guidance: "✨ Customized Support",
        title: "Mains warriors 2025",
        features: [
          "👥 LIVE evaluation of unlimited answers and 20 essays.",
          "⭐ Time-bound evaluation",
          "∞ Accountability, consistency, and discipline",
        ],
        image: "Mains-warriors.jpg",
        buyLink: "https://hbzxwj.courses.store/614930",
        brochureLink: "https://drive.google.com/file/d/1MDpzibbOHQlwhc20VqOLqkT12ILrvkwP/view?usp=sharing",
      },
      {
        guidance: "✨ Customized Support",
        title: "SAMARTH",
        features: [
          "👥 Daily answer writing course for 2 months",
          "⭐ Weekly one mentorship call",
          "∞ Affordable course to develop discipline and consistency",
        ],
        image: "Answer2.svg",
        buyLink: "https://hbzxwj.courses.store/614927",
        brochureLink: "https://drive.google.com/file/d/1UiAowXicFqAkp2GQvz_p-PfBBSLjSSiT/view?usp=sharing",
      },
    ],
    Combo: [comboCourse],
  };

  const allPrograms = [
    ...Object.values(batchPrograms).flat(),
  ];

  return (
    <div className="batch">
      <section className="batch-details__header">
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
              activeBatch === "Answer Writing" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Answer Writing")}
          >
            Answer Writing
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "Combo" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Combo")}
          >
            Combo
          </button>
        </div>
      </section>

      <div className="batch__programs">
        {(activeBatch === "All"
          ? [...Object.values(batchPrograms).flat().filter((item) => item.title !== comboCourse.title), comboCourse]
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
