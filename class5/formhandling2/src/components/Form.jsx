import React, { useState } from 'react'

function Form() {
    const [ fName , setFname] = useState("Rohan")

    function printFromTag(event){
        setFname(event.target.value)
    }
    function printData(event){
        event.preventDefault();
        console.log(fName)
    }
  return (
    <div>
        <form onSubmit={printData}>
            <div>
                <label htmlFor="fName">first name</label>
                <input type="text" id='fName'  name='fName'value={fName} onChange={printFromTag}/> 
                {/* value se input ka track handle krte h / control krne ke liye */}
                {/* ek state bnana pdegi value ke liye or usko usko onChange me mount krege */}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form