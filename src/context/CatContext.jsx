import React, { createContext, useState, useEffect } from "react";
import { getCatRequest } from "../api/CatService";

export const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catImage, setCatImage] = useState(null);

  const getCat = async () => {
    const res = await getCatRequest();
    console.log("setting context to ", res);
    setCatImage(res);
  };

  useEffect(() => {
    let interval;
    if (autoRefresh && enabled) {
      interval = setInterval(() => {
        getCat();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh, enabled]);

  return (
    <CatContext.Provider
      value={{
        enabled,
        setEnabled,
        autoRefresh,
        setAutoRefresh,
        catImage,
        getCat,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};
