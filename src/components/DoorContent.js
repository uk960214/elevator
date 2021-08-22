import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

export default function DoorContent({ floor }) {
  const [isOpen, setDoor] = useState(false);

  const transition = useTransition(isOpen, {
    from: { x: 0 },
    enter: { x: -100 },
    leave: { x: 0 },
  });

  useEffect(() => {
    setDoor(true);
    console.log("mounted");
    return () => console.log("unmounting");
  }, [floor]);

  return (
    <div className="container">
      <div className="reveal-wrapper">
        <div className="reveal-content">
          <h1>Current Floor: {floor}</h1>
        </div>

        {transition((style, item) => {
          return item ? (
            <div>
              <animated.div style={style} className="door-left"></animated.div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
