import { Fragment } from "react";

import image1 from "../../assets/images/20220619_191909.jpg";
import image2 from "../../assets/images/20220627_231841.jpg";
import image3 from "../../assets/images/IMG-20230102-WA0005.jpg";
import classes from "./BodyImages.module.css";

const BodyImages = () => {
  return (
    <Fragment>
      {/* <BodyRow rowClass={classes.images} one={image1} two={image2} three={image3} four={image4} /> */}
      <div className={classes.row}>
        <div className={classes.images}>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image1} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image2} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image3} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.images}>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image1} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image2} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={image3} alt="Ethan holding a dog"></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BodyImages;
