import { fetchData } from "./api";

export const getPresidents = () => fetchData("presidents");
export const getAirports = () => fetchData("airports");
export const getTouristAttractions = () => fetchData("tourist-attractions");
