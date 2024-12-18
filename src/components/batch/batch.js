import React, { useState } from "react";
import BatchDetails from "../batch-details/batch-details";
import "./batch.css";

export default function Batch() {
  const [activeBatch, setActiveBatch] = useState("All");

  // Define the programs for each batch with their content and images
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
        buyLink: "https://forms.gle/gK1a314sVHm6zAyK9",
        brochureLink: "https://drive.google.com/file/d/1GRjNyNXFtANIGbhsuVMgmr0gLvDSRAcL/view?usp=sharing",
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
        buyLink: "https://forms.gle/gK1a314sVHm6zAyK9",
        brochureLink: "https://drive.google.com/file/d/1_I5Q_BMM-8_JzDhncsYIRISmi-srA89Y/view?usp=sharing",
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
        buyLink: "https://forms.gle/gK1a314sVHm6zAyK9",
        brochureLink: "https://drive.google.com/file/d/1_I5Q_BMM-8_JzDhncsYIRISmi-srA89Y/view?usp=sharing",
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
        buyLink: "https://forms.gle/gK1a314sVHm6zAyK9",
        brochureLink: "https://drive.google.com/file/d/1loCnT2MRZ-KnCz_wI0Io2ctOTxXsXQF2/view?usp=sharing",
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
        buyLink: "https://forms.gle/gK1a314sVHm6zAyK9",
        brochureLink: "https://drive.google.com/file/d/1sqqGaEIg-3UDj75d1Vx24fQQLt4CJhkj/view?usp=sharing",
      },
    ],
  };

  // Combine all programs for the "All" tab
  const allPrograms = Object.values(batchPrograms).flat();

  return (
    <div className="batch">
      {/* Batch Selector */}
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
        </div>
      </section>

      {/* Render BatchDetails based on active batch */}
      <div className="batch__programs">
        {(activeBatch === "All" ? allPrograms : batchPrograms[activeBatch]).map(
          (program, index) => (
            <BatchDetails
              key={`${activeBatch}-${index}`}
              activeBatch={activeBatch}
              programDetails={program}
            />
          )
        )}
      </div>
    </div>
  );
}
