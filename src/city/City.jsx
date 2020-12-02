import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCityWeather } from '../redux/weather.actions.js';
import Render from '../renderFunction.jsx';
import { useLocation } from "react-router-dom";
import './city.scss';

function City({ get, weather }) {
    const location = useLocation().pathname.slice(1);

    useEffect(() => {
        get(location)
    }, [location])

    return (
        <section className="city">
            {Render(weather)}
        </section>
    )
}

const mapState = state => ({
    weather: state.data.cityDataWeather,
})

const mapDispatch = {
    get: getCityWeather
}

export default connect(mapState, mapDispatch)(City);