import React from "react";
import { CSSTransition } from "react-transition-group";

export default function DoorContent({ floor, isReady }) {
  return (
    <div className="reveal-wrapper">
      <div className="reveal-content">
        <h1>Current Floor: {floor}</h1>
      </div>
      <CSSTransition in={isReady} timeout={4000} classNames="door-left">
        <div className="door-left"></div>
      </CSSTransition>
      <CSSTransition in={isReady} timeout={4000} classNames="door-right">
        <div className="door-right"></div>
      </CSSTransition>
    </div>
  );
}
