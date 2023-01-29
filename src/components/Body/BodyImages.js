import { Fragment } from "react";
import BodyDates from "./BodyDates";
import BodyDescription from "./BodyDescription";

import BodyRow from "./BodyRow";

const BodyImages = () => {
  // Get number of subfolders in images folder
  const context = require.context(
    "../../assets/images",
    true,
    /\.(png|jpe?g|svg)$/
  );
  const keys = context.keys();
  const folders = keys
    .map((key) => key.split("/")[1])
    .filter((value, index, self) => self.indexOf(value) === index);

  var counts = new Map();

  for (let i = 0; i < folders.length; i++) {
    counts.set(folders[i], 0);
  }

  for (let i = 0; i < folders.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (keys[j].includes(folders[i])) {
        counts.set(folders[i], counts.get(folders[i]) + 1);
      }
    }
  }

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../assets/images", true, /\.(png|jpe?g|svg)$/)
  );
  const imageFours = [];

  var start_j = 0;
  for (let i = 0; i < folders.length; i++) {
    var chunkSize = counts.get(folders[i]);
    const chunk = images.slice(start_j, start_j + chunkSize);
    imageFours.push(chunk);
    start_j += chunkSize;
  }

  return (
    <Fragment>
      {imageFours.map((photo, i) => (
        <Fragment>
          <BodyDates date={folders[i]} />
          <BodyDescription date={i} />
          <BodyRow photos={photo} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default BodyImages;
