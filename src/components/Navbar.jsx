import React from "react";


const NavBar = (props) => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <div   className="nav_item">
           <button>Register</button> 
           <button>Login</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
