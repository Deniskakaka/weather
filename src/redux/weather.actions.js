import { FetchWeatherUserCoordinates, FetchWeatherCity } from '../getWeather';

export const DATA_WEATHER_USER = 'DATA_WEATHER_USER';
export const CITY_DATA_WEATHER = 'CITY_DATA_WEATHER';

export const dataWeather = (obj) => {
    return {
        type: DATA_WEATHER_USER,
        payload: {
            obj
        }
    }
}

export const cityDataWeather = (obj) => {
    return {
        type: CITY_DATA_WEATHER,
        payload: {
            obj
        }
    }
}

export function getUserCoordinates() {
    return function (dispatch) {
        navigator.geolocation.getCurrentPosition(function (position) {
            FetchWeatherUserCoordinates(position.coords.latitude, position.coords.longitude)
                .then(res => dispatch(dataWeather(res)))
        });
    }
}

export function getCityWeather(cityName) {
    return function (dispatch) {
        FetchWeatherCity(cityName).then(res => dispatch(cityDataWeather(res)))
    }
}