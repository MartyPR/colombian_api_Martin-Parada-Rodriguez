import React, { useEffect, useState } from "react";

import { getAirports } from "../APIservice/service";
import { groupAirportsByRegion } from "../utils/dataProcessing";

const AirportsView = () => {
  const [groupedData , setData] = useState([]);

  useEffect(() => {
    getAirports().then((airports) => {
      setData(groupAirportsByRegion(airports));
    });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Aeropuertos por Departamento y Ciudad</h2>
      <div className="party-list">
      {groupedData.map(department => (
        <div className="party-section" key={department.departmentName}>
          <h3 className="party-name">{department.departmentName}</h3>
          {department.cities.map(city => (
            <div key={city.cityName}>
              <h4>{city.cityName}</h4>
              <p>Total de Aeropuertos: {city.count}</p>
              <ul className="presidents-list">
                {city.airports.map(airport => (
                  <li key={airport.id} className="president-item">
                    <strong>{airport.name}</strong> ({airport.iataCode})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      ))}
      </div>
    </div>

  );
};

export default AirportsView;
