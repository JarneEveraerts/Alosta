import React from "react";
import NavComponent from "../../components/nav/NavComponent";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

function HomePage() {
  return (
    <div>
      <NavComponent />
      <div className="welcomeWrapper">
        <div className="welcomeContent">
          <div className="welcomeText">
            <h1>
              900m2 indoor concrete park in Aalst en skateschool! <br />
              Opening zaterdag 18 november!
            </h1>
            <Link to="/contact">
              <Button
                label="Contacteer ons"
                className="p-button-raised contactButton"
                rounded
                severity="secondary"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
