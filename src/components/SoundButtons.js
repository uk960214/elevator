import React from "react";

export default function SoundButtons({ soundSettings }) {
  return (
    <div>
      <h1>Would you like to allow sounds?</h1>
      <input
        type="button"
        value="yes"
        onClick={() => {
          soundSettings(true);
        }}
      ></input>
      <input
        type="button"
        value="no"
        onClick={() => soundSettings(false)}
      ></input>
    </div>
  );
}
