// Module
import { useEffect, useState  } from "react";
import React, { useRef } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { Link, Routes, Route } from "react-router-dom";

// Components
import FindPlantsPage from "./Components/DifficultyForm";
import DisplayPlants from "./Components/DisplayPlants";
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/ErrorPage";

// Config
import firebase from "./firebase";

// Styling
import "./App.css";


const App = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [plantsFiltered, setPlantsFiltered] = useState([]);

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

  const getPlants = (e, plantDifficulty) => {
    e.preventDefault();
    const copyOfAllPlants = [...allPlants];
    const plantsFiltered = copyOfAllPlants.filter((plant) => {
      return plant.difficulty === plantDifficulty;
      
    });
    setPlantsFiltered(plantsFiltered);
    console.log("getting plants", plantsFiltered);
  }

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
