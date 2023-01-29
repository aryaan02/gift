import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.photo} alt="Attachment from Ethan Email"></img>
    </div>
  );
};

export default Image;
