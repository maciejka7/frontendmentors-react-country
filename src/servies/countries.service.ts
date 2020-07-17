import axios from "axios";
import { FiltersArray, createFliedsStringFromArray } from "./filters.ts";

const API_URL = `https://restcountries.eu/rest/v2/`;
const API_ENDPOINTS = {
  ALL: "all"
};

const API_ALL = `${API_URL}${API_ENDPOINTS.ALL}`;

const fetchAllCountires = async () => {
  return await axios.get(API_ALL);
};

const fetchAllOnlyWithRegions = async () => {
  //https://restcountries.eu/rest/v2/all?fields=name;population;region;capital
};

const fetchAllByFilters = async (filtersArray: FiltersArray) => {
  const fieldsString = createFliedsStringFromArray(filtersArray);
  return await axios.get(`${API_ALL}?fields=${fieldsString}`);
};

export { fetchAllCountires, fetchAllOnlyWithRegions, fetchAllByFilters };
