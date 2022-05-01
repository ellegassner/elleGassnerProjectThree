// Modules
import { useEffect, useState  } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { Routes, Route } from "react-router-dom";

// Components
import FindPlantsPage from "./Components/FindPlantsPage";
import DisplayPlants from "./Components/DisplayPlants";
import PlantInfo from "./Components/PlantInfo";
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/ErrorPage";

// Config
import firebase from "./firebase";
import React from "react";

// Styling
import "./App.css";


const App = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [plantsFiltered, setPlantsFiltered] = useState([]);
  const [plantSizeFiltered, setPlantSizeFiltered] = useState([]);
  const [plantSunFiltered, setPlantSunFiltered] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const convertedArray = [];
      const data = response.val();
      const rootData = data.plants;
      
      for (let key in rootData) {
        convertedArray.push(rootData[key])
      }
      setAllPlants(convertedArray);
    })
  }, []);

  const getPlants = (e, plantDifficulty, plantSize, plantSun) => {
    e.preventDefault();

    console.log("testing", plantDifficulty)

    const copyOfAllPlants = [...allPlants];
    const plantsFiltered = copyOfAllPlants.filter((plant) => {
      return plant.difficulty === plantDifficulty;
    });
    setPlantsFiltered(plantsFiltered);
    console.log("plants filtered", plantsFiltered);


    const copyOfFilteredPlants = [...plantsFiltered];
    console.log("copy", copyOfFilteredPlants)
    const plantSizeFiltered = copyOfFilteredPlants.filter((plant) => {
      return plant.size === plantSize;
    });
    setPlantSizeFiltered(plantSizeFiltered);
    console.log("plant size filtered", plantSizeFiltered);


    const copyOfPlantSizeFiltered = [...plantSizeFiltered];
    console.log("copy sun", copyOfPlantSizeFiltered);
    const plantSunFiltered = copyOfPlantSizeFiltered.filter((plant) => {
      return plant.sunlightNeeds === plantSun;
    });
    setPlantSunFiltered(plantSunFiltered);
    console.log("plant sun", plantSunFiltered);
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/findplantspage" element={ <FindPlantsPage getPlants={getPlants} /> } />
        <Route path="/displayplants" element={<DisplayPlants data={plantSunFiltered} /> } />
        <Route path="/plantinfo" element={<PlantInfo data={plantSunFiltered} />} />
        <Route path="/*" element={ <ErrorPage /> } />
      </Routes>
      
      
    </div>

  );
}

export default App;
