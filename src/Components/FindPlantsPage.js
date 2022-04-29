import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const FindPlantsPage = (props) => {
    const [userChoice, setUserChoice] = useState("placeholder");
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    const handleSubmit = (e) => {
        props.getPlants(e, userChoice);
        setRedirect(true);
        setData(e);
        console.log("userChoice", userChoice)
    }
    if (redirect)
        return <Navigate to={{pathname: "/displayplants", data: { data }}} />

    return (
        <div className="AppFindPlantsPage">
            <div className="wrapper">
                <h2 className="logo">
                    <Link to="/homepage">Get Planted</Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <select
                        name="difficulty"
                        id="difficulty"
                        onChange={handleUserChoice}
                        value={userChoice}
                    >
                        <option value="placeholder" >Difficulty Level | Choose One:</option>
                        <option value="beginner">beginner</option>
                        <option value="intermediate">intermediate</option>
                        <option value="expert">expert</option>
                    </select>
                    <button type="submit">Find Plants!</button>
                </form>
            </div>
        </div>
    )
}

export default FindPlantsPage;