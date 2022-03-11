import React, { useState } from 'react';
import { registerUser } from '../apiFunction';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="registerComponent">
      <div>REGISTER PAGE</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Username:', username, 'Password:', password);
          registerUser(username,password)
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
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
