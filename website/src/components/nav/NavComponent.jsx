import React from "react";
import "./NavComponent.css";

import AlostaLogo from "../../img/AlostaLogo.png";
import BusinessHoursCard from "../businessHours/BusinessHoursComponent";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

const NavComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navWrapper">
      <div className="navLogo">
        <Link className="link" to="/">
          <img src={AlostaLogo} alt="test" />
        </Link>
      </div>
      <div className="navLinks">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/galerij">
          Galerij
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navHours">
        <Button
          label="Openingsuren"
          rounded
          severity="secondary"
          onClick={() => setVisible(true)}
        />
      </div>
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        header="Openingsuren"
      >
        <BusinessHoursCard />
      </Dialog>
    </div>
  );
};

export default NavComponent;
