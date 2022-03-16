import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Posts,
  Register,
  Navbar,
  Login,
  Newpost,
  Profile,
  Singlepost,
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/posts/:postid">
          <Singlepost />
        </Route>
        <Route path="/posts/newpost">
          <Newpost isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/profile">
          <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/posts">
          <div className="postsPage">
            <Posts isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {isLoggedIn ? <Profile isLoggedIn={isLoggedIn} /> : null}
          </div>
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
