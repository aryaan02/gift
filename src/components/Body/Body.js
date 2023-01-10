import BodyImages from './BodyImages';
import BodyMessages from './BodyMessages';
import classes from "./Body.module.css";

const Body = (props) => {
  return (
    <div className={classes.body}>
      {!props.displayedImages && <BodyMessages />}
      {props.displayedImages && <BodyImages />}
    </div>
  );
};

export default Body;
