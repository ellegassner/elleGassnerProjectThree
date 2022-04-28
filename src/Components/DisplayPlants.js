const DisplayPlants = ({data}) => {
    return (
        <div>
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