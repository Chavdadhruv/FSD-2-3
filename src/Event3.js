// onChange event
import React from 'react'
function Ev(){
    function handleChange(event){
        console.log(event.target.values)
    }        
    return(<input type="text" name="uname" onChange={handleChange}/>)

}
export default Ev