import React from "react";
import classes from "./BodyMessages.module.css";
import Message from "./Message";
import MessageModal from "./MessageModal";
import { useState, useEffect, useCallback } from "react";

const BodyMessages = (props) => {
  const [modalUp, setModalUp] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessageHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMessages = [];      

      for (const key in data) {
        loadedMessages.push({
          id: key,
          title: data[key].title,
          body: data[key].body,
          signer: data[key].signer,
          user: data[key].user
        });
      }

      setMessageList(loadedMessages);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessageHandler();
  }, [fetchMessageHandler]);

  const addNewMessageToMessages = () => {
    setModalUp(true);
  };

  async function newMessage(message) {
    const response = await fetch(
      "https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    fetchMessageHandler();
    setModalUp(false);
  }

  async function deleteMessageHandler(messageID) {
    const response = await fetch(
        `https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages/${messageID}.json`,
        {
          method: "DELETE"
        }
    );
    const data = await response.json();
    fetchMessageHandler();
  };

  async function editMessageHandler(messageID, message){
    console.log(messageID);
    const response = await fetch(
      `https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages/${messageID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    fetchMessageHandler();
  };

  const exitModal = () => {
    setModalUp(false);
  };

  return (
    <div>
      {modalUp && (
        <MessageModal onConfirm={exitModal} onAddMessage={newMessage} />
      )}
      {isLoading && <p className={classes.infoText}>Loading...</p>}
      {error && <p className={classes.infoText}>{error}</p>}
      {!isLoading &&
        !error &&
        messageList
          .reverse()
          .map((message) => (
            <Message
              id={message.id}
              className={classes.bodyMessage}
              title={message.title}
              body={message.body}
              signer={message.signer}
              user={message.user}
              onDelete={deleteMessageHandler}
              onEdit={editMessageHandler}
            />
          ))}
      <button className={classes.buttonClass} onClick={addNewMessageToMessages}>
        +
      </button>
    </div>
  );
};

export default BodyMessages;
