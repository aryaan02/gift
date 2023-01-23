import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Fragment, useState } from "react";
import Button from "../Button/Button";
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
    if (email.search(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) === -1) {
      setError("Please enter a valid email.");
      return;
    }
  };

  const validatePassword = () => {
    if (password.length < 6 || password.length > 20) {
      setError("Password must be between 6 and 20 characters.");
      return;
    }
    if (password === email) {
      setError("Password cannot be the same as email.");
      return;
    }
    if (password.search(/[a-z]/i) < 0) {
      setError("Password must contain at least one letter.");
      return;
    }
    if (password.search(/[0-9]/) < 0) {
      setError("Password must contain at least one digit.");
      return;
    }
  };

  const register = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!error) {
      console.log(email);
      console.log(password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
      
      navigate("/home");
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
