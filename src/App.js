
// import { getAirports, getPresidents, getTouristAttractions } from './APIservice/service';
import './App.css';

import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ColombiaDash from './components/colombiaDash';

const App = () => {
  // useEffect(() => {
  //   getPresidents().then(data => console.log('Presidents:', data));
  //   getAirports().then(data => console.log('Airports:', data));
  //   getTouristAttractions().then(data => console.log('Tourist Attractions:', data));
  // }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<ColombiaDash/>} path='/'/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;