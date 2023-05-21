import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherAction } from "../redux/slices/weatherSlices";
const Search = () => {
    const [city,setCity] = useState("")
    const handleChange = (e) =>{
        setCity(e.target.value);
    }
    const dispatch = useDispatch()
    return (
        <>
        <div className="header text-center">
            <h1 className="text-5xl text-gray-400 m-2">Weather In</h1>
            <input type="search" name="search" id="search" className="w-[50vw] h-10 my-4 pl-6 text-lg rounded-3xl"
             placeholder="search" onChange={handleChange} value={city}
             />
             <button className="mx-4 px-4 text-center text-lg bg-green-300 rounded-2xl h-10"
             onClick={() => dispatch(fetchWeatherAction(city))}>Click</button>
            </div>
        </>
    )
}

export default Search;