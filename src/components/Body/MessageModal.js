import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";

import Button from "./../UI/Button/Button";
import classes from "./MessageModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [titleBackground, setTitleBackground] = useState(true);
  const [messageBackground, setMessageBackground] = useState(true);
  const { user } = useAuthValue();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    setTitleBackground(true);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
    setMessageBackground(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle === "") {
      setTitleBackground(false);
      return;
    }
    if (enteredMessage === "") {
      setMessageBackground(false);
      return;
    }
    props.onAddMessage({
      title: enteredTitle,
      body: enteredMessage,
      signer: user.displayName,
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Post a new message!</h2>
        </header>
        <div className={classes.content}>
          <input
            autoFocus
            type="text"
            className={classes.formInput}
            id="title"
            placeholder="Title"
            required=""
            style={{ background: !titleBackground ? "red" : "white" }}
            onChange={titleChangeHandler}
          />
          <label htmlFor="title" className={classes.formLabel}>
            Title
          </label>
        </div>
        <div className={classes.content}>
          <textarea
            rows="4"
            cols="50"
            className={classes.formInput}
            id="message"
            placeholder="Message"
            required=""
            style={{ background: !messageBackground ? "red" : "white" }}
            onChange={messageChangeHandler}
          />
          <label htmlFor="message" className={classes.formLabel}>
            Message
          </label>
        </div>
        <footer className={classes.actions}>
          <Button type="submit">Add Message</Button>
        </footer>
      </div>
    </form>
  );
};

const MessageModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
          onAddMessage={props.onAddMessage}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default MessageModal;
