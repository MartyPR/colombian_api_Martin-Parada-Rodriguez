export const groupPresidentsByParty = (presidents) => {
    const grouped = presidents.reduce((acc, president) => {
        const party = president.politicalParty || 'Unknown';
        if (!acc[party]) acc[party] = [];
        acc[party].push(president);
        return acc;
      }, {});
      
      // Convert to array and sort by number of presidents in descending order
      return Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
};

export const groupByDepartmentAndCity = (items) => {

}
export const groupAirportsByRegion = (airports) => {

};
