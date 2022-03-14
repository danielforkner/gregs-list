import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Posts, Register, Navbar, Login, Newpost } from './components';
import './index.css';

ReactDom.render(
  <Router>
    <Navbar />
    {/* <Posts/> */}
    {/* <Register /> */}
    {/* <Login /> */}
    <Newpost />
  </Router>,
  document.getElementById('app')
);
