import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from './store';
import {
    fetchAllCountires,
    fetchAllByFilters
} from "../servies/countries.service";

import {FiltersArray} from "../servies/filters";
import {CountryBasicData} from "../components/Country/CountryCard";

interface IInitialState {
    countries: [],
    countriesByPage: [],
    countriesForHomepage: [],
    filteredCountries: []
}

const initialState: IInitialState = {

    countries: [],
    countriesByPage: [],
    countriesForHomepage: [],
    filteredCountries: []

};

export const fetchCountriesThunk = createAsyncThunk(
    "countries/fetchAll",
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
    initialState,
    reducers: {
        // @ts-ignore
        filterCountriesForHomePage: (state, action) => {
            // @ts-ignore
            state.filteredCountries = state.countriesForHomepage.filter((item: CountryBasicData) => item.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        }
    },
    extraReducers: {
        [fetchCountriesThunk.fulfilled as any]: (state, action) => {
            state.countries = action.payload;
        },
        [fetchCountriesByFiltersThunk.fulfilled as any]: (state, action) => {
            state.filteredCountries = action.payload;
            state.countriesForHomepage = action.payload;
        }
    }
});

// @ts-ignore
export const selectCountry = (state: RootState) => state.country.countries;
// @ts-ignore
export const selectCountriesForHomePage = (state: RootState) => state.country.countriesForHomepage;
// @ts-ignore
export const selectFilteredCountries = (state: RootState) => state.country.filteredCountries;

export const {filterCountriesForHomePage} = country.actions;

export default country.reducer;
