// import react from 'react'
// import App from './App.js'

// const DayOfWins = ({
//   dayId,
//   win1,
//   win2,
//   win3
// }) => {
//   return (
//     <li className='eachDay' key={dayId}>
//       <h3>{dayId}</h3>
//       <ol>
//         <li>{win1}</li>
//         <li>{win2}</li>
//         <li>{win3}</li>
//       </ol>
//     </li>
//   );
// };

//////////////////////////////////////////////////

// const DayOfWins = ({dataArray}) => {
//   return (
//     dataArray.map((eachDay, index) => {
//       return (
//         <li className={eachDay}>
//         <h3>{index}dayId input</h3>
//         <ol>
//           <li>win1 input</li>
//           <li>win2 input</li>
//           <li>win3 input</li>
//         </ol>
//       </li>
//       )
//     })
//   )
// };

const DayOfWins = () => {
  return (
    <li className="eachDay">
      <h3>dayId input</h3>
      <ol>
        <li>win1 input</li>
        <li>win2 input</li>
        <li>win3 input</li>
      </ol>
    </li>
  );
};

export default DayOfWins;
