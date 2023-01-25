import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Fragment, useState } from "react";
import Button from "../Design/Button";
import ErrorModal from "../Design/ErrorModal";
import classes from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

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

  const validatePassword = () => {
    if (password.length < 6 || password.length > 20) {
      setError({
        title: "Invalid Password",
        message: "Password must be between 6 and 20 characters.",
      });
      return false;
    }
    if (password === email) {
      setError({
        title: "Invalid Password",
        message: "Password cannot be the same as email.",
      });
      return false;
    }
    if (password.search(/[a-z]/i) < 0) {
      setError({
        title: "Invalid Password",
        message: "Password must contain at least one letter.",
      });
      return false;
    }
    if (password.search(/[0-9]/) < 0) {
      setError({
        title: "Invalid Password.",
        message: "Password must contain at least one digit.",
      });
      return false;
    }
    // if (password.search(/[$-/:-?{-~!"^_`\[\]]/) < 0) {
    //   setError({
    //     title: "Invalid Password.",
    //     message: "Password must contain at least one symbol.",
    //   });
    //   return false;
    // }
    return true;
  };

  const register = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate("/home");
        })
        .catch((err) => {
          setError({
            title: "Could not register. Try again.",
            message: err.message,
          });
        });
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
        <form onSubmit={register}>
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
          <Button type="submit">Register</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
