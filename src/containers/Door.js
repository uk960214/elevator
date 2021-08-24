import React, { useState, useEffect } from "react";
import useSound from "use-sound";

// import components
import FloorButton from "../components/FloorButton";
import DoorContent from "../components/DoorContent";

// import sound source
import openSfx from "../sound/open.mp3";
import closeSfx from "../sound/close.mp3";
import moveSfx from "../sound/move.mp3";
import arriveSfx from "../sound/arrive.wav";

export default function Door({ sound }) {
  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);

  // set sfx
  const [openPlay] = useSound(openSfx, { playbackRate: 1.1 });
  const [closePlay] = useSound(closeSfx, { playbackRate: 1.1 });
  const [movePlay] = useSound(moveSfx, { playbackRate: 2, volume: 0.3 });
  const [arrivePlay] = useSound(arriveSfx);

  // when floor button is clicked
  const changeFloor = (floorNum) => {
    // if different floor
    if (floor !== floorNum) {
      if (sound) {
        setReady(false);

        doorSound();

        setTimeout(() => movePlay(), 2000);

        setTimeout(() => setFloor(floorNum), 2200);

        setTimeout(() => arrivePlay(), 3500);

        setTimeout(() => {
          setReady(true);
          doorSound();
        }, 4500);
      } else {
        setReady(false);

        setTimeout(() => setFloor(floorNum), 2000);

        setTimeout(() => setReady(true), 4500);
      }
    }
  };

  // open and close door sfx
  const doorSound = () => {
    if (isReady && sound) {
      openPlay();
    } else if (!isReady && sound) {
      closePlay();
    }
  };

  // open door when mounted
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1500);
    return;
  }, []);

  // floor buttons array
  const FloorButtons = [];
  for (let i = 1; i < 4; i++) {
    FloorButtons.push(
      <FloorButton key={i} floorNum={i} changeFloor={changeFloor} />
    );
  }

  return (
    <div className="Door">
      <DoorContent className="content" floor={floor} isReady={isReady} />
      {FloorButtons}
    </div>
  );
}
