import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColombiaDash from "./components/colombiaDash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ColombiaDash />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
