// create a react program to generate calculator there are 2 input field and 4 button for
//  add,mul,sub,div ans should be display on the same page using huge state
import React, { useState } from 'react';

// function InputFields() {
//     const [value1, setvalue1] = useState('');
//     const [value2, setvalue2] = useState(''); 
//     const [result, setresult] = useState('');


//     const handleInputChange1 = (event) => {
//         setvalue1(parseInt(event.target.value));
//     };
//     const handleInputChange2 = (event) => {
//         setvalue2(parseInt(event.target.value));
//     };
    
//     function add(){
//         setresult(value1+value2)
//     }

//     function sub() {
//         setresult(value1 - value2)
//     }

//     function mul() {
//         setresult(value1 * value2)
//     }

//     function div() {
//         if(value2!==0){
//             setresult(value1 / value2)
//         }
//         else{
//             alert("Can't divide by zero")
//         }
        
//     }

//     return (
//         <div>
//             <h1>Input Fields :- </h1>
//             <form>
//                 <label>value1 :- </label>
//                 <input
//                     type="number"
//                     value={value1}
//                     onChange={handleInputChange1}
//                 />
//                 <br />
//                 <label>value2 :- </label>
//                 <input
//                     type="number"
//                     value={value2}
//                     onChange={handleInputChange2}
//                 />
//             </form>
//             <button onClick={add}>Add</button>
//             <button onClick={sub}>Sub</button>
//             <button onClick={mul}>Mul</button>
//             <button onClick={div}>Div</button>
//             <h1>Result : {result}</h1>
//         </div>
//     );
// };
// export default InputFields;


// fetch data from this 
// function US(){
//     const[data,setData]=useState({brand:"ford",color:"red",model:"mustang",year:2005})
//     function handleChange(){
//         setData({brand:'hyndui',color:'gray',model:'Creta',year:2024})
//     }
//     return(
//         <div><h1>my{data.brand}</h1>
//         <button onClick={handleChange}>change kar de bhai</button></div>
//     )
// }
// export default US;

// // write  a program to build react app 1)add 3 buttons 
// change Text,change color,and hide/show 2)and heading lj university in gray color initialy also add 
// react js hooks text in h2 tag 3)by clicking o change text button the text should be change welcome student and wise version 
// 4)by clicking on change color button color of text should be blue this color should be change on double clicking of button 
// 5)while clicking on it the button text should be change to show and text react js host will not be show




// function App() {
//     // State for the heading text
//     const [headingText, setHeadingText] = useState('lj university');
//     // State for the text color
//     const [textColor, setTextColor] = useState('gray');
//     // State for the visibility of h2 text
//     const [isVisible, setIsVisible] = useState(true);
//     // State for the button text
//     const [buttonText, setButtonText] = useState('Hide');

//     // Handler for changing the heading text
//     const changeText = () => {
//         setHeadingText('Welcome Student');
//     };

//     // Handler for changing the text color
//     const changeColor = () => {
//         if (textColor === 'gray') {
//             setTextColor('blue');
//             setButtonText('Show');
//         } else {
//             setTextColor('gray');
//             setButtonText('Hide');
//         }
//     };

//     // Handler for toggling the visibility of h2 text
//     const toggleVisibility = () => {
//         setIsVisible(!isVisible);
//     };

//     return (
//         <div>
//             <h1 style={{ color: textColor }}>{headingText}</h1>
//             <button onClick={changeText}>Change Text</button>
//             <button onDoubleClick={changeColor}>{textColor === 'gray' ? 'Change Color' : 'Revert Color'}</button>
//             <button onClick={toggleVisibility}>{buttonText}</button>
//             {isVisible && <h2>React JS Hooks</h2>}
//         </div>
//     );
// }

// export default App;

//  < !--wap to build react app to perform task below:
// 1.add 3 btns change text change color and height / s
// 2.and hiding lju in red color initially also add react js hooks.txt in h2 tag.
//   3.by clicking on change txt btn the txt should be change to welcome student and wise versa.
//   4.by clicking on change color btn of txt should be blue this color change on double clicking of btn.
//   5.initially btn should be change  while clickin-- >
// Import React and hooks
// import React, { useState } from 'react';

// function Task() {

//     const [text, setText] = useState('LJ UNIVERSITY');
//     const [color, setColor] = useState('red');
//     const [hidetext, setHidetext] = useState('React JS Hooks');
//     const [button, setButtontext] = useState("Hide");

