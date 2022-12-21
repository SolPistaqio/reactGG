import { Icon } from "@iconify/react";

function Ghost3(props) {
  return (
    <div>
      <Icon
        icon="icon-park-solid:baseball-bat"
        color={props.color1}
        height="150px"
        hFlip
        style={{
          display: "block",
          marginLeft: "90px",
          marginBottom: "-150px",
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

export default Ghost3;
