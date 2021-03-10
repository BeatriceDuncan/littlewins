import firebase from "./firebase";

const DayOfWins = (props) => {
  const {
    dayId,
    win1,
    win2,
    win3
  } = props.inputs

  const handleClick = (uniqueKey) => {
    const dbref = firebase.database().ref();
    dbref.child(uniqueKey).remove();
  }
  
  return (
    <li className='eachDay'>
      <span className="deleteWin" onClick={() => {handleClick(props.inputs.uniqueKey)}}>X</span>
      <h3>{dayId}</h3>
      <ol>
        <li><div className="winIcon"></div>{win1}</li>
        <li><div className="winIcon"></div>{win2}</li>
        <li><div className="winIcon"></div>{win3}</li>
      </ol>
    </li>
  );
};

export default DayOfWins;
