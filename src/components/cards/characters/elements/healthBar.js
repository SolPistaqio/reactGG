import { Icon } from "@iconify/react";

function HealthBar(props) {
  const healthBar = [];

  for (let i = 0; i < props.currentHealth; i++) {
    healthBar.push("heart-filled");
  }
  if (props.currentHealth < props.maxHealth) {
    const numOfHearts = props.maxHealth - props.currentHealth;
    for (let i = 0; i < numOfHearts; i++) {
      healthBar.push("heart-outlined");
    }
  }
  return (
    <div>
      {healthBar.map((heart, index) => (
        <Icon
          icon={"ant-design:" + heart}
          height={props.big ? "50px" : "25px"}
          color="red"
          key={index}
        />
      ))}
    </div>
  );
}

export default HealthBar;
