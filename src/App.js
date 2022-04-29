// Modules
import { useEffect, useState  } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { Link, Routes, Route } from "react-router-dom";

// Components
import FindPlantsPage from "./Components/FindPlantsPage";
import DisplayPlants from "./Components/DisplayPlants";
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
  const [plantSize, setPlantSize] = useState([]);

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

  const getPlants = (e, plantDifficulty, plantSize) => {
    e.preventDefault();
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
    console.log("plant size filtered", plantSizeFiltered);
  }


  // const getPlantSizes = (e, plantSize) => {
  //   e.preventDefault();
  //   const copyOfFilteredPlants = [...plantsFiltered];
  //   console.log("copy", copyOfFilteredPlants)
  //   const plantSizeFiltered = copyOfFilteredPlants.filter((plant) => {
  //     // return plant.size === plantSize;
  //     // if (plant.size === true) {
  //     //   return plant.size === plantSize;
  //     // }
  //     console.log("plant", plant.size === plantSize);
  //   });
  //   // setPlantSize(plantSizeFiltered);
  //   console.log("plantsize filtered", plantSizeFiltered);
  // }

  return (
    <div className="App">
      <Link to="/homepage"></Link>

      <Routes>
        <Route path="/homepage" element={ <HomePage /> } />
        <Route path="/findplantspage" element={ <FindPlantsPage getPlants={getPlants} /> } />
        <Route path="/displayplants" element={ <DisplayPlants data={plantsFiltered} /> } />
        <Route path="/*" element={ <ErrorPage /> } />
      </Routes>

    </div>

  );
}

export default App;
