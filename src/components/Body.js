import "./Body.css";
import DailyForecast from "./DailyForecast";
import Highlights from "./Highlights";

export default function Body({ params }) {
  const { keyword } = params;
  return (
    <div className="body">
      <DailyForecast keyword={keyword}></DailyForecast>
      <Highlights keyword={keyword}></Highlights>
    </div>
  );
}
