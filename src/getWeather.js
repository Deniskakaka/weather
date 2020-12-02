const key = `385bb862371279441cb92f334060f3bf`;
const openWeather = 'http://api.openweathermap.org/data/2.5/weather?';

export const FetchWeatherUserCoordinates = (lat, lon) => {
	return fetch(`${openWeather}lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
			.then((response) => {return response.json()});
};

export const FetchWeatherCity = (cityName) => {
	return fetch(`${openWeather}q=${cityName}&appid=${key}&units=metric`)
			.then((response) => {return response.json()});
};