import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    return <div className={classes.messageCard}>
        <h1>Message Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis itaque assumenda, fugit et similique iste illo pariatur aut repellendus sequi ipsam dicta placeat recusandae voluptate, ad earum dolore quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis itaque assumenda, fugit et similique iste illo pariatur aut repellendus sequi ipsam dicta placeat recusandae voluptate, ad earum dolore quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis itaque assumenda, fugit et similique iste illo pariatur aut repellendus sequi ipsam dicta placeat recusandae voluptate, ad earum dolore quis.
        </p>
        <footer className={classes.signer}>- Signer</footer>
    </div>
};

export default Message;