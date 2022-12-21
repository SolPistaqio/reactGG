import TeamCard from "./teamCard";
import AddGhost from "../../actions/addPlayer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Team(props) {
  const playerTeam = props.team;
  const needsToAdd = 3 - playerTeam.length;
  let addButtons = "";
  if (needsToAdd > 0) {
    addButtons = [...Array(needsToAdd)].map((e, index) => (
      <Col
        lg
        xl
        xxl="4"
        className="d-flex justify-content-center align-items-center"
        key={"add" + index}
      >
        {" "}
        <AddGhost />
      </Col>
    ));
  }
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="d-none d-md-block">YOUR TEAM</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2 mb-3">
        {playerTeam.map((ghost) => {
          return (
            <Col
              lg
              xl
              xxl="4"
              className="d-flex justify-content-center align-items-center mb-3"
              key={ghost.id}
            >
              <TeamCard ghost={ghost} />
            </Col>
          );
        })}

        {addButtons}
      </Row>
    </Row>
  );
}

export default Team;
