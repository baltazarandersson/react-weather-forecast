import "./index.css";
import DailyForecast from "components/DailyForecast";
import Highlights from "components/Highlights";

export default function Body({ params }) {
  const { keyword } = params;
  return (
    <div className="body">
      <DailyForecast keyword={keyword}></DailyForecast>
      <Highlights keyword={keyword}></Highlights>
    </div>
  );
}
