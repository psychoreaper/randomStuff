import '../styles/ChatForm.css';
import MessageForm from './MessageForm';
import MessageWindow from "./MessageWindow";
import {useState} from "react";

function ChatForm(props) {
    const defaultMessages = [
        {
            id: 1,
            senderId: 0,
            text: 'Hello World!'
        },
        {
            id: 2,
            senderId: 0,
            text: '.'
        },
        {
            id: 3,
            senderId: 0,
            text: "This is a kind of magic..."
        },
        /*{
            id: 4,
            senderId: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
                "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
                "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" +
                "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                "officia deserunt mollit anim id est laborum."
        }*/
    ]

    const [messages, setMessages] = useState(defaultMessages);

    const sendButtonHandler = (newText) => {
        const newMessage = {id: Math.random(), senderId: 1, text: newText};
        setMessages(prevState => [...prevState, newMessage]);
    }

    return (
        <div className="chat-wrapper">
            <h2>My First Chat</h2>
            <div className="main-form">
                <MessageWindow msgs={messages}/>
                <MessageForm onSendButtonClick={sendButtonHandler}/>
            </div>
            <p>Contains frontend functions only. The real chat is coming soon... possibly.</p>
        </div>
    )
}

export default ChatForm;