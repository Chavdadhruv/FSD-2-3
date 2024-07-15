// //IMP  // 1) useState 
// // Syntax
// // class component state full or function component state less
// // import React,{useState} from 'react'
// // const [currentState, functiontoupdatestate]=useState(initialState)
// import React, { useState } from "react";
// function Us1() {
//     const [count, setcount] = useState(0)
//     function handlecount() {
//         setcount(count + 1)
//     }
//     return (
//         <div>
//             <p>You have clicked {count} times </p>
//             <button onClick={handlecount}> Click </button>
//         </div>
//     )
// }
// export default Us1;

// // create a program to build react app having 
// buttons to inplement and decrement the number by 
// clicking respective buttons also increment the 
// number onlym is it is less then 10and decrement 
// the number only if it is greater then 0

// create a program to build create app having buttons to inc & dec the number by clicking reshape buttons
// also inc the num only if its<10 & dec the num only if its >0
// import React, { useState } from "react";
// function Incdec() {
//     const [count, setcount] = useState(0)
//     function IncCount() {
//         if (count < 10) {
//             setcount(count + 1)
//         }
//     }
//     function DecCount() {
//         if (count > 0) {
//             setcount(count - 1)
//         }
//     }

//     return (
//         <div>
//             <p>You have clicked {count} times </p>
//             <button onClick={IncCount}> Increment </button>
//             <button onClick={DecCount}> Decrement </button>
//         </div>
//     )
// }
// export default Incdec;

// write  a program to build react app having a button which change is background
//  color from red to WebGL2RenderingContextof a text by clicking it
// import React, { useState } from "react";
// function US3() {
//     const [style, setStyle] = useState('red')
//     function textChange() {
//         setStyle('green')
//     }

//     return (
//         <div>
//             <button onClick={textChange}> Change bgColor </button>
//             <h1 style={{backgroundColor:style}}>HELLO WORLD!</h1>
//         </div>
//     )
// }
// export default US3;

// task-4
// import img1 from './img1.jpg'
// import img2 from './img2.jpg'
// import React, { useState } from "react";
// function US3() {
//     const [image, setImage] = useState(img1)
//     function changeImage() {
//         setImage(img2)
//     }

//     return (
//         <div>
//             <button onClick={changeImage}> Change img </button>
//             <img src={image}></img>
//         </div>
//     )
// }
// export default US3;


// write a program to build react app having to input fields and display on the same page
// import React, { useState } from 'react';

// function InputFields() {
//     const [firstname, setfirstname] = useState('');
//     const [lastname, setlastname] = useState('');

//     const handleInputChange1 = (event) => {
//         setfirstname(event.target.value);
//     };
//     const handleInputChange2 = (event) => {
//         setlastname(event.target.value);
//     };

//     return (
//         <div>
//             <h1>Input Fields</h1>
//             <form>
//                 <label>Firstname:</label>
//                 <input
//                     type="text"
//                     value={firstname}
//                     onChange={handleInputChange1}
//                 />
//                 <br />
//                 <label>Lastname:</label>
//                 <input
//                     type="text"
//                     value={lastname}
//                     onChange={handleInputChange2}
//                 />
//             </form>
//             <h2>Entered Values:</h2>
//             <p>Firstname: {firstname}</p>
//             <p>Lastname: {lastname}</p>
//         </div>
//     );
// };

// export default InputFields;


// write a having button show by cliking a button it will deplay text and button 
// text will be change as hide text will be desapear and button tag will  be show again by 


import React, { useState } from 'react';
// function US3() {
//     const [style, setStyle] = useState('red')
//     function textChange() {
//         setStyle('green')
//     }

//     return (
//         <div>
//             <button onClick={textChange}> Change bgColor </button>
//             <h1 style={{backgroundColor:style}}>HELLO WORLD!</h1>
//         </div>
//     )
// }
function Button() {
    const [showText, setShowText] = useState(false);
    const [style, setStyle] = useState('red')
    const [buttonText, setButtonText] = useState('Show');

    function handleClick() {
        setShowText(!showText);
        setButtonText(showText ? 'Show' : 'Hide');
        setStyle('blue')
    };

    return (
        <div>
            <button style={{backgroundColor:style}} onClick={handleClick}>{buttonText}</button>
            {showText && <p>This is the text that will be shown or hidden</p>}
        </div>
    );
}

export default Button;