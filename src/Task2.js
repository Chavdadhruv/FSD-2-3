// // create a react form for selecting any of the pizza size using 
// // radio button display selected size on the same page 
// import React, { useState } from 'react';

// function PizzaSizeForm() {
//     const [selectedSize, setSelectedSize] = useState('');

//     const handleSizeChange = (event) => {
//         setSelectedSize(event.target.value);
//     };

//     return (
//         <div>
//             <h2>Pizza Size Form</h2>
//             <form>
//                 <label>
//                     <input
//                         type="radio"
//                         name="size"
//                         value="small"
//                         checked={selectedSize === 'small'}
//                         onChange={handleSizeChange}
//                     />
//                     Small
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="size"
//                         value="medium"
//                         checked={selectedSize === 'medium'}
//                         onChange={handleSizeChange}
//                     />
//                     Medium
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="size"
//                         value="large"
//                         checked={selectedSize === 'large'}
//                         onChange={handleSizeChange}
//                     />
//                     Large
//                 </label>
//             </form>
//             <p>Selected size: {selectedSize}</p>
//         </div>
//     );
// }

// export default PizzaSizeForm;

// first name last name 

// import React, { useState } from 'react';

// function MyForm() {
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [gender, setGender] = useState('');
//     const [city, setCity] = useState('');
//     const [message, setMessage] = useState('');

//     const handleFirstnameChange = (event) => {
//         setFirstname(event.target.value);
//     };

//     const handleLastnameChange = (event) => {
//         setLastname(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleGenderChange = (event) => {
//         setGender(event.target.value);
//     };

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     };

//     const handleMessageChange = (event) => {
//         setMessage(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Firstname: ${firstname}\nLastname: ${lastname}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender}\nCity: ${city}\nMessage: ${message}`);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Firstname:
//                 <input type="text" value={firstname} onChange={handleFirstnameChange} />
//             </label>
//             <br />
//             <label>
//                 Lastname:
//                 <input type="text" value={lastname} onChange={handleLastnameChange} />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={handleEmailChange} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>
//             <br />
//             <label>
//                 Gender:
//                 <input type="radio" name="gender" value="male" onChange={handleGenderChange} /> Male
//                 <input type="radio" name="gender" value="female" onChange={handleGenderChange} /> Female
//             </label>
//             <br />
//             <label>
//                 City:
//                 <select value={city} onChange={handleCityChange}>
//                     <option value="">Select a city</option>
//                     <option value="New York">New York</option>
//                     <option value="Los Angeles">Los Angeles</option>
//                     <option value="Chicago">Chicago</option>
//                 </select>
//             </label>
//             <br />
//             <label>
//                 Message:
//                 <textarea value={message} onChange={handleMessageChange} />
//             </label>
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
//     );
// }

// export default MyForm;


// create a react app with following email,password and confirm password minimum length of password should be 8 and max should be 10
// password and conform password m must be same they both are same dispaly email id in alert box   


// crate app with following fills emails , pas and conform pas min length of pas should be 8 max length should be 10 pas and conform pas must be same
// if they both are same that display email id in alert box 

import React, { useState } from "react";

function App1() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 8 || password.length > 10) {
            setError('Password length should be between 8 and 10 characters');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            alert(email);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default App1;