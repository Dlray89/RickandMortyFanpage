import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
