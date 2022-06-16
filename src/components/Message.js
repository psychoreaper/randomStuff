import '../styles/Message.css';

function Message(props) {
    const classes =  (props.sender === "me" ? "sent-by-me" : "sent-by-them");

    return (
        <div className="message-container">
        <div className={"message-wrapper " + classes}>
            <h6 className="message-sender">{props.sender}</h6>
            <p className={"message-text " + classes}>{props.message ? props.message : "\n"}</p>
        </div></div>
    )
}

export default Message;