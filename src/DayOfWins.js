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
        <li><div className="winIcon"></div>{win1}</li>
        <li><div className="winIcon"></div>{win2}</li>
        <li><div className="winIcon"></div>{win3}</li>
      </ol>
    </li>
  );
};

export default DayOfWins;
