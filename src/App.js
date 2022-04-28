// Module
import { useEffect, useState  } from "react";
import React, { useRef } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";

// Components
import DifficultyForm from "./Components/DifficultyForm";
import DisplayPlants from "./Components/DisplayPlants";

// Config
import firebase from "./firebase";

// Styling
import "./App.css";


const App = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [plantsFiltered, setPlantsFiltered] = useState([]);
  const scrollTo = useRef();

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
    // console.log("getting plants", plantDifficulty);
    const copyOfAllPlants = [...allPlants];
    const plantsFiltered = copyOfAllPlants.filter((plant) => {
      return plant.difficulty === plantDifficulty;
    });
    setPlantsFiltered(plantsFiltered);
  }

  return (
    <div className="App">
      <div className="AppHomePage">
        <h1>Get Planted</h1>
        <h3>Life's better with a lil bit of green</h3>
        <button onClick={() => scrollTo.current.scrollIntoView()}>Find Plants!</button>  
      </div>
      <div ref={scrollTo} className="AppUserPage">
        <h2>Get Planted</h2>
        <DifficultyForm getPlants={getPlants}/>
        <DisplayPlants data={plantsFiltered} />
      </div>
    </div>

  );
}

export default App;
