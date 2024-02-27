import React from "react";
import Navibar from "./navbar";
import Watermark from "./whatermark";
import PresentationCard from "./presentation_card";
import Logos from "./logos";

function App() {
  return (
    <div className="App">
      <Watermark/>
      <Navibar/>
      <PresentationCard/>
      <Logos/>
    </div>
  );
}

export default App;
