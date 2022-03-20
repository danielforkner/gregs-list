import React from 'react';
import { Link } from 'react-router-dom';

const Hamburgermenu = ({ isLoggedIn, setIsLoggedIn }) => {
  const menu = document.querySelector('.hamburgerMenu');
  return (
    <div className="hamburgerMenu">
      <ul>
        {isLoggedIn ? null : ( <li><Link
          to="/login"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          Login
        </Link></li>)}
       
        <li> <Link
          to="/posts"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          All Posts
        </Link></li>
        {isLoggedIn ? (<li><Link
          to="/profile"
          onClick={() => {
            menu.classList.remove('dropDown');
            menu.classList.add('goBackUp');
          }}
        >
          My Profile
        </Link></li>) : null}
        {isLoggedIn ? (
          <li><Link
            to="/posts"
            onClick={() => {
              window.localStorage.removeItem('token');
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Link></li>
        ) : null}
        <li
          className="closeMenu"
          style={{textAlign: 'center'}}
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
