import { Fragment } from "react";
import Image from "./Image";

import classes from "./BodyRow.module.css";

const BodyRow = (props) => {
  return (
    <Fragment>
      <div className={classes.row}>
        {props.photos.map((photo) => {
          return <Image photo={photo} />;
        })}
      </div>
    </Fragment>
  );
};

export default BodyRow;
