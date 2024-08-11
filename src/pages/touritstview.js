
import React, { useEffect, useState } from "react";
import { getTouristAttractions } from "../APIservice/service";
import { groupByDepartmentAndCity } from "../utils/dataProcessing";

const TouristView = () => {
  const [groupedData, setData] = useState({});

  useEffect(() => {
    getTouristAttractions().then((attractions) => {
      setData(groupByDepartmentAndCity(attractions));
    });
  }, []);

  return (
    <div className="tourist-container">
      <h2 className="tourist-title">Atracciones Turísticas por Departamento y Ciudad</h2>
      {groupedData &&
        Object.keys(groupedData).map((departmentName) => (
          <div key={departmentName} className="department-section">
            <h3 className="department-name">{departmentName}</h3>
            {groupedData[departmentName] &&
              Object.keys(groupedData[departmentName]).map((cityName) => (
                <div key={cityName} className="city-section">
                  <h4 className="city-name">{cityName}</h4>
                  <p className="attraction-count">
                    Total de Atracciones:{" "}
                    {groupedData[departmentName][cityName].count}
                  </p>
                  <ul className="attractions-list">
                    {groupedData[departmentName][cityName].attractions.map(
                      (attraction) => (
                        <li key={attraction.id} className="attraction-item">
                          <strong>{attraction.name}</strong>:{" "}
                          {attraction.description}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default TouristView;
