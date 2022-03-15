import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn }) => {
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
            <Link to="/posts/newpost">
              <button>New post</button>
            </Link>
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
