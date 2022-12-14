import Dice from "./diceCard";

function Roll(props) {
  const rolls = props.throws;

  const hasA10 = rolls.includes(10);
  if (hasA10) {
    rolls.splice(rolls.indexOf(10), 1, 0);
  }

  let diceDisplay = "";
  if (rolls.length < 2) {
    diceDisplay = <Dice result={rolls[0]} key="1" />;
  } else {
    diceDisplay = (
      <span>
        <Dice result={rolls[0]} key="1" />
        <Dice result={rolls[1]} second key="2" />
      </span>
    );
  }

  return (
    <span>
      {diceDisplay}+ {props.mod}&nbsp; = {props.result}
    </span>
  );
}

export default Roll;
