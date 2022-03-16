import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  // useEffect(() => {
  //   if (window.localStorage.getItem('token')) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <div className="nav_item">
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
            {isLoggedIn ? (
              <Link to="/posts/newpost">
                <button>New post</button>
              </Link>
            ) : null}
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
      </div>
    </div>
  );
};

export default NavBar;
