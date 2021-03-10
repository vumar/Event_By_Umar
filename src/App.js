import React, { useState, useEffect } from "react";
import "./App.css";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";
import CreateEvent from "./Pages/CreateEvent";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    console.log("isAuth:", isAuthenticated);
  });

  return (
    <div className="App">
      <ToastContainer />
      <NavBar isAuth={isAuthenticated} setAuth={setisAuthenticated} />

      <Switch>
        <Route
          path="/signup"
          render={(props) => {
            if (isAuthenticated) return <Redirect to="/create_event" />;
            else return <SignIn {...props} />;
          }}
        />
        <Route
          path="/login"
          render={(props) => {
            if (isAuthenticated) return <Redirect to="/" />;
            else return <LogIn {...props} authenticate={setisAuthenticated} />;
          }}
        />
        <Route
          path="/create_event"
          render={(props) => {
            // return <CreateEvent props />;
            if (isAuthenticated) return <CreateEvent props />;
            else return <HomePage {...props} />;
          }}
        />
        <Route
          path="/"
          render={(props) => {
            return <HomePage {...props} isAuth={isAuthenticated} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
