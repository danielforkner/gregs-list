import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
import Gregs_list from '../Gregs_list.png';
const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  // useEffect(() => {
  //   if (window.localStorage.getItem('token')) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  return (
    <div className="nav_bar_container">
      <img src={Gregs_list} />
      <div className="link_container">
        {isLoggedIn ? (
          <button
            onClick={() => {
              window.localStorage.removeItem('token');
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <>
            {/* <Link to="/register">
              <button>Register</button>
            </Link> */}
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}

        <Link to="/posts">
          <button>All Posts</button>
        </Link>
        {isLoggedIn ? (
          <Link to="/profile">
            <button>My Profile</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
