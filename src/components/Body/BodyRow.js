import { Fragment } from "react";

import classes from "./BodyRow.module.css";

const BodyRow = (props) => {
  return (
    <Fragment>
      <div className={classes.row}>
        {props.photos.map((photo) => {
          return <div className={classes.card}>
            <div className={classes.inner}>
              <div className={classes.front}>
                <img src={photo} alt=""></img>
              </div>
              <div className={classes.back}>
                <h1>Description</h1>
              </div>
            </div>
          </div>;
        })}
      </div>
    </Fragment>
  );
};

export default BodyRow;
