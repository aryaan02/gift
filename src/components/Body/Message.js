import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div
      key={props.key}
      className={`${classes.messageCard} ${props.className}`}
    >
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <footer className={classes.signer}>- {props.signer}</footer>
    </div>
  );
};

export default Message;
