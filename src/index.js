import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Posts, Register } from './components';

ReactDom.render(
  <Router>
    {/* <Posts/> */}
    <Register />
  </Router>,
  document.getElementById('app')
);
