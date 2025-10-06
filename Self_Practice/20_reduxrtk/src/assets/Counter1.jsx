import React from "react";

function Counter1() {
    
    const [ count , setCount ] = useState(0);
    const Incremrent2 = ()=> {
        setCount (count + 5 )
    }
    const Decremrent2 = ()=> {
        setCount (count - 5)
    }
    
    return (
        <>
                        <button onClick={Incremrent2}> ADD by 5</button>
                        <button onClick={Decremrent2}>Sub by 5</button>
        </>
    )
}
