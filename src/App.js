import Game from "./components/game";

function App() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
      <Game />
      {/* <Confirmation text="Are you sure you want to do this?" /> */}
    </div>
  );
}

export default App;
