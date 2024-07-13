// import React from 'react'
// function Map1(){
//     const arr=[1,2,3,4,5,6]
//     return(<div>
//         <h1>example of mapping</h1>
//         {
//             arr.map((value)=>{
//                 return<h2>array element={value*5}</h2>
//             })
//         }

//     </div>)
// }
// export default Map1

// task-2

// import React from 'react'
// function Map1(){
//     const arr=['a','b','c','d']
//     return(<div>
//         <h1>example of mapping</h1>
//         {
//             arr.map((value)=>{
//                 return<h2>array element={value.toUpperCase()}</h2>
//             })
//         }

//     </div>)
// }
// export default Map1

// task-3


// create react app to pass product img,name,price as propertice from  1 component to other compo add 
// an array of obj with pick name and price prop of 2 product dispaly in brow using map method

// src/Map1.js
// import React from 'react';
// import Props1 from './Props1';

// const Map1 = ({ products }) => {
//     return (
//         <div className="product-list">
//             {products.map((product, index) => (
//                 <Props1 
//                     key={index} 
//                     name={product.name} 
//                     price={product.price} 
//                     image={product.image} 
//                 />
//             ))}
//         </div>
//     );
// };

// export default Map1;


import React from 'react';
function Map() {
    const students = [
        { id: 1, name: 'Tree' },
        { id: 2, name: 'Polygon' },
        { id: 3, name: 'abc' },
        { id: 4, name: 'def' }
    ]


    return (
        < ul >{
            students.map((student) => {
                return (
                    <li key={student.id.toString()}>{student.name}</li>)
            })}

        </ul>)
}
export default Map;
