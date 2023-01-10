import { Fragment } from "react";

import BodyRow from './BodyRow';

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

const PHOTOS = [[image1, image2, image3, image4], [image5]];

const BodyImages = () => {
  return (
    <Fragment>
      <BodyRow photos={PHOTOS[0]} />
      <BodyRow photos={PHOTOS[1]} />
    </Fragment>
  );
};

export default BodyImages;
