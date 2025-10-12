import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetBtn } from "./CounterSlice";


 
 export function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch =  useDispatch();

    const handleIncrement = ()=> {
        dispatch(increment())
    }
    const handleDecrement = ()=> {
        dispatch(decrement())
    }
    const handleReset = ()=>{
        dispatch(resetBtn())
    }


    return (
        <>
            <button onClick={handleIncrement} > increment  </button>
            <h3> Count : {count} </h3>
            <button onClick={handleDecrement} > decrement </button>
            <button onClick={handleReset} > Reset  </button>
            
        </>
    )
}
  