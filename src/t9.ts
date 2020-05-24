import { observable, computed, action, IObservableArray, autorun } from "mobx";
import RootStore from "./RootStore";
//the idea of t9 is there's a button input multiple times.

interface Keypress {
  name: string;
  row: number;
  key: number;
  time: number;
}

class InputState {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  delay = 1200;
  matrix = [
    [",.?!", "abc", "def"], //0
    ["ghi", "jkl", "mno"], // 1
    ["pqrs", "tuv", "wxyz"], //2
    ["-+/", '("', ')"'] //3
  ];

  //this.matrix[0[0]] === ",.?!";
  //this.matrix[0[1]] === "abc"
  //this.matrix[0[2]] === "def"
  //this.matrix[1[0]] === "ghi"
  //this.matrix[1[1]] === "pqrs"
  //this.matrix[1[2]] === "tuv"
  //this.matrix[2[0]] === "-+/"
  //this.matrix[2[1]] === '("'
  //this.matrix[2[2]] === '")'

  //in each there's a few characters
  //this.matrix[0[0]][0] === ","
  //this.matrix[0[0]][1] === "."
  //this.matrix[0[0]][2] === "?"
  //this.matrix[0[0]][3] === "!"

  determineLetter = array => {
    const paramArray = array;
    console.log("param array is", paramArray);

    if (!paramArray || !paramArray.length) return "";

    // [{row:1, key:1, time: 1567786649595},
    //{row:1, key:1, time: 1567786649895}]

    const howManyPresses = paramArray.length;
    const whatKey = this.matrix[paramArray[0].row][paramArray[0].key][
      howManyPresses
    ];
    // [1,1,1] = 3/3 = 1, [2,2,2] = 6/3 = 2, [3,3] = 6/2 = 3;
    // [1,1,2] = 4/3 = 1.3 = 'cancel' = 1 = noop,
    // [2,4,2] = 'cancel' = noop
    // [3,1] = 'cancel' = noop;
    return whatKey;
  };

  @observable outputString = "";
  @observable insertedTime = Date.now();
  @observable row = 0;
  @observable indexOfKey = 0;
  keyPresses: IObservableArray<Keypress> = observable([]);

  @computed get output() {
    return this.outputString.replace("  ", " ");
  }

  @computed get keyStream() {
    return this.keyPresses.slice().reverse() || [];
  }

  @computed get lastInsert() {
    return this.insertedTime;
  }

  @computed get lastKey() {
    return this.keyStream.length && this.keyStream[0];
  }

  @computed get whatLetter() {
    return this.determineLetter(this.keyStream);
  }

  @action sendLetter = (letter: string | RegExp) => {
    if (letter === "\n") {
      this.outputString = `${this.output}
      
      `;
    } else {
      this.outputString = `${this.output}${letter}`;
    }
    this.keyPresses.clear();
    this.insertedTime = Date.now();
  };

  @action setKeypress = (name: string, rowNum: number, keyNum: number) => {
    //empty or add keypress to thing
    const time = Date.now();
    this.keyPresses.push({ name, row: rowNum, key: keyNum, time: time });

    console.log("lastKey", this.lastKey);
  };

  @action setChord = (firstKey: string, secondKey: string) => {
    switch (firstKey) {
      case "leftTrigger":
        switch (secondKey) {
          case "A":
            this.sendLetter(" the ");
            break;
          case "B":
            this.sendLetter(" of ");
            break;
          case "Y":
            this.sendLetter(" and ");
            break;
          case "X":
            this.sendLetter(" a ");
            break;
          case "leftBumper":
            this.sendLetter("\n");
            break;
          default:
            return;
        }
        break;
      case "leftBumper":
        switch (secondKey) {
          case "A":
            this.sendLetter(" to ");
            break;
          case "B":
            this.sendLetter(" in ");
            break;
          case "Y":
            this.sendLetter(" is ");
            break;
          case "X":
            this.sendLetter(" you ");
            break;
          default:
            return;
        }
        break;
      case "rightTrigger":
        switch (secondKey) {
          case "A":
            this.sendLetter(" that ");
            break;
          case "B":
            this.sendLetter(" it ");
            break;
          case "Y":
            this.sendLetter(" he ");
            break;
          case "X":
            this.sendLetter(" was ");
            break;
          default:
            return;
        }
        break;
      case "rightBumper":
        switch (secondKey) {
          case "A":
            this.sendLetter(" for ");
            break;
          case "B":
            this.sendLetter(" on ");
            break;
          case "Y":
            this.sendLetter(" are ");
            break;
          case "X":
            this.sendLetter(" as ");
            break;
          default:
            return;
        }
        break;
      default:
        return;
    }
  };

