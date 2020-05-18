import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import Characters from "./components/Dashboard";
import Episodes from "./components/episodes"
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/episodes" component={Episodes}   />
      <Route exact path="/characters" component={Characters} />
      </Switch>
    </>
  );
}

export default App;
