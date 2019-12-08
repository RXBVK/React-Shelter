import React from "react";
let longitude = 16.997556;
let latitude = 51.153165;
let api_key = '123';
const proxy = "https://cors-anywhere.herokuapp.com/";
class Weather extends React.Component {
    state = {
        summary: "",
        temperature: "",
        precipProbability: "",
        pressure: ""
    }
    getWeather = async () => {
        const api = await fetch(`${proxy}https://api.darksky.net/forecast/${api_key}/${latitude},${longitude},${this.props.arrival}T12:00:00?lang=pl&units=si`);
        const data = await api.json();
        console.log(data);
        this.setState({
            summary: data.currently.summary,
            temperature: data.currently.temperature,
            precipProbability: data.currently.precipProbability * 100,
            pressure: data.currently.pressure
        })
    }
    render() {
        return (
            <div className="weather">
                <button className="submit-data" onClick={this.getWeather}>Potwierdź dane</button>
                <h3>Pogoda na dzień {this.props.arrival} - stan ogólny: {this.state.summary}</h3>
                <p>Temperatura: {this.state.temperature}&deg;C</p>
                <p>Prawdopodobieństwo wystąpienia opadów deszczu: {this.state.precipProbability}%</p>
                <p>Ciśnienie: {this.state.pressure} hPa</p>
            </div>
        )
    }
}
export default Weather