import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const FindPlantsPage = (props) => {
    const [userChoice, setUserChoice] = useState("");

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    const handleSubmit = (e) => {
        props.getPlants(e, userChoice);
        console.log("userChoice", userChoice)
    }

    return (
        <div className="AppUserPage">
            <h2>
                <Link to="/homepage">Get Planted</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <select
                    name="difficulty"
                    id="difficulty"
                    onChange={handleUserChoice}
                    value={userChoice}
                >
                    {/* <option value="placeholder" >Difficulty</option> */}
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="expert">expert</option>
                </select>
                <button type="submit">Find Plants!</button>
                <Link to="/displayplants">Show them!</Link>
                
                
            
            </form>
        </div>
    )
}

export default FindPlantsPage;