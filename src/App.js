import React, { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import DoorContent from "./components/DoorContent";

function App() {
  const [floor, setFloor] = useState(1);

  const changeFloor = (floorNum) => {
    if (floor !== floorNum) {
      setFloor(floorNum);
    }
  };

  const Buttons = [];
  for (let i = 1; i < 4; i++) {
    Buttons.push(<Button key={i} floorNum={i} changeFloor={changeFloor} />);
  }

  return (
    <div className="App">
      <DoorContent floor={floor} />
      {Buttons}
    </div>
  );
}

export default App;
