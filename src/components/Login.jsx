//Username: jaden67 Password: turtles

import React, { useState } from 'react';
import { loginUser } from '../apiFunction';
const Login = () => { const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

return (
  <div className="loginComponent">
    <div>Login PAGE</div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
        loginUser(username,password)
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
  </div>
);}

export default Login
