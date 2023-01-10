import Button from "../UI/Button/Button";

import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <div className={classes.nav}>
      <Button>Images</Button>
      <Button>Messages</Button>
    </div>
  );
};

export default HeaderNav;
