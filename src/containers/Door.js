import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import Button from "../components/Button";
import DoorContent from "../components/DoorContent";

import openSfx from "../sound/open.mp3";
import closeSfx from "../sound/close.mp3";
import moveSfx from "../sound/move.mp3";
import arriveSfx from "../sound/arrive.wav";

export default function Door({ sound }) {
  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);

  const [openPlay] = useSound(openSfx, { playbackRate: 0.6 });
  const [closePlay] = useSound(closeSfx, { playbackRate: 0.6 });
  const [movePlay] = useSound(moveSfx, { volume: 0.3 });
  const [arrivePlay] = useSound(arriveSfx);

  const changeFloor = (floorNum) => {
    if (floor !== floorNum) {
      if (sound) {
        setReady(false);
        closePlay();
        setTimeout(() => movePlay(), 4500);
        setTimeout(() => setFloor(floorNum), 4000);
        setTimeout(() => arrivePlay(), 8500);
        setTimeout(() => {
          openPlay();
          setReady(true);
        }, 9500);
      } else {
        setReady(false);
        setTimeout(() => setFloor(floorNum), 4000);
        setTimeout(() => setReady(true), 9500);
      }
    }
  };

  if (isReady && sound) {
    openPlay();
  }

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3500);
    return;
  }, []);

  const Buttons = [];
  for (let i = 1; i < 4; i++) {
    Buttons.push(<Button key={i} floorNum={i} changeFloor={changeFloor} />);
  }

  return (
    <div className="Door">
      <DoorContent className="content" floor={floor} isReady={isReady} />
      {Buttons}
    </div>
  );
}
