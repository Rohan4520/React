import React from "react";
import { useState } from "react";

function Counter() {

    const [ count , setCount ] = useState(0);

    const Incremrent = ()=> {
        setCount (count + 1 )
    }
    const Decremrent = ()=> {
        setCount (count - 1 )
    }


    return (
        <>
            <h1> Redux toolkit</h1>

            <h1 > {count} </h1>
            <button onClick={Incremrent}> Increment </button> 
            <button onClick={Decremrent}>  Decrement </button>

        </>
    )
}

export default Counter