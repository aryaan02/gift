import { Fragment } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

import classes from "./SignIn.module.css";

const SignIn = (props) => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className={classes.signin}>
        <h1>Sign in to Read and Write Messages for Ethan!</h1>
        <div className={classes.google}>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
