import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import DayOfWins from "./DayOfWins";
import AboutLittleWins from "./AboutLittleWins";
import Footer from "./Footer";

function App() {
  const [dayArray, setDayArray] = useState([]);
  const [eachDay, setEachDay] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const dbref = firebase.database().ref();

    dbref.on("value", (data) => {
      const arrayOfDays = data.val();
      const arrayOfDaysState = [];
      const eachDayState = [];

      // console.log(arrayOfDays)
      // console.log(arrayOfDaysState)

      for (let eachDay in arrayOfDays) {
        arrayOfDaysState.push({
          uniqueKey: eachDay,
          dayId: arrayOfDays[eachDay],
        });
      }

      for (let winIndex in eachDay) {
        eachDayState.push({
          win: eachDay[winIndex],
        });
      }

      setDayArray(arrayOfDaysState);
      setEachDay(eachDayState);
    });
  }, []);

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dbref = firebase.database().ref();
    dbref.push(textInput);
    setTextInput("");
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Form />

        <ol className="weekOfWins">
          {dayArray.map(() => {
            return <DayOfWins />;
          })}
        </ol>

        <AboutLittleWins />
      </main>
      <Footer />
    </div>
  );
}

export default App;
