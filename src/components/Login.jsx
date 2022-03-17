//Username: jaden67 Password: turtles

import React, { useState } from 'react';
import { loginUser } from '../apiFunction';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn) {
    console.log('we are already logged in');
  }

  return (
    <div className="loginComponent">
      <div>Login PAGE</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Username:', username, 'Password:', password);
          loginUser(username, password);
          if (window.localStorage.getItem('token')) {
            setIsLoggedIn(true);
            // console.log('we are in the if statement');
            // return <Redirect to="/posts" />;
          }
          setUsername('');
          setPassword('');
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
      <p> View posts as a guest</p>
      <Link to="/posts">
        <button>Guest</button>
      </Link>
      <p> Don't have an account? </p>
      <Link to="/register">
        <button>Register Here</button>
      </Link>
    </div>
  );
};

export default Login;
