import Team from "./components/team";
import Confirmation from "./components/confirmationDialog";

function App() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
      <Team />
      <Confirmation text="Are you sure you want to do this?" />
    </div>
  );
}

export default App;
