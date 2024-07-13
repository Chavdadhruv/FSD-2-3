// import logo from './logo.svg';
// import './App.css';
// import Image from "./Image.js"
// import example1 from "./ex1.js"
// import Props1 from './Props1.js';
import Map1 from './Map1.js';
import React from 'react';
import Props1 from './Props1.js'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import Main from './Main.js'

// import Event3 from './Event3.js';

// import Event2 from './Event2.js';

// import Event1 from './Event1.js'
 {/*  function App() {
return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
      <h1>
      Hello brother
      </h1>
      <ul>
        <li>ABC</li>
        <li>XYZ</li>
      </ul>
      <h2>hello i am H2 tag hwo can i help you</h2></div>
          <example1 />
   </div>
      
  );
}
          */}
{/* <Image/> */}



{/* day-2 Props 
*/}
// task-1

// function App(){
//   const xyz="computer"
//   return(<div>
//     <Props1 name={xyz} price="70000"/>
//     <Props1 name="Mobile" price="30000"/>

//   </div>)
// }
// export default App;

// task-2

// function App2(){
//  const mydetails={name:"abc",university:"LJU"}
//  return(<div>
//   <Props1 data={mydetails}></Props1>
//   </div>)
// }
// export default App2;

// task-1 onclick

// function App()
// {
//   return(<div>
//     <Event1/></div>)
// }
// export default App;

// task-2 onSubmit



// function App(){
//   return(
//     <div>
//       <Event2/>
//     </div>
//   )
//  }
//  export default App;


// task-3 onChange




// function App(){
//   return(
//     <div>
//       <Event3/>
//     </div>
//   )
//  }
//  export default App;

// task-4 map1

// function App(){
//   return(
//     <div>
//       <Map1/>
//     </div>
//   )
// }
// export default App;


// task-5 props,map,app
// src/App.js

// const App = () => {
//     const products = [
//         {
//             name: 'Product 1',
//             price: 29.99,
//             image: 'images.jpg',
//         },
//         {
//             name: 'Product 2',
//             price: 49.99,
//             image: 'images.jpg',
//         },
//     ];

//     return (
//         <div className="App">
//             <h1>Product List</h1>
//             <Map1 products={products} />
//         </div>
//     );
// };

// export default App;

// or


// function App() {
//   const products = [
//     { id: 1, image: img1, name: 'Product 1', price: 10.99 },
//     { id: 2, image: img2, name: 'Product 2', price: 9.99 },
//   ]
//   return (
//     <div>
//       <h1>Products</h1>
//       {products.map((product) => (
//         <Props1 id={product.id} image={product.image} name={product.name} price={product.price} />
//       ))}
//     </div>
//   );
// };
// export default App;

//app.js
// import Map from './list&keys.js'
// function App() {
//   // const xyz = "computer"
//   // const mydetails = { name: "abc", university: "LJU" }
//   return (
//     <div className="App">
      
//       <Map />
//     </div>
//   );
// }
// export default App;



// import Filter from './Filter.js'
// function App() {
//   return ( <Filter />   );
// }export default App;
  

  
function App() {
  return ( <Main/>   );
}export default App;
  
