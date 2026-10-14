import "./App.css";
import CursorGlow from "./components/CursorGlow";
import Monogram from "./components/Monogram";
import ScrollSequence from "./components/ScrollSequence";
import Site from "./components/Site";

function App() {
  return (
    <>
      <ScrollSequence />
      <Monogram />
      <CursorGlow />
      <Site />
    </>
  );
}

export default App;
