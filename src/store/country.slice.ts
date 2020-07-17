import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllCountires,
  fetchAllByFilters
} from "../servies/countries.service";

import { FiltersArray } from "../servies/filters";

export const fetchCountriesThunk = createAsyncThunk(
  "countires/fetchAll",
  async (pageToFetch: number) => {
    const response = await fetchAllCountires();
    return response.data;
  }
);

export const fetchCountriesByFiltersThunk = createAsyncThunk(
  "countries/fetchByFilters",
  async (fillterArray: FiltersArray) => {
    const response = await fetchAllByFilters(fillterArray);
    return response.data;
  }
);

const country = createSlice({
  name: "country",
  initialState: {
    countries: [],
    countriesByPage: [],
    countriesForHomepage: [],
    isLoaded: false
  },
  reducers: {
    filterCountriesForHomePage: (state, action) => {}
  },
  extraReducers: {
    [fetchCountriesThunk.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
    [fetchCountriesByFiltersThunk.fulfilled]: (state, action) => {
      state.countriesForHomepage = action.payload;
    }
  }
});

export const selectIsCountiresAreLoaded = state => state.country.isLoaded;
export const selectCountry = state => state.country.countries;
export const selectCountriesForHomePage = state =>
  state.country.countriesForHomepage;

export const { filterCountriesForHomePage } = country.actions;

export default country.reducer;
