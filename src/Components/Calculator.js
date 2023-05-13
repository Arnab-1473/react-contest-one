import { useState } from "react"

const Calculator = () => {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");
    const [success, setSucces] = useState("");
    const [error, setError] = useState("");

    function handleNum1(e) {
        setNumber1(e.target.value);
    }
    function handleNum2(e) {
        setNumber2(e.target.value);
    }

    function handleResult(e) {
        // console.log(e.target.value);
        if (number1 !== "" && number2 !== "") {
            if (e.target.value == "+") {
                setResult(parseInt(number1) + parseInt(number2))
            }
            if (e.target.value == "-") {
                setResult(parseInt(number1) - parseInt(number2))
            }
            if (e.target.value == "*") {
                setResult(parseInt(number1) * parseInt(number2))
            }
            if (e.target.value == "/") {
                setResult(parseInt(number1) / parseInt(number2))
            }
            setError("");
            setSucces("Success: Your result is shown above");
        }
        else if (number1 == "" && number2 == "") {
            // setError("Error: Num1 cannot be empty")
            setError("Error : Num1 and Num2 cannot be empty")
            setSucces("");
        }
        else if (number2 == "") {
            setError("Error: Num2 cannot be empty")
            setSucces("");
        }
        else {
            setError("Error : Num1 cannot be empty")
            setSucces("");
        }
    }
    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="input">
                <input type="number" placeholder="Number 1" value={number1} onChange={handleNum1} />
                <input type="number" placeholder="Number 2" value={number2} onChange={handleNum2} />
            </div>
            <div className="button">
                <button id="+" value={"+"} onClick={handleResult}>+</button>
                <button id="-" value={"-"} onClick={handleResult}>-</button>
                <button id="*" value={"*"} onClick={handleResult}>*</button>
                <button id="/" value={"/"} onClick={handleResult}>/</button>
            </div>
            <div className="message">
                <div className="result">Result = {result}</div>
                <div className="success">{success}</div>
                <div className="error">{error}</div>
            </div>


        </div>
    )
}

export default Calculator