export const groupPresidentsByParty = (presidents) => {
  const grouped = presidents.reduce((acc, president) => {
    const party = president.party || "Unknown";
    if (!acc[party]) acc[party] = [];
    acc[party].push(president);
    return acc;
  }, {});

  return Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
};

export const groupByDepartmentAndCity = (items) => {
  return items.reduce((acc, item) => {
    const { department, city } = item;
    if (!acc[department]) acc[department] = {};
    if (!acc[department][city]) acc[department][city] = [];
    acc[department][city].push(item);
    return acc;
  }, {});
};
export const groupAirportsByRegion = (airports) => {
  return airports.reduce((acc, airport) => {
    const { region, department, city, type } = airport;

    if (!acc[region]) acc[region] = {};
    if (!acc[region][department]) acc[region][department] = {};
    if (!acc[region][department][city]) acc[region][department][city] = {};
    if (!acc[region][department][city][type])
      acc[region][department][city][type] = 0;

    acc[region][department][city][type] += 1;

    return acc;
  }, {});
};
