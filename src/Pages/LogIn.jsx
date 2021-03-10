import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { validateEmail } from "../methods";

// props={history:(),autheticate:()}
// const {history,authenticate}=props

function LogIn({ history, authenticate }) {
  console.log(history);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //   useEffect(() => {
  //     console.log(Email);
  //     // console.log(Password);
  //   }, [Email, Password]);
  const loginInputValue = (e) => {
    e.preventDefault();
    console.log(email);

    if (email.length < 1 || !validateEmail(email)) setEmailError(true);
    else if (password.length < 5) {
      setPasswordError(true);
      setEmailError(false);
    } else {
      setEmailError(false);
      setPasswordError(false);
      const url = process.env.REACT_APP_BACKEND_URL;
      axios
        .post(`${url}/user/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("login Sucess", res.data.token);
          localStorage.setItem("token", res.data.token);
          history.replace("/");
          authenticate(true);
          toast.success("Login successfully");
        })
        .catch((err) => {
          console.log("Login Failed", err.response.data.msg);
          toast.error(err.response.data.msg);
        });
    }
  };

  return (
    <div>
      <div class="maindiv">
        <div class="login">
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={(e) => loginInputValue(e)}>
          <input
            type="email"
            className="input-1"
            placeholder="Email"
            onInput={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">Enter Valid Email</div>}
          <br />
          <input
            type="Password"
            className="input-1"
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <div className="text-danger">Enter Valid Password</div>
          )}
          <br />
          <button
            type="submit"
            className="submit_btn"
            // onClick={(e) => loginInputValue(e)}
          >
            Submit
          </button>
        </form>

        <p className="account">
          Don't have an account ?<Link to="/signup">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
