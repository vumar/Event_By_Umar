import React from "react";
import { useHistory } from "react-router-dom";

function NavBar({ isAuth, setAuth }) {
  const history = useHistory();

  return (
    <div>
      <nav class="navbar  ">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => history.push("/")}>
            <i class="fas fa-home fs-3 ps-2 "></i>
          </a>
          {isAuth ? (
            <button class="button " onClick={() => setAuth(false)}>
              Log Out
            </button>
          ) : (
            <div class="d-flex">
              <button class="button" onClick={() => history.push("/signup")}>
                Sign Up
              </button>
              <button
                class=" button me-2"
                onClick={() => history.push("/login")}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
