import Header from "../components/Header/Header";
import SignIn from "../components/Body/SignIn";
import { Fragment } from "react";
import Footer from "../components/UI/Design/Footer";

const SignInPage = () => {
  return (
    <Fragment>
      <Header />
      <SignIn />
      <Footer />
    </Fragment>
  );
};

export default SignInPage;
