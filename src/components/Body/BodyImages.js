import { Fragment } from "react";

import BodyRow from './BodyRow';


const BodyImages = () => {
  
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../../assets/images', true, /\.(png|jpe?g|svg)$/));

  const imageSix = [];

  const chunkSize = 6;
  for (let i = 0; i < images.length; i += chunkSize) {
      const chunk = images.slice(i, i + chunkSize);
      imageSix.push(chunk);
  }

  return (
    <Fragment>
      {imageSix.map(photo => <BodyRow photos={photo} />)}
    </Fragment>
  );
};

export default BodyImages;
