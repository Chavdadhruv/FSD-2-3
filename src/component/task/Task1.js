// create a file name task1.js and import this component in app.js file task1.js contain 3 
// images which are horizontaly align 
import React from "react"
function Task1(){
    const img1="img1.png"
    const img2="img2.png"
    const img3="img3.png"
    const desp="This is a beautiful art image"
    return(<>
    <table>
        <th>Art Images
            <td><img src={img1} alt={desp}></img></td>
            <td><img src={img2} alt={desp}></img></td>
            <td><img src={img3} alt={desp}></img></td>
        </th>
    </table>
    </>);
}

export default Task1