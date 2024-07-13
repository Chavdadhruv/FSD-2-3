// ary of numbers and want to mul each of this number by 5
import React from "react"

function Task5(){
    
   const ary=[1,11,111]
    return(<>
       {
        ary.map((value=>{
            return <h2>{value*5}</h2>
        }))
        }
    </>);
}

export default Task5