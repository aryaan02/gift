import Button from "../UI/Button/Button";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import classes from "./HeaderNav.module.css";

const HeaderNav = (props) => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.nav}>
      {user && <Button onClick={props.onSetImages}>Images</Button>}
      {user && <Button onClick={props.onSetMessages}>Messages</Button>}
      {user && (
        <Button onClick={handleSignOut}>
          <Link to="/"></Link>Sign Out
        </Button>
      )}
    </div>
  );
};

export default HeaderNav;
