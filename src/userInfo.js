import React from "react";
class UserInfo extends React.Component {
    render() {
        return (
            <div className="carousel-item contact">
                <p className="mb-5">Wpisz swoje dane.</p>
                <input
                    type="text"
                    name="fName"
                    placeholder="Imię"
                    value={this.props.fName}
                    onChange={this.props.handleInputChange}
                ></input>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Nazwisko"
                    value={this.props.lastName}
                    onChange={this.props.handleInputChange}
                ></input>
                <br />
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Telefon"
                    maxLength="9"
                    value={this.props.phoneNumber}
                    onChange={this.props.handleInputChange}
                ></input>
                <input
                    type="text"
                    name="city"
                    placeholder="Miasto"
                    value={this.props.city}
                    onChange={this.props.handleInputChange}
                ></input>
                <br />
                <input
                    type="text"
                    name="address"
                    placeholder="Adres"
                    value={this.props.address}
                    onChange={this.props.handleInputChange}
                ></input>

                <p className="mt-4">Termin, w którym przyjedziesz odebrać zwierzę:</p>
                <input
                    type="date"
                    name="arrival"
                    value={this.props.arrival}
                    onChange={this.props.handleInputChange}
                ></input>
            </div>
        )
    }
}
export default UserInfo