import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, Countries, InitialStateType } from "../types/dataSlice";
import { gql } from "@apollo/client";
import { apolloClient } from "../main";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    countries: null,
    cities: null,
    error: null,
};

export const fetchCountries = createAsyncThunk(
    "data/fetchCountries",
    async () => {
        const query = gql`
            query {
                countries {
                    awsRegion
                    capital
                    code
                    currency
                    emoji
                    emojiU
                    name
                    native
                }
            }
        `;
        const { data } = await apolloClient.query({ query });
        return data.countries;
    }
);

export const fetchCities = createAsyncThunk(
    "data/fetchCities",
    async () => {
        const query = gql`
            query {
                cities {
                    id
                    name
                    country
                    population
                }
            }
        `;
        const { data } = await apolloClient.query({ query });
        return data.cities;
    }
);




const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.status = "loading";
            state.loading = true;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Countries[]>) => {
            state.status = "success";
            state.loading = false;
            state.countries = action.payload;
        });
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = "failed";
            state.loading = false;
            state.error = action.error.message || null;
        });


        builder.addCase(fetchCities.pending, (state) => {
            state.status = "loading";
            state.loading = true;
        })
        builder.addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
            state.status = "success";
            state.loading = false;
            state.cities = action.payload;
        })
        builder.addCase(fetchCities.rejected, (state, action) => {
            state.status = "failed";
            state.loading = false;
            state.error = action.error.message || null;
        });
    },
});

export const dataReducer = dataSlice.reducer;
