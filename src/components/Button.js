import React from "react";

export default function Button({ floorNum, changeFloor }) {
  return (
    <input
      type="button"
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
    />
  );
}
