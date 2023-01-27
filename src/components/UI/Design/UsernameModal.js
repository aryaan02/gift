import React from "react";

import Card from "./Card";
import { useState } from "react";
import Button from "./Button";
import classes from "./UsernameModal.module.css";

const UsernameModal = (props) => {

    const [enteredUsername, setEnteredUsername] = useState(props.username);
    const [usernameBackground, setUsernameBackground] = useState(true);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        setUsernameBackground(true);
    };

    const changeUsername = () => {
        if (enteredUsername === "") {
            setUsernameBackground(false);
            return;
        }
        props.onConfirm(enteredUsername);
    };

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Edit Your Username!</h2>
        </header>
        <div className={classes.content}>
          <input
            autoFocus
            type="text"
            className={classes.formInput}
            id="username"
            placeholder="Username"
            required=""
            onChange={usernameChangeHandler}
            style={{ background: !usernameBackground ? "red" : "white" }}
            value={enteredUsername}
          />
          <label htmlFor="username" className={classes.formLabel}>
            Username
          </label>
        </div>
        <footer className={classes.actions}>
          <Button onClick={changeUsername}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default UsernameModal;
