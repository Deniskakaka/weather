import React from 'react';
import { Link } from "react-router-dom";
import './main.scss';

function Render(data) {
    return (
        <div className="weather-page">
            {data !== ''
                ? <div className="weather-page-image">
                    {data.weather !== undefined
                        ? data.weather[0].main === 'Clouds'
                            ? <img src="https://img.icons8.com/dusk/64/000000/clouds.png" /> : '' : ''}
                    {data.weather !== undefined
                        ? data.weather[0].main === 'Rain'
                            ? <img src="https://img.icons8.com/officel/80/000000/rain.png" /> : '' : ''}
                    {data.weather !== undefined
                        ? data.weather[0].main === 'Clear'
                            ? <img src="https://img.icons8.com/officel/80/000000/sun.png" /> : '' : ''}
                </div> : ''}
            {data !== ''
                ? <div className="weather-page-data">
                    <div className="weather-page-data__item">
                        <img src="https://img.icons8.com/ultraviolet/40/000000/thermometer.png" />
                        <span>{data.main.temp}</span>
                    </div>
                    <div className="weather-page-data__item">
                        <img src="https://img.icons8.com/office/40/000000/dew-point.png" />
                        <span>{data.main.humidity}</span>
                    </div>
                    <div className="weather-page-data__item">
                        <img src="https://img.icons8.com/office/40/000000/windsock.png" />
                        <span>{data.wind.speed}</span>
                    </div>
                </div> : ''}
            <ul className='list-city'>
                <li><Link to='/Moscow'>Moscow</Link></li>
                <li><Link to="/Berlin">Berlin</Link></li>
                <li><Link to="/Tokio">Tokio</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Render;