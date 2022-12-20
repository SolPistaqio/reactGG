import { Icon } from "@iconify/react";

function Result(props) {
  return (
    <>
      {props.win ? (
        <Icon icon="charm:trophy" color="#fbf100" height="50px" />
      ) : (
        <Icon icon="charm:skull" color="#1919ae" height="50px" />
      )}
    </>
  );
}

export default Result;
