
const DayOfWins = (props) => {
  const {
    dayId,
    win1,
    win2,
    win3
  } = props.inputs
  return (
    <li className='eachDay'>
      <h3>{dayId}</h3>
      <ol>
        <li>{win1}</li>
        <li>{win2}</li>
        <li>{win3}</li>
      </ol>
    </li>
  );
};

export default DayOfWins;
