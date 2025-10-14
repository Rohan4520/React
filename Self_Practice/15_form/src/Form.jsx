import React, { useState } from "react";

function Form() {

    const[fname ,setFname] = useState('');
    const[firstname , setFirstname] = useState('');
    
    const[lname, setLname] = useState('');
    const[lastname , setLastname] = useState('');

    const[age ,setAge] = useState('');


    const inputFname = (event)=> {
        setFname(event.target.value)

    }
    const inputLname = (event)=> {
        setLname(event.target.value)
    }

    const inputAge = (event)=> {
        setAge(event.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        setFirstname(fname);
        setLastname(lname);

    }

    return (
        <>
        <h1> Hello `my name is {firstname} {lastname} and age is {age}</h1> 

        <form onSubmit={handleSubmit}>
            <label> First name</label>
        <input type="text" placeholder="Enter your name" onChange={inputFname}/>
        <br/> <br/>

        <label> Last name</label>
        <input type="text" placeholder="Enter your last name" onChange={inputLname} />
        <br/> <br/>
        <input type="text" placeholder="Enter your age" onChange={inputAge} />
        <input type="submit"/>
        

        </form>
        
        </>
    )

}

export default Form ;