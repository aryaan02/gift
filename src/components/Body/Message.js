import React, { useEffect } from "react";
import classes from "./Message.module.css";
import Button from "../UI/Design/Button";
import { useState } from "react";
import { auth } from "../../firebase";

const Message = (props) => {
  const [validUser, setValidUser] = useState(false);

  useEffect(() => {
    if (auth.currentUser.email === props.user) {
      setValidUser(true);
    }
  }, [props.user]);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div
      key={props.id}
      className={`${classes.messageCard} ${props.className}`}
    >
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      {validUser && <div className={classes.buttons}>
        <Button onClick={props.onEdit}>Edit</Button>
        <Button onClick={deleteHandler}>Delete</Button>
      </div>}
      <footer className={classes.signer}>- {props.signer}</footer>
    </div>
  );
};

export default Message;
