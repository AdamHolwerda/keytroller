import { observer } from "mobx-react";
import React, { Component } from "react";

import { cS as controllerState } from "../../initializer";

const ControllerDebug = observer(
  class ControllerDebug extends Component {
    render() {
      return (
        <div>
          <div>Start Button: {controllerState.startButton}</div>
          <div>Select Button: {controllerState.selectButton}</div>
          <div>Right Trigger: {controllerState.rightTrigger}</div>
          <div>Left Trigger: {controllerState.leftTrigger}</div>
          <div>Right Bumper: {controllerState.rightBumper}</div>
          <div>Left Bumper: {controllerState.leftBumper}</div>
          <div>Y Button: {controllerState.yButton}</div>
          <div>B Button: {controllerState.bButton}</div>
          <div>X Button: {controllerState.xButton}</div>
          <div>A Button: {controllerState.aButton}</div>
          <div>D Down: {controllerState.dDown}</div>
          <div>D Up: {controllerState.dUp}</div>
          <div>D Left: {controllerState.dLeft}</div>
          <div>D Right: {controllerState.dRight}</div>
          <div>Left Stick X: {controllerState.leftStickX}</div>
          <div>Left Stick Y: {controllerState.leftStickY}</div>
          <div>Right Stick X: {controllerState.rightStickX}</div>
          <div>Right Stick Y: {controllerState.rightStickY}</div>
        </div>
      );
    }
  }
);

export default ControllerDebug;
