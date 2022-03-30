import React from "react";
import "./index.css";

export function Spinner({ spinnerClass }) {
  return <div className={`loader ${spinnerClass} `}>Loading...</div>;
}
