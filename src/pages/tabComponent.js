import React, { useState } from "react";
import PresidentsView from "./presidentview";
import AirportsView from "./airportview";
import TouristView from "./touritstview";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("presidents");

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "presidents" ? "active" : ""}`}
          onClick={() => setActiveTab("presidents")}
        >
          Presidentes
        </button>
        <button
          className={`tab-button ${activeTab === "airtports" ? "active" : ""}`}
          onClick={() => setActiveTab("airtports")}
        >
          Aeropuertos
        </button>
        <button
          className={`tab-button ${activeTab === "attractions" ? "active" : ""}`}
          onClick={() => setActiveTab("attractions")}
        >
          Atracciones
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "presidents" && <PresidentsView />}
        {activeTab === "airtports" && <AirportsView />}
        {activeTab === "attractions" && <TouristView />}
      </div>
    </div>
  );
};

export default TabComponent;
