// onSubmit
import React from "react";
function Event2(){
    function handleSubmit(e){
        alert("Form Submitted")
        // this is for not delete data when press ok
        e.preventDefault()
    }
    return(
      <center>
        <b>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" /><br/>
            <input type="text" name="email" placeholder="Email" /><br/>
            <input type="submit" value="Submit" /><br/>
        </form>
        </b>
        </center>
    )
}
export default Event2


