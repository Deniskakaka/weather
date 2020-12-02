import React from 'react';
import { connect } from 'react-redux';
import { getUserCoordinates } from '../redux/weather.actions.js';
import Render from '../renderFunction.jsx';
import './home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: false,
        };
        this.coordinates = this.coordinates.bind(this);
    }

    coordinates() {
        this.setState({
            position: true,
        })
    }

    componentDidUpdate() {
        if (this.state.position) {
            this.props.get()
            this.setState({
                position: false,
            })
        }
    }

    render() {
        return (
            <section className='home'>
                {this.props.weather === ''
                    ? <button className="home__coordinates" onClick={this.coordinates}>your coordinate</button> : ''}
                { Render(this.props.weather, this.coordinates)}
            </section>
        )
    }
}

const mapState = state => ({
    weather: state.data.userDataWeather,
})

const mapDispatch = {
    get: getUserCoordinates
}

export default connect(mapState, mapDispatch)(Home);