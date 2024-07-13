// wrt a code to display 4 img with its price and name .using props.. 
import React from "react"
const Task3=(props)=>{
    return(<>
    
        <h3>{props.i1.name}</h3>
        <h3>{props.i1.img}</h3>
        <h3>{props.i1.price}</h3>
 

    
        {/* <h3>name:{props.i2.name}</h3>
        <h3> {props.i2.img}</h3>
        <h3>price:{props.i2.price}</h3>
    

    
        <h3>name:{props.i3.name}</h3>
        <h3> {props.i3.img}</h3>
        <h3>price:{props.i3.price}</h3>
    

    
        <h3>name:{props.i4.name}</h3>
        <h3> {props.i4.img}</h3>
        <h3>price:{props.i4.price}</h3> */}
    
    </>);
}
export default Task3

// app.js file images
// const i1={name:"Nafea Faa Ipoipo (When Will You Marry?)",img:<img src={I1}></img>,price:"$270"}
// const i2={name:"The Card Players",img:<img src={I2}></img>,price:"$339"}
// const i3={name:"Interchange",img:<img src={I3}></img>,price:"$386"}
// const i4={name:"Salvator Mundi",img:<img src={I4}></img>,price:"$559"}

// need to import all images in app.js