const Win = (props) => {
  return (
    <div className="eachWin">
    <label className="winIcon" htmlFor={props.name}></label>
    <input
      placeholder={props.placeholder}
      type="text"
      value={props.inputs}
      onChange={props.handleChange}
      name={props.name}
    />
  </div>
  )
}

export default Win