  // checkKeyStream = autorun(
  //   () => {
  //     //every time the keyStream changes, we want to
  //     //look at each entry, see if we can print one of the letters
  //     //first we'll look for pauses
  //     //findPauses - now - lastTime

  //     const kS = this.keyStream;
  //   },
  //   { delay: 10 }
  // );

  setButtons = autorun(
    () => {
      const { controllerState } = this.rootStore;

      // if (this.dLeft) inputState.setKeypress("left", 0, 1);
      // if (this.dUp) inputState.setKeypress("up", 0, 2);
      // if (this.dRight) inputState.setKeypress("right", 1, 0);
      // if (this.dDown) inputState.setKeypress("down", 1, 1);
      // if (this.xButton) inputState.setKeypress("X", 1, 2);
      // if (this.yButton) inputState.setKeypress("Y", 2, 0);
      // if (this.bButton) inputState.setKeypress("B", 2, 1);
      // if (this.aButton) inputState.setKeypress("A", 2, 2);

      if (controllerState.leftBumper) {
        if (controllerState.aButton) this.setChord("leftBumper", "A");
        if (controllerState.bButton) this.setChord("leftBumper", "B");
        if (controllerState.xButton) this.setChord("leftBumper", "X");
        if (controllerState.yButton) this.setChord("leftBumper", "Y");
        if (controllerState.rightBumper)
          this.setChord("leftBumper", "rightBumper");

        // inputState.setKeypress("leftBumper", 0, 0);
      }

      if (controllerState.rightBumper) {
        // inputState.setKeypress("rightBumper", 3, 0);

        if (controllerState.aButton) this.setChord("rightBumper", "A");
        if (controllerState.bButton) this.setChord("rightBumper", "B");
        if (controllerState.xButton) this.setChord("rightBumper", "X");
        if (controllerState.yButton) this.setChord("rightBumper", "Y");
      }

      if (controllerState.rightTrigger === 1) {
        //if we don't have 1 here, every value from 0-1
        //will cause a keypress

        if (controllerState.aButton) this.setChord("rightTrigger", "A");
        if (controllerState.bButton) this.setChord("rightTrigger", "B");
        if (controllerState.xButton) this.setChord("rightTrigger", "X");
        if (controllerState.yButton) this.setChord("rightTrigger", "Y");

        // inputState.setKeypress("rightTrigger", 3, 1);
      }

      if (controllerState.leftTrigger === 1) {
        //if we don't have 1 here, every value from 0-1
        //will cause a keypress

        if (controllerState.aButton) this.setChord("leftTrigger", "A");
        if (controllerState.bButton) this.setChord("leftTrigger", "B");
        if (controllerState.xButton) this.setChord("leftTrigger", "X");
        if (controllerState.yButton) this.setChord("leftTrigger", "Y");

        // inputState.setKeypress("leftTrigger", 3, 2);
      }
    },
    { delay: 10 }
  );
}

export default InputState;

// const noKeysYet = this.keyStream && !this.keyStream.length;
// const firstKey = this.keyStream.length && this.keyStream[0];

// console.log("keyStream", this.keyStream);

// if (noKeysYet) {
//   this.keyPresses &&
//     this.keyPresses.unshift({ row: rowNum, key: myKey, time: time });
//   this.lastKeyPress = { row: rowNum, key: myKey, time: time };
//   return false;
// }

// const timeBetween = noKeysYet ? 0 : time - this.lastKey.time;
// const tooLongBetween = timeBetween > this.delay;
// const keyPressMatch = firstKey && myKey === firstKey.key;
// const rowNotMatch = firstKey && myRow !== firstKey.row;

// if (tooLongBetween || (!keyPressMatch || !rowNotMatch)) {
//   //TODO send letter before emptying

//   console.log("adding ", this.whatLetter);
//   this.sendLetter(this.whatLetter);
// }
