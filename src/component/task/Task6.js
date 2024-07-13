// which display two imges using map function
import React from "react"
import img1 from './img1.png'
import img2 from './img2.png'

function Task6(){
    
   const ary=[img1,img2]
    return(<>
       {
        ary.map((value)=>{
            return <img src={value} height="200px" style={{margin:"20px 20px"}}></img>
        })
        }
    </>);
}

export default Task6