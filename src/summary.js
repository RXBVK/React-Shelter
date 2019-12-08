import React from "react";
import Weather from "./weather";
class Summary extends React.Component {
    render() {
        return (
            <div className="carousel-item">
                <p>Wybrane zwierzę: {this.props.chosenAnimal}</p>
                <p>Imię: {this.props.fName}</p>
                <p>Nazwisko: {this.props.lastName}</p>
                <p>Telefon: {this.props.phoneNumber}</p>
                <p>Miasto: {this.props.city}</p>
                <p>Adres: {this.props.address}</p>
                <p>Dzień przyjazdu: {this.props.arrival}</p>
                <Weather arrival={this.props.arrival} />
            </div>
        )
    }
}
export default Summary