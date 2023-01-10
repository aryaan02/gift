import React from "react";
import classes from "./BodyMessages.module.css";
import Message from "./Message";

const BodyMessages = (props) => {
    return <div>
        <Message className={classes.bodyMessage}/>
        <Message className={classes.bodyMessage}/>
        </div>
};

export default BodyMessages;