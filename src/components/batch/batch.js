import React, { useState } from "react";
import BatchDetails from "../batch-details/batch-details";
import "./batch.css";

export default function Batch() {
  const [activeBatch, setActiveBatch] = useState("Prelims");
  return (
    <div className="batch">
      {/* Batch Selector */}
      <section className="batch-details__header">
        <div className="batch-details__year-buttons">
          <button
            className={`batch-details__year-button ${
              activeBatch === "2025" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Prelims")}
          >
            Prelims
          </button>
          <button
            className={`batch-details__year-button ${
              activeBatch === "2026" ? "active" : ""
            }`}
            onClick={() => setActiveBatch("Mains")}
          >
            Mains
          </button>
        </div>
      </section>

      {activeBatch === "Prelims" ? (
        <>
          <div className="batch__heading">Focused Learning Program</div>
          <BatchDetails
            activeBatch={activeBatch}
            setActiveBatch={setActiveBatch}
          />
          <div className="batch__heading">Focused Learning Program</div>
          <BatchDetails
            activeBatch={activeBatch}
            setActiveBatch={setActiveBatch}
          />
        </>
      ) : (
        <>
          {" "}
          <div className="batch__heading">Focused Learning Program</div>
          <BatchDetails
            activeBatch={activeBatch}
            setActiveBatch={setActiveBatch}
          />
          <div className="batch__heading">Focused Learning Program</div>
          <BatchDetails
            activeBatch={activeBatch}
            setActiveBatch={setActiveBatch}
          />
          <div className="batch__heading">Focused Learning Program</div>
          <BatchDetails
            activeBatch={activeBatch}
            setActiveBatch={setActiveBatch}
          />
        </>
      )}
    </div>
  );
}
