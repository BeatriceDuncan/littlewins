import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import Header from "./Header";
import DayOfWins from "./DayOfWins";
import AboutLittleWins from "./AboutLittleWins";
import Footer from "./Footer";
import Win from "./Win";

function App() {
  const [dayArray, setDayArray] = useState([]);
  const [inputs, setInputs] = useState({
    dayInput: "",
    win1input: "",
    win2input: "",
    win3input: "",
  });

  useEffect(() => {
    const dbref = firebase.database().ref();

    dbref.on("value", (data) => {
      const objectOfDays = data.val();
      const arrayOfDays = [];
      for (let eachDay in objectOfDays) {
        arrayOfDays.push({
          uniqueKey: eachDay,
          dayId: objectOfDays[eachDay].dayInput,
          win1: objectOfDays[eachDay].win1input,
          win2: objectOfDays[eachDay].win2input,
          win3: objectOfDays[eachDay].win3input,
        });
      }
      setDayArray(arrayOfDays);
    });
  }, []);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dbref = firebase.database().ref();
    dbref.push(inputs);
    setInputs({
      dayInput: "",
      win1input: "",
      win2input: "",
      win3input: "",
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <form action="" onSubmit={handleSubmit} className="wrapper">
          <h2>today's little wins:</h2>
          <div className="dayInput">
            <label htmlFor="dayInput">today is:</label>
            <input
              placeholder="Monday   /   Day 1   /   01.10.21" type="text" onChange={handleChange} value={inputs.dayInput} name="dayInput"/>
          </div>
          <Win placeholder={"Today I..."} name={"win1input"} inputs={inputs.win1input} handleChange={handleChange}/>
          <Win placeholder={"and..."} name={"win2input"} inputs={inputs.win2input} handleChange={handleChange}/>
          <Win placeholder={"and..."} name={"win3input"} inputs={inputs.win3input} handleChange={handleChange}/>
          <button>I did it!</button>
        </form>
        <div className="weekOfWins wrapper">
          <h2>all my little wins</h2>
          <ol className="weekOfWinsOl">
            {dayArray.map((day) => {
              return <DayOfWins key={day.uniqueKey} inputs={day}/>;
            })}
          </ol>
        </div>
        <AboutLittleWins />
      </main>
      <Footer />
    </div>
  );
}

export default App;
