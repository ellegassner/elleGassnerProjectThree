import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const FindPlantsPage = (props) => {
    const [userDifficultyChoice, setUserDifficultyChoice] = useState("placeholder");
    const [userSizeChoice, setUserSizeChoice] = useState("placeholder");
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();

    const handleUserDifficultyChoice = (e) => {
        setUserDifficultyChoice(e.target.value);
    }

    const handleUserSizeChoice = (e) => {
        setUserSizeChoice(e.target.value);
    }


    const handleSubmit = (e) => {
        props.getPlants(e, userDifficultyChoice, userSizeChoice);

        setRedirect(true);
        setData(e);
        console.log("user Diff", userDifficultyChoice);
        console.log("user Size", userSizeChoice);
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
                    <fieldset>
                        <select
                            name="difficulty"
                            id="difficulty"
                            onChange={handleUserDifficultyChoice}
                            value={userDifficultyChoice}
                        >
                            <option value="placeholder" disabled>Difficulty Level | Choose One:</option>
                            <option value="beginner">beginner</option>
                            <option value="intermediate">intermediate</option>
                            <option value="expert">expert</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <select
                            name="size"
                            id="size"
                            onChange={handleUserSizeChoice}
                            value={userSizeChoice}
                        >
                            <option value="placeholder" disabled>Size | Choose One:</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                    </fieldset>
                    
                    <button type="submit">Find Plants!</button>
                </form>
            </div>
        </div>
    )
}

export default FindPlantsPage;