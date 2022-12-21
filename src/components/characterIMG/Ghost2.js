import { Icon } from "@iconify/react";

function Ghost2(props) {
  return (
    <div>
      <Icon
        icon="icon-park-solid:degree-hat"
        color={props.color1}
        height="150px"
        style={{
          display: "block",
          marginLeft: "26px",
          marginBottom: "-80px",
          position: "relative",
          zIndex: 2,
        }}
      />
      <Icon
        icon="mdi:ghost"
        color={props.color2}
        height="200px"
        style={{ display: "block", position: "relative", zIndex: 1 }}
      />
    </div>
  );
}

export default Ghost2;
