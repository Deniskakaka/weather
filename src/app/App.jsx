import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useLocation } from "react-router";
import City from '../city/City.jsx';
import Home from '../home/Home.jsx';
import store from '../store.js';

function App() {
    let location = useLocation().pathname;
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route path={location} component={City}></Route>
            </BrowserRouter>
        </Provider>
    )
}

export default App;