import React from "react";
import { useLocation } from "react-router";

function About () {
    let location = useLocation();
    console.log(location);
    
    return (
        <>
        
        <h1> About us </h1>
        <h3>  Pathname : {location.pathname}</h3>
        <h3> Name : {location.state.Name}</h3>
        <h3 > age : {location.state.Age}</h3>
        </>
    )
}

export default About;