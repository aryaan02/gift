import { Fragment, useState } from "react";
import Button from "../Design/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import ErrorModal from "../Design/ErrorModal";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const validateEmail = () => {
    if (email === "") {
      setError({
        title: "Please enter an email and password.",
        message: "Don't leave it empty bruh.",
      });
      return false;
    }
    if (email.search(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) === -1) {
      setError({
        title: "Invalid Email",
        message: "Please enter a valid email.",
      });
      return false;
    }
    return true;
  };

  const login = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(auth.currentUser);
          navigate("/home");
        })
        .catch((err) =>
          setError({
            title: "Could not log in. Try again.",
            message: err.message,
          })
        );
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.input}>
        <form onSubmit={login}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="john.doe@email.com"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="123456"
            onChange={passwordChangeHandler}
            value={password}
          ></input>
          <Button type="submit">Sign In</Button>
        </form>
        <div className={classes.register}>
          <Button onClick={navigateRegister}>Register</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
