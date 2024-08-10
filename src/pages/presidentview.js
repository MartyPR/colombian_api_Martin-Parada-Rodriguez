import React, { useEffect, useState } from "react";
import { getPresidents } from "../APIservice/service";
import { groupPresidentsByParty } from "../utils/dataProcessing";

const PresidentsView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPresidents().then((presidents) => {        
      setData(groupPresidentsByParty(presidents));
    });

    console.log(data);
    
  }, []);



  return (
    <div>
      <h2>Presidentes por Partido</h2>
      <ul>

      </ul>
    </div>
  );
};

export default PresidentsView;
