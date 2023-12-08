import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HistoryContext = createContext();

function NavigationHistory({ children }) {
  const location = useLocation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((previousHistory) => {
      const newPath = location.pathname;

      if (newPath !== previousHistory[previousHistory.length - 1]) {
        return [...previousHistory, newPath];
      }

      return previousHistory;
    });
  }, [location]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default NavigationHistory;
