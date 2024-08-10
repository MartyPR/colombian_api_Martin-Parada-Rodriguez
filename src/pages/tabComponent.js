import React, { useState } from "react";
import PresidentsView from "./presidentview";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("presidents");

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("presidents")}>Presidentes</button>
      </div>
      <div className="tab-content">
        {activeTab === "presidents" && <PresidentsView />}
      </div>
    </div>
  );
};

export default TabComponent;
