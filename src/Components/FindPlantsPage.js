import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const FindPlantsPage = (props) => {
    const [userDifficultyChoice, setUserDifficultyChoice] = useState("placeholder");
    const [userSizeChoice, setUserSizeChoice] = useState("placeholder");
    const [userSunChoice, setUserSunChoice] = useState("placeholder");
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();



    const handleUserDifficultyChoice = (e) => {
        setUserDifficultyChoice(e.target.value);
    }

    const handleUserSizeChoice = (e) => {
        setUserSizeChoice(e.target.value);
    }

    const handleUserSunChoice = (e) => {
        setUserSunChoice(e.target.value);
    }


    const handleSubmit = (e) => {
        props.getPlants(e, userDifficultyChoice, userSizeChoice, userSunChoice);

        setRedirect(true);
        setData(e);
        console.log("user Diff", userDifficultyChoice);
        console.log("user Size", userSizeChoice);
        console.log("user Sun", userSunChoice);
    }
    if (redirect)
        return <Navigate to={{pathname: "/displayplants", data: { data }}} />

    return (
        <div className="AppFindPlantsPage">
            <div className="wrapper">
                <h2 className="logo">
                    <Link to="/">Get Planted</Link>
                </h2>
                <h5>Please select values from the form below to find the perfect plant for you!</h5>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="difficulty">Difficulty</label>
                        <select
                            name="difficulty"
                            id="difficulty"
                            onChange={handleUserDifficultyChoice}
                            value={userDifficultyChoice}
                        >
                            <option value="pick" disabled>pick one</option>
                            <option value="beginner">beginner</option>
                            <option value="intermediate">intermediate</option>
                            <option value="expert">expert</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="size">Size</label>
                        <select
                            name="size"
                            id="size"
                            onChange={handleUserSizeChoice}
                            value={userSizeChoice}
                        >
                            <option value="pick" disabled>pick one</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="sunlight">Sunlight</label>
                        <select
                            name="sunlight"
                            id="sunlight"
                            onChange={handleUserSunChoice}
                            value={userSunChoice}
                        >
                            <option value="pick" disabled>pick one</option>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="bright">bright</option>
                        </select>
                    </fieldset>
                    <button type="submit">Find Plants!</button>
                </form>
            </div>
        </div>
    )
}

export default FindPlantsPage;