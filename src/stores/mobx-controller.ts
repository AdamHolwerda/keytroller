import { observable, computed, action } from "mobx";
import RootStore from "./RootStore";

class ControllerState {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable buttons = [];
  @observable axes = [];

  @computed get rightTrigger() {
    if (!this.buttons.length) return 0;
    return this.buttons[7].value || 0;
  }

  @computed get leftTrigger() {
    if (!this.buttons.length) return 0;
    return this.buttons[6].value || 0;
  }

  @computed get rightBumper() {
    if (!this.buttons.length) return 0;
    return this.buttons[5].value || 0;
  }

  @computed get leftBumper() {
    if (!this.buttons.length) return 0;
    return this.buttons[4].value || 0;
  }

  @computed get xButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[2].value || 0;
  }

  @computed get yButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[3].value || 0;
  }

  @computed get bButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[1].value || 0;
  }

  @computed get aButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[0].value || 0;
  }

  @computed get dLeft() {
    if (!this.buttons.length) return 0;
    return this.buttons[14].value || 0;
  }

  @computed get dDown() {
    if (!this.buttons.length) return 0;
    return this.buttons[13].value || 0;
  }

  @computed get dRight() {
    if (!this.buttons.length) return 0;
    return this.buttons[15].value || 0;
  }

  @computed get dUp() {
    if (!this.buttons.length) return 0;
    return this.buttons[12].value || 0;
  }

  @computed get selectButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[8].value || 0;
  }

  @computed get leftStickButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[10].value || 0;
  }

  @computed get rightStickButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[11].value || 0;
  }

  @computed get startButton() {
    if (!this.buttons.length) return 0;
    return this.buttons[9].value || 0;
  }

  @computed get leftStickX() {
    if (!this.axes.length) return 0;
    return this.axes[0] || 0;
  }

  @computed get leftStickY() {
    if (!this.axes.length) return 0;
    return this.axes[1] || 0;
  }

  @computed get rightStickX() {
    if (!this.axes.length) return 0;
    return this.axes[2] || 0;
  }

  @computed get rightStickY() {
    if (!this.axes.length) return 0;
    return this.axes[3] || 0;
  }

  @action injectGamepad = gamepad => {
    if (gamepad != null) {
      this.buttons = gamepad.buttons;
      this.axes = gamepad.axes;
    }
  };
}

export default ControllerState;
