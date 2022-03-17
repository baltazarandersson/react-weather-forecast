import React from "react";

export default function HighlightBottom({ data, unit, bg }) {
  return (
    <div className="bottom-box">
      <div className="bottom-percentages">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="bottom-bar" style={{ background: `${bg}` }}>
        <div style={{ width: `${100 - data}%` }}></div>
      </div>
      <div>{unit}</div>
    </div>
  );
}
