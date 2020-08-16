import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { filter, toLower} from 'lodash'
import {RootState} from './store';
import {fetchAllByFilters, fetchAllCountires} from "../servies/countries.service";

import {FiltersArray} from "../servies/filters";
import {CountryBasicData} from "../components/Country/CountryCard";

interface IInitialState {
    countries: [],
    countriesByPage: [],
    countriesForHomepage: [],
    filteredCountries: []
    isLoading: boolean
}

const initialState: IInitialState = {

    countries: [],
    countriesByPage: [],
    countriesForHomepage: [],
    filteredCountries: [],
    isLoading: false

};

export const fetchCountriesThunk = createAsyncThunk(
    "countries/fetchAll",
    async () => {
        const response = await fetchAllCountires();
        return response.data;
    }
);

export const fetchCountriesByFiltersThunk = createAsyncThunk(
    "countries/fetchByFilters",
    async (filterArray: FiltersArray) => {
        const response = await fetchAllByFilters(filterArray);
        return response.data;
    }
);


const country = createSlice({
    name: "country",
    initialState,
    reducers: {
        filterCountriesForHomePage: (state, action: PayloadAction<string>) => {

            // @ts-ignore
            state.filteredCountries = filter(state.filteredCountries, function(item: any) {
                console.log(toLower(item.name).includes(toLower(action.payload)));
                return toLower(item.name).includes(toLower(action.payload))}
                )

        },

        filterCountriesByRegionName: (state, action: PayloadAction<string>) => {
            // @ts-ignore
            state.filteredCountries = state.countriesForHomepage.filter((item: CountryBasicData) => item.region.toLocaleLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: {
        [fetchCountriesThunk.pending as any]: (state) => {
            state.isLoading = true;
        },
        [fetchCountriesByFiltersThunk.pending as any]: (state) => {
            state.isLoading = true;
        },
        [fetchCountriesThunk.fulfilled as any]: (state, action) => {
            state.countries = action.payload;
            state.isLoading = false;
        },
        [fetchCountriesByFiltersThunk.fulfilled as any]: (state, action) => {
            state.filteredCountries = action.payload;
            state.countriesForHomepage = action.payload;
            state.isLoading = false;
        }
    }
});

export const selectCountry = (state: RootState) => state.country.countries;
export const selectCountriesForHomePage = (state: RootState) => state.country.countriesForHomepage;
export const selectFilteredCountries = (state: RootState) => state.country.filteredCountries;

export const selectIsCountriesAreLoaded = (state: RootState) => state.country.isLoading;

export const {filterCountriesForHomePage, filterCountriesByRegionName} = country.actions;

export default country.reducer;
