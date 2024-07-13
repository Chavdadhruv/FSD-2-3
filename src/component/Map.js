// wrt to display value in console while changing it in textbox.
import React from "react"

function Map(){
    
   const ary=[1,11,111,1111,11111]
    return(<>
       {
        ary.map((value=>{
            return <h2>{value}</h2>
        }))
        }
    </>);
}

export default Map
