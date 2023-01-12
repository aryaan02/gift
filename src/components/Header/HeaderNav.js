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
      <Button onClick={props.onSetImages}>Images</Button>
      <Button onClick={props.onSetMessages}>Messages</Button>
      {user?.displayName ? (
        <Button onClick={handleSignOut}>Sign Out</Button>
      ) : (
        <Button onClick={props.onSetSignIn}>Sign In</Button>
      )}
    </div>
  );
};

export default HeaderNav;
