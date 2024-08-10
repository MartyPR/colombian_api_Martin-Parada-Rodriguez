import React, { useState } from "react";
import PresidentsView from "./presidentview";
import AirportsView from "./airportview";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("presidents");

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("presidents")}>Presidentes</button>
        <button onClick={() => setActiveTab("airtports")}>Aeropuertos</button>
      </div>
      <div className="tab-content">
        {activeTab === "presidents" && <PresidentsView />}
        {activeTab === "airtports" && <AirportsView />}
      </div>
    </div>
  );
};

export default TabComponent;
