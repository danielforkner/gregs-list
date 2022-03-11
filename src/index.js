import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Posts, Register,Navbar } from './components';
import "./index.css"

ReactDom.render(
  <Router>
    <Navbar/>
    {/* <Posts/> */}
    
    <Register className="hidden" />
  </Router>,
  document.getElementById('app')
);
