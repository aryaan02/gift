import Header from "../components/Header/Header";
import SignIn from "../components/Body/SignIn";
import { Fragment } from "react";

const SignInPage = () => {
  
  return (
    <Fragment>
      <Header
        signedIn={false}
      />
      <SignIn />
    </Fragment>
  );
};

export default SignInPage;
