import Button from "../UI/Button/Button";

import classes from "./HeaderNav.module.css";

const HeaderNav = (props) => {
  return (
    <div className={classes.nav}>
      <Button onClick={props.onSetImages}>Images</Button>
      <Button onClick={props.onSetMessages}>Messages</Button>
    </div>
  );
};

export default HeaderNav;
