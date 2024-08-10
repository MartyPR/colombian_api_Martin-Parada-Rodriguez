import { fetchData } from "./api";

export const getPresidents = () => fetchData("President");
export const getAirports = () => fetchData("Airport");
export const getTouristAttractions = () => fetchData("TouristicAttraction");
