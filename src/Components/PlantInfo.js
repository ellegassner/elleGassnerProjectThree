
import { Link } from "react-router-dom";

const PlantInfo = ({data}) => {
    console.log({data});
    return (
        <div className="AppPlantInfo wrapper">
            <h2 className="logo">
                <Link to="/">Get Planted</Link>
            </h2>
        {
            data.map((plants) => {
                return (
                    <div className="dynamicInfo" key={plants.id}>
                        <img
                            src={plants.picture}
                            alt={plants.altDescription}
                        />
                        <h4>{plants.commonName}</h4>
                        <h6>Scientific Name | {plants.scientificName}</h6>
                        <div className="plantSmallInfo">
                            <p>Difficulty Level | {plants.difficulty}</p>
                            <p>Size | {plants.size}</p>
                            <p>Sunlight Needed | {plants.sunlightNeeds}</p>
                            <p>{plants.plantCare}</p>
                        </div>
                        
                        
                    </div>
                )
            })
        }

        <p>
            <Link to="/findplantspage" className="btn">Find More Plants!</Link>
        </p> 
        <p className="footer"><a href="https://junocollege.com/">Created by Elle Gassner at Juno College of Technology</a></p>
        </div>
    )
    
}

export default PlantInfo;