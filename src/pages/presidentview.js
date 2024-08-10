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
  console.log(data);

  return (
    <div>
      <h2>Presidentes por Partido</h2>
      <ul>
        {data.map(([party, element]) => (
          <li key={party}>
            <strong>{party}</strong>: {element.length} presidentes
            <ul>
              {element.map((president) => (
                <li key={president.id}>
                  {president.name} ({president.startPeriodDate} -{" "}
                  {president.endPeriodDate})
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
