import { useUnitContext } from "context/UnitContext";

export function useUnitConversor(temp) {
  const { unitState } = useUnitContext();

  if (unitState === "C")
    return { temp: Math.round(temp * 10) / 10, unit: "°C" };
  else return { temp: Math.round((temp * 1.8 + 32) * 10) / 10, unit: "°F" };
}
