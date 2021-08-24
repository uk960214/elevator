import React from "react";

export default function FloorButton({ floorNum, changeFloor }) {
  return (
    <input
      type="button"
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
    />
  );
}
