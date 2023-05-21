import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherAction } from "../redux/slices/weatherSlices";
// import Search from "./Search";

const Report =() =>{

//dispatch action

const dispatch = useDispatch();
useEffect(() =>{
    dispatch(fetchWeatherAction("Kolkata"));
}, []);
// console.log(key);

// select state from store
const state = useSelector((state => state))
// console.log(state);
const {weather, error, loading  } = state;


    return (
        <>
            {loading? <h3 className="text-center text-3xl text-gray-500">Loading Please Wait...</h3>: error? <h3 className="text-center text-2xl text-red-950">{error?.message}</h3>:<div className="container bg-white text-center m-auto w-52 h-[60vh] rounded-3xl text-gray-500">
                <h3 className=" pt-6 text-xl ">{weather?.name}</h3>
                <hr className="w-12 m-auto text-gray-800 border-slate-700" />
                <div className="flex justify-around align-bottom mt-6">
                    <h2 className="text-2xl">{weather?.main.temp}<sup>o</sup><span>C</span></h2>
                    <div className=" text-xs">
                        <h3 className=" text-xl">Few Clouds</h3>
                        <p>Max: <span>{weather?.main.temp_max}</span><sup>o</sup><span>C</span></p>
                        <p>Min: <span>{weather?.main.temp_min}</span><sup>o</sup><span>C</span></p>
                    </div>
                </div>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Weather image" className=" w-20 m-auto pt-4" />
                <div className="flex justify-around align-bottom mt-6">
                    <div>
                    <h2 className="text-2xl">{weather?.main.feels_like}<sup>o</sup><span>C</span></h2>
                    <p>Feels like</p>
                    </div>
                    <div>
                    <h2 className="text-2xl">{weather?.main.humidity}%</h2>
                    <p>Humidity</p>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Report;