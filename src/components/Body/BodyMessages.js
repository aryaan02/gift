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
        const response = await fetch('https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages.json');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();

        const loadedMessages = [];

        for (const key in data) {
            loadedMessages.push({
            id: key,
            title: data[key].title,
            body: data[key].body,
            signer: data[key].signer,
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
        const response = await fetch('https://happy-birthday-ethan-default-rtdb.firebaseio.com/messages.json', {
          method: 'POST',
          body: JSON.stringify(message),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        fetchMessageHandler();
        setModalUp(false);
    }

    const exitModal = () => {
        setModalUp(false);
    };

    return <div>
        {modalUp && <MessageModal onConfirm={exitModal} onAddMessage={newMessage} />}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && messageList.reverse().map(message => <Message key={message.body} className={classes.bodyMessage} title={message.title} body={message.body} signer={message.signer}/>)}
        <button className={classes.buttonClass} onClick={addNewMessageToMessages}>+</button>
        </div>
};

export default BodyMessages;