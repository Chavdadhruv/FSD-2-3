// wrt to display value in console while changing it in textbox.
import React from "react"

function Event2(){
    
    function handleChange(event){
        console.log(event.target.value)
    }
    return(<>
        <input type="text" name="name" onChange={handleChange} style={{margin:"10px 20px"}}></input>
    </>);
}

export default Event2
