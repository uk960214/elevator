import React, { useState, useEffect } from "react";

export default function Button({ floorNum, changeFloor }) {
  useEffect(() => {
    return setTimeout(() => {}, 5000);
  }, []);
  return (
    <input
      type="button"
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
    />
  );
}
