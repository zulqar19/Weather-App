import { configureStore } from "@reduxjs/toolkit";
import weatherSlices from "../slices/weatherSlices";

const store = configureStore({
    reducer: weatherSlices,
})

export default store;