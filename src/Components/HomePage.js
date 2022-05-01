import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="AppHomePage">
            <div className="wrapper">
                <h1>Get Planted</h1>
                <h3>Life's better with a lil bit of green</h3>
                <p>
                    <Link to="/findplantspage" className="btn">Find Plants!</Link>
                </p> 
                <p className="footer"><a href="https://junocollege.com/">Created by Elle Gassner at Juno College of Technology</a></p>
            </div>
        </div>
    )
}

export default HomePage;

