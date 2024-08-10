
import { getAirports, getPresidents, getTouristAttractions } from './APIservice/service';
import './App.css';

import React, { useEffect } from 'react';


const App = () => {
  // useEffect(() => {
  //   getPresidents().then(data => console.log('Presidents:', data));
  //   getAirports().then(data => console.log('Airports:', data));
  //   getTouristAttractions().then(data => console.log('Tourist Attractions:', data));
  // }, []);

  return <div>Check the console for data</div>;
};

export default App;