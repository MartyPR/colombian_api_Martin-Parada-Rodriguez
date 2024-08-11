import React, { useEffect, useState } from "react";
import { getPresidents } from "../APIservice/service";
import { groupPresidentsByParty } from "../utils/dataProcessing";

const PresidentsView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPresidents().then((presidents) => {
      setData(groupPresidentsByParty(presidents));
    });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Presidentes por Partido</h2>
      <div className="party-list">
        {data.map(({ party, presidents }) => (
          <div key={party} className="party-section">
            <h3 className="party-name">
              {party}: <span className="party-count">{presidents.length} presidentes</span>
            </h3>
            <ul className="presidents-list">
              {presidents.map((president) => (
                <li key={president.id} className="president-item">
                  {president.name} ({president.startPeriodDate} - {president.endPeriodDate})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresidentsView;