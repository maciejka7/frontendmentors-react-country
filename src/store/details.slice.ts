import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from './store';
import {fetchCountryByAlpha2Code} from "../servies/countries.service";
import {DetailsInfo} from "./details.interfaces";

interface InitialState {
    data: DetailsInfo
}

const initialState: InitialState = {
    data: {}
};


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
        clearDetailsInfo: (state): void => {
            state.data = {}
        }
    },
    extraReducers: {

        [fetchCountriesByCodeThunk.fulfilled as any]: (state, action) => {
            state.data = action.payload;
        },
    }
});

export const selectDetails = (state: RootState) => state.details.data;
export const selectCurrentDetailsCountryAlphaCode = (state: RootState) => {
    return state.details.data.alpha3Code;
};

export const {clearDetailsInfo} = details.actions;

export default details.reducer;
