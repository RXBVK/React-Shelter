import React from "react";
class Animals extends React.Component {
  render() {
    return (
      <div className="carousel-item active">
        Wybierz zwierzę z galerii
        <br />
        Pies:
          <input
          type="checkbox"
          name="dogChecked"
          value="Dog"
          className="radioInput mx-4 mt-5"
          checked={this.props.dogChecked}
          onClick={this.props.handleInputChange}
        ></input>
        Kot:
        <input
          type="checkbox"
          name="catChecked"
          value="Cat"
          className="radioInput mx-4"
          checked={this.props.catChecked}
          onClick={this.props.handleInputChange}
        ></input><br />
        <input
          type="number"
          name="supposedAge"
          placeholder="wiek"
          value={this.props.supposedAge}
          onChange={this.props.handleInputChange}
          className="text-center my-5"
        ></input>
        <br />
        <div className="animals">
          {this.props.searches.map(animal => (
            <div className="animal" key={animal.name}>
              <img
                src={animal.imagePath}
                alt="Animals"
              ></img>
              <div className="animal-info"
                onClick={() => this.setState({ chosenAnimal: animal.name })}>
                <p>Imię: {animal.name}</p>
                <p>Wiek: {animal.age}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div >
    )
  }
}
export default Animals