import React, { Fragment } from "react";
import RegisterForm from "../UI/Form/RegisterForm";
import Button from "../UI/Button/Button";

import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className={classes.register}>
        <h1>Register to Read and Write Messages for Ethan!</h1>
        <RegisterForm />
        <h3>Already have an account?</h3>
        <Button onClick={navigateSignIn}>Sign In</Button>
      </div>
    </Fragment>
  );
};

export default Register;
