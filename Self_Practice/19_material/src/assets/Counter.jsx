import React, { useState }  from "react";


function Counter() {
    
        const [ num , setNum] = useState(0)
        const addnum = ()=> {
            setNum ( num + 1 )
        }
        const minusnum = ()=> {
                setNum ( num -  1) 
        }

    
    return (
    <>  
       <center>
       <h1>  {num} </h1>
        <button onClick={addnum}> 
            add
        </button>
        <button onClick={minusnum}> 
            minus
        </button> </center>  
        
    </>
    )
};

export default Counter;
