import CalcInput from "./CalcInput.js";
import CalcButtons from "./CalcButtons.js";
import '../styles/Calculator.css';
import {useState} from "react";
import {parseExpression} from "../calculations/ParseExpression";

function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const submitHandler = (exp) => {
        setExpression(exp);
        setResult(parseExpression(exp));
    }

    const clickHandler = (value) => {
        setResult(value);
        if (!value) setExpression('');
    }

    return (
        <div className="calculator">
            <CalcInput expression={expression} result={result}/>
            <CalcButtons clickHandler={clickHandler} submitHandler={submitHandler}/>
        </div>
    )
}

export default Calculator;