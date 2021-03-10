import React, { useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { validateEmail } from "../methods";
import { toast } from "react-toastify";

function SignIn({ history }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const SignUpInputValue = (e) => {
    console.log("form submitted:", username);
    e.preventDefault();

    if (username.length < 3) setUserNameError(true);
    else if (email.length < 1 || !validateEmail(email)) {
      setEmailError(true);
      setUserNameError(false);
    } else if (password.length < 5) {
      setPasswordError(true);
      setUserNameError(false);
      setEmailError(false);
    } else {
      setPasswordError(false);
      setUserNameError(false);
      setEmailError(false);
      const url = process.env.REACT_APP_BACKEND_URL;

      axios
        .post(`${url}/user`, {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("Sign  Sucess", res);
          toast.success("Sign In Succeesfully");
          history.push("/login");
        })
        .catch((err) => {
          toast.error(err.response.data.msg);
          console.log(err.response.data.msg);
        });
    }
  };

  return (
    <div className="maindiv">
      <div className="signin">
        <h2>Create Account</h2>
      </div>
      <form onSubmit={(e) => SignUpInputValue(e)}>
        <input
          type="text"
          placeholder="Enter Your name"
          className="input-1"
          onInput={(e) => setUserName(e.target.value)}
        />
        {usernameError && <div className="text-danger">Enter Valid Name</div>}
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="input-1"
          onInput={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="text-danger">Enter Valid Email</div>}
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="input-1"
          onInput={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className="text-danger">Enter Valid Password</div>
        )}
        <button type="submit" className="submit_btn">
          Sign Up
        </button>
      </form>

      <p className="fs-6 mt-4">
        Have already an account ?<Link to="/login">Login Here</Link>
        {/* <span>
          <a className="Register" onClick={() => history.push("/login")}>
            Login Here
          </a>
        </span> */}
      </p>
    </div>
  );
}

export default SignIn;
