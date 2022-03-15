import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Posts,
  Register,
  Navbar,
  Login,
  Newpost,
  Myposts,
  Profile,
} from './components';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/posts/newpost">
          <Newpost isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/profile">
          <Profile isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/posts">
          <Posts isLoggedIn={isLoggedIn} />
          <Myposts isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/register">
          <Register isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
