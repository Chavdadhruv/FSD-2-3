import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [option5, setOption5] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`The name you entered was: ${name}
              Option 1: ${option1}
              Option 2: ${option2}
              Option 3: ${option3}
              Option 4: ${option4}
              Option 5: ${option5}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /><br /><br />
            <select value={option1} onChange={(e) => setOption1(e.target.value)}>
                <option value="">Select Option 1</option>
                <option value="Option 1A">Option 1A</option>
                <option value="Option 1B">Option 1B</option>
                <option value="Option 1C">Option 1C</option>
                <option value="Option 1D">Option 2C</option>
                <option value="Option 1E">Option 2C</option>
            </select><br /><br />
            <select value={option2} onChange={(e) => setOption2(e.target.value)}>
                <option value="">Select Option 2</option>
                <option value="Option 2A">Option 2A</option>
                <option value="Option 2B">Option 2B</option>
                <option value="Option 2C">Option 2C</option>
                <option value="Option 2D">Option 2D</option>
                <option value="Option 2E">Option 2E</option>

            </select><br /><br />
            <select value={option3} onChange={(e) => setOption3(e.target.value)}>
                <option value="">Select Option 3</option>
                <option value="Option 3A">Option 3A</option>
                <option value="Option 3B">Option 3B</option>
                <option value="Option 3C">Option 3C</option>
                <option value="Option 3D">Option 3D</option>
                <option value="Option 3E">Option 3E</option>
            </select><br /><br />
            <select value={option4} onChange={(e) => setOption4(e.target.value)}>
                <option value="">Select Option 4</option>
                <option value="Option 4A">Option 4A</option>
                <option value="Option 4B">Option 4B</option>
                <option value="Option 4C">Option 4C</option>
                <option value="Option 4D">Option 4D</option>
                <option value="Option 4E">Option 4E</option>
            </select><br /><br />
            <select value={option5} onChange={(e) => setOption5(e.target.value)}>
                <option value="">Select Option 5</option>
                <option value="Option 5A">Option 5A</option>
                <option value="Option 5B">Option 5B</option>
                <option value="Option 5C">Option 5C</option>
                <option value="Option 5D">Option 5D</option>
                <option value="Option 5E">Option 5E</option>
            </select><br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}
export default MyForm;