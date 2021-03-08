import React from "react";

function NavBar({
  clickHomePageLogo,
  clickLogInButton,
  clickSignUpButton,
  LogOutButton,
}) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => clickHomePageLogo()}>
            Navbar
          </a>
          {LogOutButton ? (
            <button
              class="btn btn-outline-success "
              onClick={() => clickLogInButton()}
            >
              Log Out
            </button>
          ) : (
            <div class="d-flex">
              <button
                class="btn btn-outline-success "
                onClick={() => clickSignUpButton()}
              >
                Sign Up
              </button>
              <button
                class="btn btn-outline-success me-2"
                onClick={() => clickLogInButton()}
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
