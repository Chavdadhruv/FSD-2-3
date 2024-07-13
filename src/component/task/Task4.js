// ary of string convert in uppercase

// wrt to display value in console while changing it in textbox.
import React from "react"

function Task4(){
    const ary=["ken","noah","nick","kendal","mark"]
    return(<>
       {
        ary.map((value=>{
            return <h2>{value.toUpperCase()}</h2>
        }))
        }
    </>);
}

export default Task4
