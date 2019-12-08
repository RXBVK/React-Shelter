import React from "react";
import "./bootstrap-style.css";

function Footer() {
  return (
    <div className="container-fluid footer text-center text-md-left p-5">
      <div className="row pb-5">
        <div className="col-3 offset-1 d-none d-md-block">
          <a href="# ">
            <img src="Images/logo-header3.png" alt="logo" />
          </a>
        </div>
        <div className="col-md-2 footer-links pb-5 pb-lg-0">
          <p>Firma</p>
          <a href="# ">Informacje</a>
          <a href="# ">Praca</a>
          <a href="# ">Kontakt</a>
        </div>
        <div className="col-md-2 footer-links pb-5 pb-lg-0">
          <p>Społeczności</p>
          <a href="# ">Pracownicy</a>
          <a href="# ">Sponsorzy</a>
          <a href="# ">Dostawcy</a>
        </div>
        <div className="col-md-2 footer-links pb-5 pb-lg-0">
          <p>Nie wiem</p>
          <a href="# ">Cos1</a>
          <a href="# ">Cos2</a>
          <a href="# ">Cos3</a>
        </div>
      </div>
      <div className="row pt-lg-5 sponsors">
        <div className="col offset-7">
          <img src="Images/sponsorzy.png" alt="Sponsorzy" />
          <img src="Images/sponsorzy1.png" alt="Sponsorzy" />
          <img src="Images/sponsorzy2.png" alt="Sponsorzy" />
          <img src="Images/sponsorzy3.png" alt="Sponsorzy" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
