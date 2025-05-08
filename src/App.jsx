import React from "react";
import { CatProvider } from "./context/CatContext";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <CatProvider>
      <MainPage />
    </CatProvider>
  );
}

export default App;
