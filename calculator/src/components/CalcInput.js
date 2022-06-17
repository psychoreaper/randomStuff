import '../styles/CalcInput.css';

function CalcInput(props) {
    return (<div className="input-wrapper">
        <p className="input-expression">{props.expression}</p>
        <p className="input-result">{props.result}</p>
    </div>)
}

export default CalcInput;