//     function handleTextClick() {
//         if (text === "LJ UNIVERSITY") {
//             setText("Welcome Student")
//         }
//         else {
//             setText("LJ UNIVERSITY")
//         }
//     }
//     function handleColorDoubleClick() {
//         if (color === "red") {
//             setColor("blue")
//         }
//         else {
//             setColor("red")
//         }
//     }

//     function handlehideClick() {
//         if (button === "Hide") {
//             setButtontext("Show")
//             setHidetext(" ")
//         }
//         else {
//             setButtontext("Hide")
//             setHidetext("React JS Hooks")
//         }
//     }

//     return (
//         <div>
//             <button onClick={handleTextClick}>Change Text</button>
//             <button onDoubleClick={handleColorDoubleClick}>Change Color</button>
//             <button onClick={handlehideClick}>{button}</button>
//             <h2 style={{ backgroundColor: color }}>{text}</h2>
//             <h2>{hidetext}</h2>
//         </div>
//     );
// };


// export default Task;



// task-4
// wap to build react app for task to do list and 1 think fill and btn by clicking on btn display the
// enter task on the same page also add delete btn in which each added task to delete the task.  



// import React, { useState } from 'react';

// function ToDoList() {
//     const [tasks, setTasks] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     // Handler to add a new task
//     const handleAddTask = () => {
//         if (inputValue.trim() !== '') {
//             setTasks([...tasks, inputValue]);
//             setInputValue(''); // Clear the input field
//         }
//     };

//     // Handler to delete a task
//     const handleDeleteTask = (index) => {
//         setTasks(tasks.filter((_, i) => i !== index));
//     };

//     return (
//         <div className="todo-container">
//             <h1>To-Do List</h1>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Enter your task"
//             />
//             <button onClick={handleAddTask}>Add Task</button>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>
//                         {task}
//                         <button onClick={() => handleDeleteTask(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ToDoList;


function ToDoList() {
    // State to store the list of tasks and other state variables
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [taskPriority, setTaskPriority] = useState('medium');
    const [filter, setFilter] = useState('all'); // Filter state

    // Handler to add or update a task
    const handleAddOrUpdateTask = () => {
        if (inputValue.trim() === '') return;

        const updatedTasks = [...tasks];
        if (editIndex !== null) {
            // Update existing task
            updatedTasks[editIndex] = { text: inputValue, completed: false, priority: taskPriority };
            setEditIndex(null);
        } else {
            // Add new task
            updatedTasks.push({ text: inputValue, completed: false, priority: taskPriority });
        }

        setTasks(updatedTasks);
        setInputValue('');
        setTaskPriority('medium'); // Reset priority
    };

    // Handler to delete a task
    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Handler to mark a task as completed
    const handleToggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    // Handler to edit a task
    const handleEditTask = (index) => {
        setInputValue(tasks[index].text);
        setEditIndex(index);
        setTaskPriority(tasks[index].priority);
    };

    // Handler to clear all tasks
    const handleClearAll = () => {
        setTasks([]);
    };

    // Handler to change task priority
    const handlePriorityChange = (e) => {
        setTaskPriority(e.target.value);
    };

    // Handler to filter tasks
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true; // For 'all'
    });

    return (
        <div className="container mt-5">
            <h1 className="text-center">To-Do List</h1>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your task"
                />
            </div>
            <div className="form-group">
                <select
                    className="form-control"
                    value={taskPriority}
                    onChange={handlePriorityChange}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>
            <button
                className="btn btn-primary mr-2"
                onClick={handleAddOrUpdateTask}
            >
                {editIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
            <button
                className="btn btn-danger"
                onClick={handleClearAll}
            >
                Clear All
            </button>
            <div className="mt-3">
                <label className="mr-2">Filter:</label>
                <select
                    className="form-control d-inline-block w-auto"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <ul className="list-group mt-3">
                {filteredTasks.map((task, index) => (
                    <li
                        key={index}
                        className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-light text-decoration-line-through' : ''}`}
                    >
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(index)}
                                className="mr-2"
                            />
                            {task.text} (Priority: {task.priority})
                        </div>
                        <div>
                            <button
                                className="btn btn-warning btn-sm mr-2"
                                onClick={() => handleEditTask(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteTask(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
