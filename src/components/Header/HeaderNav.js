import Button from "../UI/Design/Button";
import { auth } from "../../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { useAuthValue } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import UsernameModal from "../UI/Design/UsernameModal";
import { useState } from "react";

import classes from "./HeaderNav.module.css";

const HeaderNav = (props) => {
  const { user } = useAuthValue();

  const [modalUp, setModalUp] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const openUsernameModal = () => {
    setModalUp(true);
  };

  const exitModal = () => {
    setModalUp(false);
  };

  const changeUsername = (newUsername) => {
    console.log(newUsername);
    updateProfile(auth.currentUser, {
      displayName: newUsername
    }).then(() => {
      console.log(auth.currentUser);
    }).catch((err) => {
      console.log(err);
    });
    setModalUp(false);
  };

  return (
    <div className={classes.nav}>
      {modalUp && (
        <UsernameModal username={auth.currentUser.displayName} onConfirm={changeUsername} onClose={exitModal} />
      )}
      {user && <Button onClick={props.onSetImages}>Images</Button>}
      {user && <Button onClick={props.onSetMessages}>Messages</Button>}
      {user && <Button onClick={openUsernameModal}>Edit Username</Button>}
      {user && (
        <Button onClick={handleSignOut}>
          <Link to="/"></Link>Sign Out
        </Button>
      )}
    </div>
  );
};

export default HeaderNav;
