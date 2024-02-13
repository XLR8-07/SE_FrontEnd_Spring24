import React from "react";

interface ITestProps{
    name: string
    age: number
}

const TestComponent = (props:ITestProps) =>{
    const age = 50;
    
    return(
        <div>
            Hello I am {props.name}!
            <p>
                My age is {props.age}
            </p>
        </div>
    )
}

export default TestComponent;