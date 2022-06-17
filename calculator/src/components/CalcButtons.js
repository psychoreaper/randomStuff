import '../styles/CalcButtons.css';
import {useEffect, useState} from "react";

function CalcButtons(props) {
    const buttons = ["C", " √ ", " % ", " / ", "7", "8", "9", " x ", "4", "5", "6", " - ", "1", "2", "3", " + ", "00", "0", ","];
    const [expression, setExpression] = useState('');
    const [stack, setStack] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitHandler(expression);
    };

    const handleClick = (value) => (event) => {
        event.preventDefault();
        if (value === "C") setExpression('');
        else setExpression(prevState => prevState + "" + value);
    }

    useEffect(() => {
        props.clickHandler(expression);
    }, [expression]);

    return (<form onSubmit={handleSubmit}>
        {
            buttons.map(symbol =>
                <button className="button"
                        onClick={handleClick(symbol)}
                        value={symbol}>
                    {symbol}
                </button>
            )
        }
        <input className="buttons-submit" type="submit" value="="/>
    </form>)
}

export default CalcButtons;