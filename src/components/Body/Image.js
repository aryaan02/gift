import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.front}>
          <img src={props.photo} alt="Attachment from Ethan Email"></img>
        </div>
        <div className={classes.back}>
          <h1>Description</h1>
        </div>
      </div>
    </div>
  );
};

export default Image;
