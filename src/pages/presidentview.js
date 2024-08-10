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
    <div>
      <h2>Presidentes por Partido</h2>
      <ul>
        {data.map(([party, presidents]) => (
          <li key={party}>
            <strong>{party}</strong>: {presidents.length} presidentes
            <ul>
              {presidents.map((president) => (
                <li key={president.id}>
                  {president.name} ({president.startPeriod} -{" "}
                  {president.endPeriod})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PresidentsView;
