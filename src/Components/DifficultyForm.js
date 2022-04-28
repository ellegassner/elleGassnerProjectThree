import { useState } from "react";

const DifficultyForm = (props) => {
    const [userChoice, setUserChoice] = useState("placeholder");

    const handleUserChoice = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>
            <select
                name="difficulty" 
                id="difficulty"
                onChange={handleUserChoice}
                value={userChoice}
                >
                <option value="placeholder" >Difficulty</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="expert">expert</option>
            </select>
            <button>Show the Plants!</button>
        </form>
    )
}

export default DifficultyForm;