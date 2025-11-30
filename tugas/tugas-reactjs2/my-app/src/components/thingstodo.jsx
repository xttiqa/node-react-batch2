function ThingsToDo(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ThingsToDo;
