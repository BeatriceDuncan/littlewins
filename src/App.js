import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import Header from "./Header";
// import Form from "./Form";
import DayOfWins from "./DayOfWins";
import AboutLittleWins from "./AboutLittleWins";
import Footer from "./Footer";

function App() {
  const [dayArray, setDayArray] = useState([]);
  const [dayInput, setDayInput] = useState("");

  useEffect(() => {
    const dbref = firebase.database().ref();

    dbref.on("value", (data) => {
      const objectOfDays = data.val();
      const dayState = [];
      for (let eachDay in objectOfDays) {
        dayState.push({
          uniqueKey: eachDay,
          dayId: objectOfDays[eachDay].dayId,
          win1: objectOfDays[eachDay].win1,
          win2: objectOfDays[eachDay].win2,
          win3: objectOfDays[eachDay].win3,
        });
      }
      setDayArray(dayState);
    });
  }, []);

  const handleChange = (event) => {
    setDayInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dbref = firebase.database().ref();
    const dayInput = {
      dayId: dayArray.dayId,
      win1: dayArray.win1,
      win2: dayArray.win2,
      win3: dayArray.win3,
    };
    console.log(dayInput);

    dbref.push(dayInput);
    setDayInput("");
  };

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h2>Today's Little Wins:</h2>

          <div className="dayInput">
            <label htmlFor="dayInput">Today is:</label>
            <input
              placeholder="Monday   /   Day 1   /   01.10.21"
              type="text"
              onChange={handleChange}
              value={dayArray.dayId}
            />
          </div>

          <div className="eachWin">
            {/* <label htmlFor="win1"></label> */}
            <div className="winIcon"></div>
            <input placeholder="win1 input" type="text" value={dayArray.win1} />
          </div>

          <div className="eachWin">
            {/* <label htmlFor="win2"></label> */}
            <div className="winIcon"></div>
            <input placeholder="win2 input" type="text" value={dayArray.win2} />
          </div>

          <div className="eachWin">
            {/* <label htmlFor="win3"></label> */}
            <div className="winIcon"></div>
            <input placeholder="win3 input" type="text" value={dayArray.win3} />
          </div>

          <button>I did it!</button>
        </form>

        <ol className="weekOfWins">
          {dayArray.map((day) => {
            return <DayOfWins key={day.uniqueKey} day={day}/>;
          })}
        </ol>

        <AboutLittleWins />
      </main>
      <Footer />
    </div>
  );
}

export default App;
