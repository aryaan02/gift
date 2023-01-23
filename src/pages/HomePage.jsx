import Protected from "../components/Protected";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import { useState, Fragment } from "react";

const HomePage = () => {
  const [imagesDisplayed, setImagesDisplayed] = useState(true);

  const displayTheImages = () => {
    setImagesDisplayed(true);
  };

  const displayTheMessages = () => {
    setImagesDisplayed(false);
  };

  return (
    <Fragment>
      <Protected>
        <Header
          onSetImages={displayTheImages}
          onSetMessages={displayTheMessages}
        ></Header>
        <Body displayedImages={imagesDisplayed}></Body>
      </Protected>
    </Fragment>
  );
};

export default HomePage;
