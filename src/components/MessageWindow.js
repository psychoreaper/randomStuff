import Message from './Message';
import '../styles/MessageWindow.css';

function MessageWindow(props) {
    const messages = props.msgs;

    return (
        <div className="message-window-wrapper">
            {messages.map(_ => <Message sender={_.senderId ? "me" : "them"} message={_.text}/>)}
        </div>
    )
}

export default MessageWindow;