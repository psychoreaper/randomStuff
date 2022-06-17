import Calculator from "./Calculator.js";
import '../styles/CalcWrapper.css';

function CalcWrapper(props) {
    return (
        <div className="calc-wrapper">
            <Calculator></Calculator>
        </div>
    )
}

export default CalcWrapper;