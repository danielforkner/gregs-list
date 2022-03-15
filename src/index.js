import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Posts, Register, Navbar, Login, Newpost, Myposts } from './components';
import './index.css';

ReactDom.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/posts/newpost">
        <Newpost />
      </Route>
      <Route path="/posts">
        <Posts />
        <Myposts />
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
