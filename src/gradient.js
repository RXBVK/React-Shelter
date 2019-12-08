import React from "react";
import "./bootstrap-style.css";
import Button from "./button";
const galleryImages = [
  "Images/1.jpg",
  "Images/2.jpg",
  "Images/3.jpg",
  "Images/4.jpg",
  "Images/5.jpg",
  "Images/6.jpg"
];
function Gradient() {
  return (
    <div className="container-fluid gradient pb-5" id="gradient">
      <div className="row h-100 mx-5">
        <div className="col-10 col-md-5 offset-1 m-auto ml-auto pr-5 text-white">
          <h2 className="font-weight-bold">Schronisko dla Bezdomnych Zwierząt we Wrocławiu</h2>
          <p>Schronisko dla Bezdomnych Zwierząt we Wrocławiu powstało w 1962 roku. Założyli je, wkładając w to wielką pracę i entuzjazm działacze Towarzystwa Opieki nad Zwierzętami we Wrocławiu.</p>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block gradient-button font-weight-bold w-75 mx-auto text-uppercase"
          >
            Wyświetl więcej informacji
          </button>
        </div>
        <div className="col-sm-5 d-none d-lg-block my-auto mr-auto pl-5">
          <div className="row gallery no-gutters">
            {galleryImages.map(singleImage => (
              <div className="col-sm-6 col-xl-4" key={singleImage}>
                <img src={singleImage} alt="An animal" />
              </div>
            ))}
          </div>
          {/*
          <iframe
            title="Wideo o starych zwierzętach Youtube"
            src="https://www.youtube.com/embed/7uBK03zX8HA?modestbranding=1&autoplay=0&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=iframe_video&origin=https%3A%2F%2Fwww.schroniskowroclaw.pl&allowfullscreen=true&wmode=transparent&iv_load_policy=3&playsinline=0&html5=1&widgetid=1">
          </iframe>
            */}
        </div>
      </div>
      <Button />
    </div>
  );
}
export default Gradient;
