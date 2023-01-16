import React from "react";
import classes from "./BodyMessages.module.css";
import Message from "./Message";
import MessageModal from "./MessageModal";
import { useState } from "react";

const BodyMessages = (props) => {

    const [modalUp, setModalUp] = useState(false);
    const [messageList, setMessageList] = useState([]);

    const addNewMessageToMessages = () => {
        setModalUp(true);
    };

    const newMessage = (message) => {
        setMessageList(prevMessages => {
            return [message, ...prevMessages]});
        messageList.push(message);
        setModalUp(false);
    };

    const exitModal = () => {
        setModalUp(false);
    };

    return <div>
        {modalUp && <MessageModal onConfirm={exitModal} onAddMessage={newMessage} />}
        {messageList.map(message => <Message key={message.body} className={classes.bodyMessage} title={message.title} body={message.body} signer={message.signer}/>)}
        <button className={classes.buttonClass} onClick={addNewMessageToMessages}>+</button>
        </div>
};

export default BodyMessages;