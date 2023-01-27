import React, { useEffect } from "react";
import classes from "./Message.module.css";
import Button from "../UI/Design/Button";
import { useState } from "react";
import { auth } from "../../firebase";

const Message = (props) => {
  const [validUser, setValidUser] = useState(false);
  const [editText, setEditText] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newBody, setNewBody] = useState(props.body);

  useEffect(() => {
    if (auth.currentUser.email === props.user) {
      setValidUser(true);
    }
  }, [props.user]);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const editHandler = () => {
    setEditText(true);
  };

  const confirmEdit = () => {
    setEditText(false);
    props.onEdit(props.id, {
      title: newTitle,
      body: newBody,
      signer: auth.currentUser.displayName,
      user: auth.currentUser.email,
    });
  };

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setNewBody(event.target.value);
  };

  return (
    <div
      key={props.id}
      className={`${classes.messageCard} ${props.className}`}
    >
      {!editText && <h1>{props.title}</h1>}
      {editText && <input autoFocus type="text" style={{width : "75%"}} value={newTitle}  onChange={titleChangeHandler} />}
      {!editText && <p>{props.body}</p>}
      {editText && <textarea style={{width : "90%"}} value={newBody}  onChange={messageChangeHandler} />}
      {validUser && <div className={classes.buttons}>
        <Button onClick={editHandler}>Edit</Button>
        <Button onClick={deleteHandler}>Delete</Button>
        {editText && <Button onClick={confirmEdit}>Done</Button>}
      </div>}
      <footer className={classes.signer}>- {props.signer}</footer>
    </div>
  );
};

export default Message;
