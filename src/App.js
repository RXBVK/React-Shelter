import React from "react";
import { Helmet } from "react-helmet";
import "./bootstrap-style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }
  nightMode = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          id="switch"
          checked={this.state.isChecked}
          onClick={this.nightMode}
        />
        <label htmlFor="switch">Tryb nocny</label>
        <p id="savedDayTime" onClick={this.nightMode}>
          {this.state.isChecked ? "Noc" : "Dzień"}
        </p>
        <Helmet>
          <body className={this.state.isChecked ? "dark-mode" : ""} />
        </Helmet>
      </div>
    )
  }
}
export default App