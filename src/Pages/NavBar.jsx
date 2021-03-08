import React from "react";
import { useHistory } from "react-router-dom";

function NavBar({ isAuth, abcd }) {
  const history = useHistory();

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => history.push("/")}>
            Navbar
          </a>
          {isAuth ? (
            <button
              class="btn btn-outline-success "
              onClick={() => abcd(false)}
            >
              Log Out
            </button>
          ) : (
            <div class="d-flex">
              <button
                class="btn btn-outline-success "
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </button>
              <button
                class="btn btn-outline-success me-2"
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
