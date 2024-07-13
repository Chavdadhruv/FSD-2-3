// on click event
// task-1
import React from "react";
function Event1(){
    const my_style={color:'white',backgroundColor:'black'}
    function handleClick(){
        alert('Welcome LJ')
    }
    return(
        <div>
            <center>
                <button style={my_style} onClick={handleClick}>Click Me</button>
            </center>
        </div>
    )
}
export default Event1;