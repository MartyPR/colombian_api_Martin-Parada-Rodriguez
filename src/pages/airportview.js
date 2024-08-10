import React, { useEffect, useState } from 'react';

import { getAirports } from '../APIservice/service';
import { groupAirportsByRegion } from '../utils/dataProcessing';

const AirportsView = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getAirports().then(airports => {
      setData(groupAirportsByRegion(airports));
    });
  }, []);

  return (
    <div>
      <h2>Aeropuertos por Región</h2>
        
    </div>
  );
};

export default AirportsView;
