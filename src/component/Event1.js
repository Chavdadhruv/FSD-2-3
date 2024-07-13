// write a react js script to display alert box with txt welcome to LJU by clicking on button.
import React from "react"

function Event1(){
    // Internal CSS
    const mystyle={color:"white",backgroundColor:"black",padding:"10px 20px", margin:"10px 20px"};

    function handleClick(){
        alert("Welcome LJU")
        document.body.style.backgroundColor = "sandybrown";
    }

    return(<>
        {/* //simple click */}
        {/* <button onClick={handleClick} style={mystyle}> */}
        {/* on DoubleClick */}
        <button onDoubleClick={handleClick} style={mystyle}>
             Click
        </button>
    </>);
}

export default Event1
