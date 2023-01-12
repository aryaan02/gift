import BodyImages from "./BodyImages";
import BodyMessages from "./BodyMessages";
import SignIn from "./SignIn";
import classes from "./Body.module.css";

const Body = (props) => {
  return (
    <div className={classes.body}>
      {!props.displayedImages && !props.displayedSignIn && <BodyMessages />}
      {props.displayedImages && !props.displayedSignIn && <BodyImages />}
      {!props.displayedImages && props.displayedSignIn && <SignIn />}
    </div>
  );
};

export default Body;
