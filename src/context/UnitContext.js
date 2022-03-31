import { useContext, useState } from "react";
import React from "react";

const UnitContext = React.createContext();

export const useUnitContext = () => useContext(UnitContext);
export function UnitContextProvider({ children }) {
  const [unitState, setUnitState] = useState("C");

  function toggleUnit(unit) {
    setUnitState(unit);
  }

  return (
    <UnitContext.Provider value={{ unitState, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}
