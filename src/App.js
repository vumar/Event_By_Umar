import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";
import CreateEvent from "./Pages/CreateEvent";

function App() {
  const [ShowHomePage, setShowHomePage] = useState(false);
  const [ShowLogInPage, setShowLogInPage] = useState(false);
  const [ShowSignUpPage, setShowSignUppage] = useState(true);
  const [Event, setEvent] = useState(false);

  const HomePageFn = () => {
    setShowHomePage(true);
    setShowLogInPage(false);
    setShowSignUppage(false);
    setEvent(false);
  };
  const SignUpFn = () => {
    setShowHomePage(false);
    setShowLogInPage(false);
    setShowSignUppage(true);
    setEvent(false);
  };
  const LogInFn = () => {
    setShowHomePage(false);
    setShowLogInPage(true);
    setShowSignUppage(false);
    setEvent(false);
  };
  const CreateEventFn = () => {
    setShowHomePage(false);
    setShowLogInPage(false);
    setShowSignUppage(false);
    setEvent(true);
  };
  return (
    <div className="App">
      <NavBar
        clickLogInButton={LogInFn}
        clickSignUpButton={SignUpFn}
        clickHomePageLogo={HomePageFn}
        LogOutButton={Event}
      />
      {ShowSignUpPage && <SignIn clickLogInButton={LogInFn} />}
      {ShowLogInPage && (
        <LogIn EventPage={CreateEventFn} clickHomePageLogo={HomePageFn} />
      )}
      {ShowHomePage && <HomePage />}
      {Event && <CreateEvent onHome={HomePageFn} />}
    </div>
  );
}

export default App;
