import React from 'react';
import { Link } from 'react-router-dom';

const Hamburgermenu = ({ isLoggedIn, setIsLoggedIn }) => {
  const menu = document.querySelector('.hamburgerMenu');
  return (
    <div className="hamburgerMenu">
      <ul>
        <Link
          to="/login"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          <li>Login</li>
        </Link>
        <Link
          to="/posts"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          <li>All Posts</li>
        </Link>
        <Link
          to="/profile"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          <li>My Profile</li>
        </Link>
        {isLoggedIn ? (
          <Link
            to="/posts"
            onClick={() => {
              window.localStorage.removeItem('token');
              setIsLoggedIn(false);
            }}
          >
            <li>Logout</li>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </>
        )}
        <li>Logout</li>
        <li
          className="closeMenu"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          X
        </li>
      </ul>
    </div>
  );
};

export default Hamburgermenu;
