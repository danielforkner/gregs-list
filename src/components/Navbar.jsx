import React from 'react';
import { Link } from 'react-router-dom';
import Gregs_list from '../Gregs_list.png';
import hamburger from '../hamburger.png';
import Hamburgermenu from './Hamburgermenu';
const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="nav_bar_container">
      <Hamburgermenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <img className="logo" src={Gregs_list} />
      <div className="hamburger">
        <img
          src={hamburger}
          onClick={() => {
            const menu = document.querySelector('.hamburgerMenu');
            menu.classList.remove('goBackUp');
            menu.classList.add('dropDown');
          }}
        />
      </div>
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
