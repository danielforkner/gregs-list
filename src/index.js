import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Posts, Register, Navbar, Login, Newpost } from './components';
import './index.css';

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/posts/newpost">
        <Newpost />
      </Route>
      <Route path="/posts">
        <Navbar />
        <Posts />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);
