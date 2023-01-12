import { Fragment } from "react";
import Button from "../Button/Button";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <Fragment>
      <div className={classes.input}>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="text"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="text"></input>
          <Button type="submit">Sign In</Button>
        </form>
        <div className={classes.register}>
          <Button>Register</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
