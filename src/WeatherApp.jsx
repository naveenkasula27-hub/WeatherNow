
import  SearchBox from  "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from 'react'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike : 27.28,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:'haze',
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)

    }
    return (
        <div style={{textAlign:"center" , backgroundColor:"white", minHeight: "100vh"}}>
            <h2 style={{color:"#222222", fontWeight:"bold", marginTop:"10px"}}>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}