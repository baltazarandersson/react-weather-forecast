import { React, useEffect } from "react";
import "./HighlightCard.css";
import cardClass from "../services/cardClass";
import HighlightBottom from "./HighlightBottom";

export default function HightlightCard({ type, data }) {
  const cardType = {
    wind: { title: "Wind status", unit: "mph" },
    humidity: { title: "Humidity", unit: "%" },
    visibility: { title: "Visibility", unit: "miles" },
    pressure: { title: "Air Pressure", unit: "mb" },
  };

  const title = cardType[type].title;
  const unit = cardType[type].unit;

  function cardTypeComparator() {
    if (cardType[type] === cardType.wind) {
      return (
        <HighlightBottom
          data={data}
          unit={"mph"}
          bg={
            "linear-gradient(90deg, rgba(98,113,184,1) 10%, rgba(76,158,89,1) 25%, rgba(157,137,63,1) 40%, rgba(144,66,105,1) 60%, rgba(91,136,161,1) 90%)"
          }
        />
      );
    } else if (cardType[type] === cardType.humidity) {
      return <HighlightBottom data={data} unit={"%"} bg={"#ffec65"} />;
    }
  }

  return (
    <div className={cardClass(type)}>
      <p>{title}</p>
      <div className="data">
        {Math.round(data * 10) / 10}
        <p>{unit}</p>
      </div>
      {cardTypeComparator()}
    </div>
  );
}
