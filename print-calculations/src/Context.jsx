import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State Variables
  const [result, setResult] = useState("0");

  // Functions

  const resultCalulation = (length, width) => {
    const temp = ((length * width) / 144) * 3.5;

    const tempS = temp.toString();

    if (tempS.includes(".")) {
      let arr = tempS.split(".");
      setResult(`${arr[0]}.${arr[1].slice(0, 2)}`);
    } else {
      setResult(tempS);
    }
  };

  // Use Effects

  return (
    <AppContext.Provider value={{ result, resultCalulation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
