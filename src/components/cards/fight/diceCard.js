function Dice(props) {
  return (
    <div className={props.second ? "dice2" : "dice"}>
      <div className="result">{props.result}</div>
    </div>
  );
}

export default Dice;
