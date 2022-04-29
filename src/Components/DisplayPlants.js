import { Link } from "react-router-dom";

const DisplayPlants = ({data}) => {
    console.log(data);
    return (
        <div className="AppDisplayPage wrapper">
            <h2 className="logo">
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
                            <p>Difficulty Level: {plants.difficulty}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayPlants;