import Header from "../components/Header/Header";
import { Fragment } from "react";
import Register from "../components/Body/Register";
import Footer from "../components/UI/Design/Footer";

const RegisterPage = () => {
  return (
    <Fragment>
      <Header />
      <Register />
      <Footer />
    </Fragment>
  );
};

export default RegisterPage;
