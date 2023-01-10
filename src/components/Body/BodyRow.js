import { Fragment } from "react";

import classes from "./BodyRow.module.css";

const BodyRow = (props) => {
  return (
    <Fragment>
      <div className={props.classRow}>
        <div className={classes.card}>
          <div className={classes.inner}>
            <div className={classes.front}>
              <img src={props.one} alt="Ethan holding a dog"></img>
            </div>
            <div className={classes.back}>
              <h1>Description</h1>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.inner}>
            <div className={classes.front}>
              <img src={props.two} alt="Ethan holding a dog"></img>
            </div>
            <div className={classes.back}>
              <h1>Description</h1>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.inner}>
            <div className={classes.front}>
              <img src={props.three} alt="Ethan holding a dog"></img>
            </div>
            <div className={classes.back}>
              <h1>Description</h1>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.inner}>
            <div className={classes.front}>
              <img src={props.four} alt="Ethan holding a dog"></img>
            </div>
            <div className={classes.back}>
              <h1>Description</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BodyRow;
