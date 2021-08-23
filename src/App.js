import React, { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import DoorContent from "./components/DoorContent";

function App() {
  const [floor, setFloor] = useState(null);
  const [isReady, setReady] = useState(false);

  const changeFloor = (floorNum) => {
    if (floor !== floorNum) {
      setReady(false);
      setTimeout(() => setFloor(floorNum), 4000);
      setTimeout(() => setReady(true), 8000);
    }
  };

  const Buttons = [];
  for (let i = 1; i < 4; i++) {
    Buttons.push(<Button key={i} floorNum={i} changeFloor={changeFloor} />);
  }

  return (
    <div className="App">
      <DoorContent className="content" floor={floor} isReady={isReady} />
      {Buttons}
    </div>
  );
}

export default App;
