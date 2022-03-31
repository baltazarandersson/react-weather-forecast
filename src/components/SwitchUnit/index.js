import { useUnitContext } from "context/UnitContext";
import React from "react";
import "./index.css";

export function UnitSwitch() {
  console.log("a");
  const { unitState, toggleUnit } = useUnitContext();

  return (
    <div className="switch-container">
      <div
        onClick={() => toggleUnit("C")}
        className={`switch-container__button ${
          unitState === "C" ? "switch-container__button--active" : ""
        }`}
      >
        °C
      </div>
      <div
        onClick={() => toggleUnit("F")}
        className={`switch-container__button ${
          unitState === "F" ? "switch-container__button--active" : ""
        }`}
      >
        °F
      </div>
    </div>
  );
}
