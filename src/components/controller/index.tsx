import { observer } from "mobx-react";
import React, { Component } from "react";
import { cS as controllerState } from "../../initializer";
import {
  StyledAButton,
  StyledBButton,
  StyledControllerInterface,
  StyledDownButton,
  StyledLeftBumper,
  StyledLeftButton,
  StyledLeftTrigger,
  StyledRightBumper,
  StyledRightButton,
  StyledRightTrigger,
  StyledSelectButton,
  StyledStartButton,
  StyledStick,
  StyledUpButton,
  StyledXButton,
  StyledYButton,
} from "./styles";

interface ControllerProps {
  className?: string;
}

@observer
class Controller extends Component<ControllerProps> {
  render() {
    return (
      <StyledControllerInterface className={this.props.className}>
        <div className="left-buttons">
          <StyledLeftTrigger value={controllerState.leftTrigger} />
          <StyledLeftBumper value={controllerState.leftBumper} />

          <div className="sticks">
            <StyledStick
              xValue={controllerState.leftStickX}
              yValue={controllerState.leftStickY}
              stickButtonValue={controllerState.leftStickButton}
            >
              <div className="inner-stick" />
            </StyledStick>
          </div>
          <div className="udrl-buttons">
            <StyledUpButton value={controllerState.dUp}>^</StyledUpButton>
            <StyledRightButton value={controllerState.dRight}>
              &gt;
            </StyledRightButton>
            <StyledLeftButton value={controllerState.dLeft}>
              &lt;
            </StyledLeftButton>
            <StyledDownButton value={controllerState.dDown}>v</StyledDownButton>
          </div>
        </div>
        <div className="middle-buttons">
          <StyledSelectButton value={controllerState.selectButton} />
          <StyledStartButton value={controllerState.startButton} />
        </div>
        <div className="right-buttons">
          <StyledRightTrigger value={controllerState.rightTrigger} />
          <StyledRightBumper value={controllerState.rightBumper} />
          <div className="ybxa-buttons">
            <StyledYButton value={controllerState.yButton}>Y</StyledYButton>
            <StyledBButton value={controllerState.bButton}>B</StyledBButton>
            <StyledXButton value={controllerState.xButton}>X</StyledXButton>
            <StyledAButton value={controllerState.aButton}>A</StyledAButton>
          </div>
          <div className="sticks">
            <StyledStick
              xValue={controllerState.rightStickX}
              yValue={controllerState.rightStickY}
              stickButtonValue={controllerState.rightStickButton}
            >
              <div className="inner-stick" />
            </StyledStick>
          </div>
        </div>
      </StyledControllerInterface>
    );
  }
}

export default Controller;
