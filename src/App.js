import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import Characters from "./components/Dashboard";
import CharacterCard from "./components/CharacterCard"
import Episodes from "./components/episodes"
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/episodes" component={Episodes}   />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterCard} />
      </Switch>
    </>
  );
}

export default App;
