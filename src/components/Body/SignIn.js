import { Fragment, useEffect } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import classes from "./SignIn.module.css";
import LoginForm from "../UI/Form/LoginForm";

const SignIn = (props) => {
  const { user } = useAuthValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <Fragment>
      <div className={classes.signin}>
        <h1>Sign in to Read and Write Messages for Ethan!</h1>
        <LoginForm />
      </div>
    </Fragment>
  );
};

export default SignIn;
