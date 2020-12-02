import { DATA_WEATHER_USER, CITY_DATA_WEATHER } from './weather.actions.js';

const initialState = {
    data: '',
    cityDataWeather: '',
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_WEATHER_USER: 
            return {
                ...state,
                data: action.payload.obj
            }
        case CITY_DATA_WEATHER: {
            return {
                ...state,
                cityDataWeather: action.payload.obj
            }
        }
        default:
			return state; 
    }
}

export default weatherReducer;