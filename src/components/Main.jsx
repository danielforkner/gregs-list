import React from "react";
import { Navbar } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_container">
      <Navbar />
      <h1 className="main_title">Hello World!!!</h1>
      <Switch>
        <Route
          path="/"
          render={() => {
            return; //component to render;
          }}
        />
        <Route
          path="/somethingGoeshere"
          render={() => {
            return; //component to render;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main