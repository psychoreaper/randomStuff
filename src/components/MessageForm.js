import {useState} from "react";
import '../styles/MessageForm.css';

function MessageForm(props) {
    const [text, setText] = useState('');

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (text) {
            props.onSendButtonClick(text);
            setText('');
        }
    };

    return (
        <div>
            <form className="form-wrapper" onSubmit={submitHandler}>
                <input className="form-input" type="text" value={text} onChange={changeHandler}/>
                <button className="form-button" type="submit" placeholder="Type your message here...">Send!</button>
            </form>
        </div>
    )
}

export default MessageForm;