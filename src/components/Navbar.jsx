import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <Link to={"/"} className="nav_item">
            Home
          </Link>
          <Link to={"/someOtherRoute"} className="nav_item">
            Some Other Route
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
