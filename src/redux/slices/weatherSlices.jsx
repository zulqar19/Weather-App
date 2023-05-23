import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//actions
const key = "0f7b0bbad22352a46394820469b8873e"
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload,{rejectWithValue})=>{
try {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${key}`);
    return data;
} catch (error) {
    if (!error?.response) {
        throw error
    }
    return rejectWithValue(error?.response?.data);
}
    }
);

//slices

const weatherSlices = createSlice({
    name:"weather",
    initialState:{data: "loaded"},
    extraReducers: builder => {
        //pending
        builder.addCase(fetchWeatherAction.pending, (state)=>{
            state.loading = true;
        });
        //fulfilled
        builder.addCase(fetchWeatherAction.fulfilled, (state,action)=>{
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        //rejected
        builder.addCase(fetchWeatherAction.rejected, (state,action)=>{
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;

        })
    }
})


export default weatherSlices.reducer;

