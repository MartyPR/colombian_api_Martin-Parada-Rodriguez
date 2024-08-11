export const groupPresidentsByParty = (presidents) => {
  const groupedByParty = presidents.reduce((acc, president) => {
    const { politicalParty } = president;
    if (!acc[politicalParty]) {
      acc[politicalParty] = [];
    }
    acc[politicalParty].push(president);
    return acc;
  }, {});

  return Object.entries(groupedByParty)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([party, presidents]) => ({ party, presidents }));
};

export const groupByDepartmentAndCity = (attractions) => {
  const groupedData = {};

  attractions.forEach((attraction) => {
    const { city } = attraction;
    const departmentId = city.departmentId;
    const departmentName = city.department
      ? city.department.name
      : `Department- ${departmentId}`;
    const cityName = city.name;

    if (!groupedData[departmentName]) {
      groupedData[departmentName] = {};
    }

    if (!groupedData[departmentName][cityName]) {
      groupedData[departmentName][cityName] = {
        cityId: city.id,
        attractions: [],
        count: 0,
      };
    }

    groupedData[departmentName][cityName].attractions.push({
      id: attraction.id,
      name: attraction.name,
      description: attraction.description,
      images: attraction.images,
      latitude: attraction.latitude,
      longitude: attraction.longitude,
    });

    groupedData[departmentName][cityName].count += 1;
  });

  return groupedData;
};

export const groupAirportsByRegion = (airports) => {
  const groupedData = {};


  airports.forEach((airport) => {
    const { department } = airport;
    const departmentId = department.id;
    const departmentName = department.name || `Department-${departmentId}`;
    const cityName = department.cityCapital
      ? department.cityCapital.name
      : `City-${airport.id}`;

    if (!groupedData[departmentName]) {
      groupedData[departmentName] = {};
    }

    if (!groupedData[departmentName][cityName]) {
      groupedData[departmentName][cityName] = {
        cityId: department.cityCapital ? department.cityCapital.id : null,
        airports: [],
        count: 0,
      };
    }

    groupedData[departmentName][cityName].airports.push({
      id: airport.id,
      name: airport.name,
      iataCode: airport.iataCode,
      oaciCode: airport.oaciCode,
      type: airport.type,
    });

    groupedData[departmentName][cityName].count += 1;
  });

  const result = Object.keys(groupedData).map(departmentName => ({
    departmentName,
    cities: Object.keys(groupedData[departmentName]).map(cityName => ({
      cityName,
      cityId: groupedData[departmentName][cityName].cityId,
      count: groupedData[departmentName][cityName].count,
      airports: groupedData[departmentName][cityName].airports,
    }))
  }));

  return result;
};

