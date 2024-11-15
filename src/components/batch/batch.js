import React, { useState } from "react";
import BatchDetails from "../batch-details/batch-details";
import "./batch.css";

export default function Batch() {
  const [activeBatch, setActiveBatch] = useState("2025");
  return (
    <div className="batch">
      {/* Batch Selector */}
      <section className="batch-details__header">
        <div className="batch-details__year-buttons">
          <button
            className={`batch-details__year-button ${
              activeBatch === "2025" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("2025")}
          >
            2025
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "2026" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("2026")}
          >
            2026
          </button>
        </div>
      </section>

      <div className="batch__heading">Focused Learning Program</div>
      <BatchDetails activeBatch={activeBatch} setActiveBatch={setActiveBatch} />
      <div className="batch__heading">Focused Learning Program</div>
      <BatchDetails activeBatch={activeBatch} setActiveBatch={setActiveBatch} />
    </div>
  );
}
