import ControllerState from "./mobx-controller";
import InputState from "../t9";

class RootStore {
  controllerState: ControllerState;
  inputState: InputState;
  constructor() {
    this.controllerState = new ControllerState(this);
    this.inputState = new InputState(this);
  }
}

export default RootStore;
