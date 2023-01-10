import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import React, { useState } from "react";

function App() {

  const [imagesDisplayed, setImagesDisplayed] = useState(false);

  const displayTheImages= () => {
    setImagesDisplayed(true);
  }

  const displayTheMessages= () => {
    setImagesDisplayed(false);
  }

  return (
    <div>
      <Header onSetImages={displayTheImages} onSetMessages={displayTheMessages}/>
      <Body displayedImages={imagesDisplayed}/>
    </div>
  );
}

export default App;
