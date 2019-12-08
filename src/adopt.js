import React from "react";
import "./bootstrap-style.css";
import Animals from "./animals";
import UserInfo from "./userInfo";
import Summary from "./summary";

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myAnimals: [
        {
          name: "Molly",
          type: "cat",
          age: "3",
          imagePath: "Images/1.jpg"
        },
        {
          name: "Goofy",
          type: "dog",
          age: "7",
          imagePath: "Images/2.jpg"
        },
        {
          name: "Benji",
          type: "dog",
          age: "6",
          imagePath: "Images/3.jpg"
        },
        {
          name: "Boo",
          type: "dog",
          age: "9",
          imagePath: "Images/4.jpg"
        },
        {
          name: "Max",
          type: "dog",
          age: "10",
          imagePath: "Images/5.jpg"
        },
        {
          name: "Charlie",
          type: "dog",
          age: "13",
          imagePath: "Images/6.jpg"
        },
        {
          name: "Barry",
          type: "dog",
          age: "7",
          imagePath: "Images/7.jpg"
        },
        {
          name: "Ruby",
          type: "cat",
          age: "4",
          imagePath: "Images/8.jpg"
        },
        {
          name: "Jack",
          type: "cat",
          age: "9",
          imagePath: "Images/9.jpg"
        },
        {
          name: "Bailey",
          type: "cat",
          age: "3",
          imagePath: "Images/10.jpg"
        },
        {
          name: "Toby",
          type: "cat",
          age: "1",
          imagePath: "Images/11.jpg"
        },
        {
          name: "Chloe",
          type: "cat",
          age: "2",
          imagePath: "Images/12.jpg"
        }
      ],
      dogChecked: true,
      catChecked: true,
      searches: [],
      chosenAnimal: "",
      supposedAge: "",
      fName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      address: "",
      arrival: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    if (this.state.searches.length === 0) {
      this.handleFilter();
    }
  }
  handleFilter() {
    this.state.myAnimals.forEach(animal => {
      const properType = (this.state.catChecked && animal.type === "cat") || (this.state.dogChecked && animal.type === "dog");
      const uniqueAnimal = this.state.searches.includes(animal) === false;
      const rightAge = (this.state.supposedAge.length === 0) || animal.age === this.state.supposedAge;
      if (properType && uniqueAnimal && rightAge) {
        this.setState(prevState => ({
          searches: [...prevState.searches, animal]
        }))
      }
    });
  }
  async handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (target.type === "checkbox") {
      if (name === "catChecked") {
        await this.setState({
          catChecked: !this.state.catChecked
        });
      }
      else {
        await this.setState({
          dogChecked: !this.state.dogChecked
        });
      }
    } else {
      await this.setState({
        [name]: value
      });
    }
    this.setState({ searches: [] });
    this.handleFilter();
  }
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
        data-wrap="false"
      >
        <div className="carousel-inner">
          <Animals
            handleInputChange={this.handleInputChange}
            handleFilter={this.handleFilter}
            dogChecked={this.state.dogChecked}
            catChecked={this.state.catChecked}
            supposedAge={this.state.supposedAge}
            searches={this.state.searches}
            myAnimals={this.state.myAnimals}
            chosenAnimal={this.state.chosenAnimal}
          />
          <UserInfo
            handleInputChange={this.handleInputChange}
            handleFilter={this.handleFilter}
            supposedAge={this.state.supposedAge}
            fName={this.state.fName}
            lastName={this.state.lastName}
            phoneNumber={this.state.phoneNumber}
            city={this.state.city}
            address={this.state.address}
            arrival={this.state.arrival}
          />
          <Summary
            chosenAnimal={this.state.chosenAnimal}
            fName={this.state.fName}
            lastName={this.state.lastName}
            phoneNumber={this.state.phoneNumber}
            city={this.state.city}
            address={this.state.address}
            arrival={this.state.arrival}
          />
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div >
    );
  }
}

export default Adopt;