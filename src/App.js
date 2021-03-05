import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const dbref = firebase.database().ref();
    dbref.on("value", (data) => {
      const userData = data.val();
      const userState = [];
      for (let userKey in userData) {
        userState.push({
          userIdKey: userKey,
      });
    }
    setUserArray(userState);
    console.log(data.val());
    });
  }, []);

  return (
    <div className="App">
      {
        userArray.map((user) => {
          return (
            <div key={user.userIdKey}>
              <h2>My Little Wins Today:</h2>
              <form action="">
                <label htmlFor="littlewin1">🏆</label>
                <input type="text" id="littlewin1"/>
                <label htmlFor="littlewin2">🏆</label>
                <input type="text" id="littlewin2"/>
                <label htmlFor="littlewin3">🏆</label>
                <input type="text" id="littlewin3"/>
                <button>I did it!</button>
              </form>
            </div>
          );
        })}
    </div>
  );
}


export default App;