import { Link } from "react-router-dom";

const DisplayPlants = ({data}) => {
    return (
        <div>
            <h2>
                <Link to="/homepage">Get Planted</Link>
            </h2>
            {
                data.map((plants) => {
                    return (
                        <div key={plants.id}>
                            <img 
                                src={plants.picture} 
                                alt={plants.altDescription}
                            />
                            <h4>{plants.commonName}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayPlants;