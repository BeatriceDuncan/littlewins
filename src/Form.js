// import react from 'react'
// import App from './App.js'

const Form = ({
  textInput,
  handleChange,
  handleSubmit,
  dayId,
  win1,
  win2,
  win3,
}) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>my little wins today:</h2>

      <div className="dayInput">
        <label htmlFor="dayInput">today is: </label>
        <input
          placeholder="dayId input"
          type="text"
          id={dayId}
          onChange={handleChange}
          value={textInput}
        />
      </div>

      <div className="eachWin">
        <label htmlFor="win1">🏆</label>
        <input placeholder="win1 input" type="text" id={win1} />
      </div>

      <div className="eachWin">
        <label htmlFor="win2">🏆</label>
        <input placeholder="win2 input" type="text" id={win2} />
      </div>

      <div className="eachWin">
        <label htmlFor="win3">🏆</label>
        <input placeholder="win3 input" type="text" id={win3} />
      </div>

      <button>I did it!</button>
    </form>
  );
};

export default Form;
