import React, { useState } from "react";


function Hoc(wrap){

    function Add(){
        const[count , setCount] = useState(0);

        const Increment = () => {
            setCount (count+5);
        }
    return(
        <div>
        <wrap count={count} Increment={Increment} />
        </div>
        );

    };
    return <Add/>
}
export default Hoc;