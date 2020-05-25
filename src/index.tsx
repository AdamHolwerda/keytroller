import { observer } from "mobx-react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { cS as controllerState, iS as inputState } from "./initializer";

import { StyledH1, StyledTextarea, StyledController } from "./styles";

const placeholderText = `Hey there!
  What if you could write in input boxes without a clunky interface?
     Would you?`;

const Header = observer(
  class Header extends Component {
    render() {
      return <StyledH1>Keytroller</StyledH1>;
    }
  }
);

const InputTester = observer(
  class InputTester extends Component {
    render() {
      return (
        <StyledTextarea
          placeholder={placeholderText}
          value={inputState.output}
        />
      );
    }
  }
);

const App = observer(
  class App extends Component {
    render() {
      return (
        <>
          <Header />
          <InputTester />
          <StyledController />
        </>
      );
    }
  }
);

window.setInterval(() => {
  let gamepads = navigator.getGamepads();
  controllerState.injectGamepad(gamepads[0]);
}, 33); //30x per second

ReactDOM.render(<App />, document.getElementById("root"));
