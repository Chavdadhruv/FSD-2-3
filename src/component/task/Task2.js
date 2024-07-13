// wrt react code to print car brand and model which are passed as props using json

import React from "react"
const Task2=(props)=>{
    return(<>
        <h3>Brand: {props.car.brand}</h3>
        <h3>Model: {props.car.model}</h3>
    </>);
}
export default Task2

 