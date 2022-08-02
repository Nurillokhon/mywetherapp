import React, { useState } from 'react';
import 'axios'
import axios from 'axios';




const Weather = () => {
    const [type, setType] = useState();
    const [state, setstate] = useState([]);
    const [weather, setWeather] = useState([]);
    const [cloud, setcloud] = useState([]);
    const [wind, setWind] = useState([]);
    function ishla() {
        axios.get(`${process.env.bace}weather?q=${type}&units=metric&APPID=${process.env.key}`)
            .then(res => {
                setstate(res.data)
                setWeather(res.data.main)
                setcloud(res.data.weather)
                setWind(res.data.wind)

                console.log(res.data);
            })
    }
    console.log(state);
    return (
        <div className='container p-2'>
            <h1 className='text-white'>Daily Weather</h1>
            <div className="serach d-flex justify-content-center " >
                <input type="text" className='form-control mx-2 ' onChange={(e) => setType(e.target.value)} />
                <button className='btn btn-primary mx-2' onClick={() => ishla()}>Search</button>
            </div>
            <div className='card myCard my-2 mx-2'style={{backgroundImage: `url(https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?cs=srgb&dl=pexels-trace-hudson-2529973.jpg&fm=jpg)`}}>
                <h1> Country: {(state)&& state.name}</h1>
                <h2> Teperature: {(weather)&& weather.temp} C<sup>o</sup></h2>
                <h2>Weather: {(cloud.length>0)&& cloud[0].main}</h2>
                <h2>Wind: {(wind)&& wind.speed} km/h</h2>
            </div>
        </div>
    );
}

export default Weather;

