import { useState } from "react";

const DifficultyForm = (props) => {
    const [userChoice, setUserChoice] = useState("placeholder");

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    return (
        <form onSubmit={(e) => props.getPlants(e, userChoice)}>
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
            <button type="submit">Show the Plants!</button>
        </form>
    )
}

export default DifficultyForm;