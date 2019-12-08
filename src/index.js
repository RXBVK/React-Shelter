import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap-style.css";
import Gradient from "./gradient";
import White from "./white";
import Footer from "./footer";
import Navbar from "./navbar";
import Adopt from "./adopt";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Gradient />, document.getElementById("gradient-wrap"));
ReactDOM.render(<White />, document.getElementById("white-wrap"));
ReactDOM.render(<Footer />, document.getElementById("footer-wrap"));
ReactDOM.render(<Navbar />, document.getElementById("navbar-wrap"));
ReactDOM.render(<Adopt />, document.getElementById("adopt-wrap"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
