// import React from 'react'
// function Props1(props){
//     return(<div><h1>{props.name}:{props.price}</h1></div>)
// }
// export default Props1

// task-2

// import React from 'react'
// function Props1(props){
//     return(<div>
//     <h2>my name is {props.data.name}.i am student of{props.data.university}</h2>
  
//     </div>)
//   }
//   export default Props1;

// task-3

// src/Props1.js
import React from 'react';
const Product = ({ id, image, name, price }) => {
    return (
        <div>
            <h2>ID: {id}</h2>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};
export default Product;
