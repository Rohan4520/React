import React from "react";
import { useSearchParams } from "react-router";

function Serch(props) {
        const [ serchParam , setSearchParam] = useSearchParams();

        let name =serchParam.get('fname');
        let age =serchParam.get('age');
        let city =serchParam.get('city');

        

    return (
<>
        <center>
            <h1>  serch page</h1>
            <h3> My name : {name} </h3>
            <h3> My age  : {age } </h3>
            <h3> My city : {city} </h3>

            <br/>
            <button onClick={ ()=> setSearchParam({fname: "rohan", age : 24 , city : "Indore"})}> age update </button>
        </center>
</>
    )
}
export default Serch ;