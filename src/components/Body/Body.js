import BodyImages from "./BodyImages";
import BodyMessages from "./BodyMessages";
import classes from "./Body.module.css";

const Body = (props) => {
  return (
    <div className={classes.body}>
      {!props.displayedImages && !props.displayedSignIn && <BodyMessages />}
      {props.displayedImages && !props.displayedSignIn && <BodyImages />}
    </div>
  );
};

export default Body;
