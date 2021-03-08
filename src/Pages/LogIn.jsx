import React, { useState } from "react";
import axios from "axios";

// props={history:(),autheticate:()}
// const {history,authenticate}=props

function LogIn({ history, authenticate }) {
  console.log(history);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     console.log(Email);
  //     // console.log(Password);
  //   }, [Email, Password]);
  const loginInputValue = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .post(`${url}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("login Sucess", res.data.token);
        localStorage.setItem("token", res.data.token);
        history.replace("/create_event");
        authenticate(true);
      })
      .catch((err) => {
        console.log("Login Failed", JSON.stringify(err.response));
      });
  };

  return (
    <div>
      <div className="App">
        <div className="maindiv">
          <div className="header">
            <h2>Login Page</h2>
          </div>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input"
              onInput={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input"
              onInput={(e) => setPassword(e.target.value)}
            />
            <div className=" text-start ms-5">
              <i className="far fa-check-square">
                <span className="ms-2">
                  I agree all Statements in
                  <a className="link">Terms of Service</a>
                </span>
              </i>
            </div>
          </form>

          <button
            className="bttn btn-primary"
            onClick={() => loginInputValue()}
          >
            Sign In
          </button>

          <p className="fs-6 mt-4">
            Don't have an account ?
            <a onClick={() => history.replace("/signup")}>Register Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
