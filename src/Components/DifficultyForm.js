import { useState } from "react";

const DifficultyForm = () => {
    const [userChoice, setUserChoice] = useState("placeholder");
    // console.log("props", props)

    const handleUserChoice = (event) => {
        setUserChoice(event.target.value);
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
            <button type="submit">Show the Plants!</button>
        </form>
    )
}

export default DifficultyForm;