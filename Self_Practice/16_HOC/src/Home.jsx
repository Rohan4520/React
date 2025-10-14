import React from "react";
import Hoc from "./Hoc";

function Home(props){
 const {count , increment} = props;
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> Click</button>

        </div>
    );
 }
 

 export default  Home ;
