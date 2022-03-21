import React, { useState } from 'react';
import { registerUser } from '../apiFunction';
import { useHistory } from 'react-router-dom';

const Register = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="registerComponent">
      <div>REGISTER PAGE</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser(username, password, history, setIsLoggedIn);
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
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
