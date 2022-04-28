// Module
import { useEffect, useState  } from "react";
import React, { useRef } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";

// Components
import DifficultyForm from "./Components/DifficultyForm";

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
      console.log(convertedArray);
    })
  }, [])

  

  return (
    <div className="App">
      <div className="AppHomePage">
        <h1>Get Planted</h1>
        <h3>Life's better with a lil bit of green</h3>
        <button onClick={() => scrollTo.current.scrollIntoView()}>Find Plants!</button>  
      </div>
      <div ref={scrollTo} className="AppUserPage">
        <h2>Get Planted</h2>
        <DifficultyForm />

        {
          allPlants.map((plants) => {
            return (
              <div key={plants.id}>
                <img src={plants.picture} alt={plants.altDescription} />
              </div>
            )
          })
        }
      </div>
    </div>

  );
}

export default App;
