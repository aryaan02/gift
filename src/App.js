import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import SignIn from './components/Body/SignIn';
import React, { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [imagesDisplayed, setImagesDisplayed] = useState(true);
  const [signInDisplayed, setSignInDisplayed] = useState(false);

  const displayTheImages = () => {
    setImagesDisplayed(true);
    setSignInDisplayed(false);
  };

  const displayTheMessages = () => {
    setImagesDisplayed(false);
    setSignInDisplayed(false);
  };

  const displayTheSignIn = () => {
    setImagesDisplayed(false);
    setSignInDisplayed(true);
  };

  return (
    <div>
      <AuthContextProvider>
        <Header
          onSetImages={displayTheImages}
          onSetMessages={displayTheMessages}
          onSetSignIn={displayTheSignIn}
        />
        <Routes>
          <Route
            path="/"
            elements={
              <SignIn />
            }
          />
        </Routes>
        <Body
          displayedImages={imagesDisplayed}
          displayedSignIn={signInDisplayed}
        />
      </AuthContextProvider>
    </div>
  );
}

export default App;
