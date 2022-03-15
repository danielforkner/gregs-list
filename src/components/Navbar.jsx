import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
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
            <Link to="/profile">
              <button>My Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
