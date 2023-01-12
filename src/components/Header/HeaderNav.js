import Button from "../UI/Button/Button";
import { UserAuth } from "../../context/AuthContext";

import classes from "./HeaderNav.module.css";

const HeaderNav = (props) => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.nav}>
      {user?.displayName ? (
        <Button onClick={props.onSetImages}>Images</Button>
      ) : (
        <div />
      )}
      {user?.displayName ? (
        <Button onClick={props.onSetMessages}>Messages</Button>
      ) : (
        <div />
      )}
      {user?.displayName ? (
        <Button onClick={handleSignOut}>Sign Out</Button>
      ) : (
        <Button>Sign In</Button>
      )}
    </div>
  );
};

export default HeaderNav;
