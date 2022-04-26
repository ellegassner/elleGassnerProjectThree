// Module
import { useEffect } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";

// Config
import firebase from "./firebase";

// Styling
import "./App.css";


function App() {
  const database = getDatabase(firebase);
  const dbRef = ref(database);
  
  get(dbRef).then((snapshot) => {
    const data = snapshot.val();
    console.log("data", data)
  })


  return (
    <div className="App">
      <h1>Get Planted</h1>
      
    </div>
  );
}

export default App;
