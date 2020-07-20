import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from './store';
import { fetchCountryByAlpha2Code } from "../servies/countries.service";

interface IInitialState {}

const initialState: IInitialState = {};

export const fetchCountriesByCodeThunk = createAsyncThunk(
    "details/fetchCountriesData",
    async (code: string) => {
        const response = await fetchCountryByAlpha2Code(code);
        return response.data;
    }
);

const details = createSlice({
    name: "details",
    initialState,
    reducers: {
        
    },
    extraReducers: {

        [fetchCountriesByCodeThunk.fulfilled as any]: (state, action) => {
            // @ts-ignore
            state.details = action.payload;
        },
    }
});
// @ts-ignore
export const selectDetails = (state: RootState) => state.details;

export default details.reducer;
