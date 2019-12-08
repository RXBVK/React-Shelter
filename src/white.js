import React from "react";
import "./bootstrap-style.css";

function White() {
  return (
    <div className="container-fluid white">
      <h1 className="font-weight-bold pt-3 text-center animated fadeInDown">
        Proces adopcji
      </h1>
      <div className="row m-auto p-5 text-center text-md-left">
        <div className="col-md-3 py-5 pb-md-0 py-md-0 m-auto animated fadeInLeft delay-1s">
          <h3 className="font-weight-bold" id="whiteh21">
            Sprawdź galerię
          </h3>
          <p id="whitep1">Przed przyjazdem zobacz w galerii jakie zwierzęta spotkasz w schronisku.</p>
          <a href="zwierzeta.html" className="font-weight-bold" id="whitebtn1">
            ZOBACZ GALERIĘ
          </a>
        </div>
        <div className="col-md-3 pb-5 pb-md-0 m-auto animated fadeInLeft delay-2s">
          <h3 className="font-weight-bold" id="whiteh22">
            Przyjedź do schroniska
          </h3>
          <p id="whitep2">Po przejrzeniu galerii wiesz co ci się podoba, możesz przyjechać na miejsce i sprawdzić stan zwierząt oraz czy wybrane zwierzę ci pasuje.</p>
          <a href="# " className="font-weight-bold" id="whitebtn2">
            KONTAKT
          </a>
        </div>
        <div className="col-md-3 pb-5 pb-md-0 m-auto animated fadeInLeft delay-3s">
          <h3 className="font-weight-bold" id="whiteh23">
            Wypełnij dokumenty
          </h3>
          <p id="whitep3">Do adopcji potrzebne jest wypełnienie dokumentów.</p>
          <a href="# " className="font-weight-bold" id="whitebtn3">
            POBIERZ DOKUMENTY
          </a>
        </div>
      </div>
    </div>
  );
}

export default White;
