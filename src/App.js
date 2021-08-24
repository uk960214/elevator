import React, { useState } from "react";
import useSound from "use-sound";

import "./App.css";
import SoundButtons from "./components/SoundButtons";
import Door from "./containers/Door";

// import bgm
import bgmSrc from "./sound/bgm.mp3";

function App() {
  const [sound, setSound] = useState(null);

  const [bgm] = useSound(bgmSrc, { volume: 0.3, interrupt: true });

  // set sound state, play bgm if sound is true
  const soundSettings = (allow) => {
    setSound(allow);
    if (allow) bgm();
  };

  return (
    <div>
      {/* if sound state is null, show buttons */}
      {sound === null ? (
        <SoundButtons soundSettings={soundSettings} />
      ) : (
        <Door sound={sound} />
      )}
    </div>
  );
}

export default App;
