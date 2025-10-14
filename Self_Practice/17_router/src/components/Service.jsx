import React from "react"; 
import { Outlet, useLocation, useNavigate } from "react-router";

function Service(props) {
    let location = useLocation();
    let Navigate =useNavigate();
        console.log(location.pathname)



    return (
        <>
            <center> <h1> Service page </h1></center>
            <br/> 
            <h3> 
                <link to='busService'> Bus service </link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <link to='foodService'> Bus service </link> &nbsp; &nbsp; &nbsp; &nbsp; 
                <link to='hostalService'> Bus service </link> &nbsp; &nbsp; 
                
  
                
            </h3>
        </>
    )

}

export default Service;
