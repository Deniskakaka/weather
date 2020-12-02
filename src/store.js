import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './redux/weather.reducer.js';

const reducer = combineReducers({
	data: weatherReducer
});

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
