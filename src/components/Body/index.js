import "./index.css";
import DailyForecast from "components/DailyForecast";
import Highlights from "components/Highlights";
import { UnitSwitch } from "components/SwitchUnit";

export default function Body({ params }) {
  const { keyword } = params;
  return (
    <div className="body">
      <UnitSwitch />
      <DailyForecast keyword={keyword} />
      <Highlights keyword={keyword} />
    </div>
  );
}
