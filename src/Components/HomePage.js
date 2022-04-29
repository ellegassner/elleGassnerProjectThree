import { Link, Routes, Route } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="AppHomePage">
            <div className="wrapper">
                <h1>Get Planted</h1>
                <h3>Life's better with a lil bit of green</h3>
                <button>
                    <Link to="/findplantspage">Find Plants!</Link>
                </button>
            </div>
        </div>
    )
}

export default HomePage;

