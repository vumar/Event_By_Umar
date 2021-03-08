import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";
import CreateEvent from "./Pages/CreateEvent";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    console.log("isAuth:", isAuthenticated);
  });

  return (
    <div className="App">
      <NavBar isAuth={isAuthenticated} abcd={setisAuthenticated} />
      <Switch>
        <Route
          path="/signup"
          render={() => {
            if (isAuthenticated) return <Redirect to="/create_event" />;
            else return <SignIn props />;
          }}
        />
        <Route
          path="/login"
          render={(props) => {
            if (isAuthenticated) return <Redirect to="/create_event" />;
            else return <LogIn {...props} authenticate={setisAuthenticated} />;
          }}
        />
        <Route
          path="/create_event"
          render={(props) => {
            // return <CreateEvent props />;
            if (isAuthenticated) return <CreateEvent props />;
            else return <HomePage props />;
          }}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
