//Username: jaden67 Password: turtles

import React, { useState } from 'react';
import { loginUser } from '../apiFunction';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn) {
  }

  return (
    <div className="loginComponent">
      <div>LOGIN</div>
      <form
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(username, password, history, setIsLoggedIn);
          setUsername('');
          setPassword('');
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          name="password"
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
      </Link>{' '}
      <p> Don't have an account? </p>
      <Link to="/register">
        <button>Register Here</button>
      </Link>
    </div>
  );
};

export default Login;
