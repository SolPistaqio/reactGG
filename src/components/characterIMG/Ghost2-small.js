import { Icon } from "@iconify/react";

function Ghost2Small(props) {
  return (
    <div>
      <Icon
        icon="icon-park-solid:degree-hat"
        color={props.color1}
        height="50px"
        style={{
          display: "block",
          marginLeft: "8px",
          marginBottom: "-25px",
          position: "relative",
          zIndex: 2,
        }}
      />
      <Icon
        icon="mdi:ghost"
        color={props.color2}
        height="65px"
        style={{ display: "block", position: "relative", zIndex: 1 }}
      />
    </div>
  );
}

export default Ghost2Small;
