import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import "./App.css";
import Button from "./components/Button";
import DoorContent from "./components/DoorContent";

import openSfx from "./sound/open.mp3";
import closeSfx from "./sound/close.mp3";
import moveSfx from "./sound/move.mp3";
import arriveSfx from "./sound/arrive.wav";

import bgm from "./sound/bgm.mp3";

function App() {
  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);

  const [openPlay] = useSound(openSfx, { playbackRate: 0.6 });
  const [closePlay] = useSound(closeSfx, { playbackRate: 0.6 });
  const [movePlay] = useSound(moveSfx, { volume: 0.3 });
  const [arrivePlay] = useSound(arriveSfx);
  const [bgmPlay] = useSound(bgm, { volume: 0.3, interrupt: true });

  const changeFloor = (floorNum) => {
    if (floor !== floorNum) {
      setReady(false);
      closePlay();
      setTimeout(() => movePlay(), 4500);
      setTimeout(() => setFloor(floorNum), 4000);
      setTimeout(() => arrivePlay(), 9000);
      setTimeout(() => {
        openPlay();
        setReady(true);
      }, 9000);
    }
  };

  const doorOpen = () => {
    openPlay();
    setReady(true);
  };

  const playBgm = () => {
    bgmPlay();
  };

  useEffect(() => {
    setTimeout(() => doorOpen(), 2000);
    return;
  }, []);

  const Buttons = [];
  for (let i = 1; i < 4; i++) {
    Buttons.push(<Button key={i} floorNum={i} changeFloor={changeFloor} />);
  }

  return (
    <div className="App">
      <DoorContent className="content" floor={floor} isReady={isReady} />
      {Buttons}
      <input type="button" value="play BGM" onClick={() => playBgm()} />
    </div>
  );
}

export default App;
