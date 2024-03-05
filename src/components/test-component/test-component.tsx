import React, { useState } from "react";
import './test-component.css'

interface ITestProps{
    name: string
    age: number
}

const TestComponent = () =>{
    // let count = 5;
    const [count, setCount] = useState(0);
    
    const increaseHandler = ()=>{
        setCount(count + 1)
        console.log(count)
    }

    const decreaseHandler = () =>{
        setCount(count - 1)
        console.log(count)
    }
    return(
        <div>
            <div className="count-text">{count}</div>
            <div className="button-container">
                <button onClick={increaseHandler}>INCREASE</button>
                <button onClick={decreaseHandler}>DECREASE</button>
            </div>
        </div>
    )
}

export default TestComponent;