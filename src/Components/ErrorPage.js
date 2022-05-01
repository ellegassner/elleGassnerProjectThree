import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops! There's nothing here!</h2>
            <h3>
                <Link to="/"></Link>
            </h3>
        </div>
    )
}

export default ErrorPage;