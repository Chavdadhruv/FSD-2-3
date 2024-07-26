// to create a digital clock running continuesly using use effect
// import React, { startTransition } from 'react';

// import { useEffect, useState} from "react";
// function UE1(){
//     const [count1, setCount1] = useState(0)
//     const [count2, setCount2] = useState(0)
//     useEffect(() => {alert("clicked")}, [count1])

//     function handleChange1(){
//         setCount1(count1 + 1)
//     }
//     function handleChange2() {
//         setCount2(count2 + 1)
//     }

//     return(
//         <>
//         <button onClick={handleChange1}>Button1{count1}</button>
//         <button onClick={handleChange2}>Button2{count2}</button> 
//         </>
//     )
// }
// export default UE1


// import { useEffect, useState } from "react";
// function UE1() {
//     const [time, setTime] = useState(new Date())
    
//     useEffect(()=>{
//         setInterval(()=>{
//             setTime(new Date())},1000)},[])

//     return (
//         <h1>
//             <h1>{time.toLocaleTimeString()}</h1>
//             Hour :- {time.getHours()} : Min :- {time.getMinutes()} : Sec :- {time.getSeconds()}
//         </h1>
//     )
// }
// export default UE1

// import { useState } from "react";
// function MyForm() {
//     const [name, setName] = useState("")
//     return (
//         <form>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
//             <h1>Entered Value: {name}</h1>
//         </form>
//     )
// }
// export default MyForm


import { useState } from "react";
function MyForm() {

    function handleSubmit(event) {
        event.preventDefault();
        alert(`The name you enter was : ${name}`)
    }
    const [name, setName] = useState("")
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        </form>
    )
}
export default MyForm
