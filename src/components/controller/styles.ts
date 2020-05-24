import styled from "styled-components";

export const StyledControllerInterface = styled.div`
  width: 500px;
  height: 270px;
  background: gray;
  position: relative;

  .right-buttons {
    position: absolute;
    right: 0;

    .sticks {
      clear: both;
      margin: 40px;
      margin-right: 130px;
    }

    .ybxa-buttons {
      float: right;
      margin: 20px;
    }
  }

  .left-buttons {
    position: absolute;
    left: 0;

    .sticks {
      clear: both;
      margin: 20px;
      margin-left: 50px;
    }

    .udrl-buttons {
      float: left;
      margin: 10px;
      margin-left: 140px;
    }
  }

  .middle-buttons {
    position: absolute;
    width: 200px;
    margin: auto;
    height: 100px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const StyledButton = styled.div`
  box-sizing: border-box;
  padding-top: 5px;
  border: ${({ value }) => (value > 0 ? "1px solid gray" : "1px solid black")};
  background: ${({ value }) => (value > 0 ? "black" : "gray")};
  color: ${({ value }) => (value > 0 ? "white" : "black")};
  text-align: center;
`;

export const StyledStick = styled.div`
  box-sizing: border-box;
  border: ${({ value }) => (value > 0 ? "1px solid gray" : "1px solid black")};
  border-radius: 50%;
  width: 62px;
  height: 62px;
  padding: 5px;

  .inner-stick {
    box-sizing: border-box;
    background: ${({ stickButtonValue }) =>
      stickButtonValue > 0 ? "black" : "gray"};
    border: ${({ value }) =>
      value > 0 ? "1px solid gray" : "1px solid black"};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: ${({ xValue }) => xValue * 10 + "px"};
    margin-top: ${({ yValue }) => yValue * 10 + "px"};
  }
`;

export const StyledLeftTrigger = styled(StyledButton)`
  height: 30px;
`;

export const StyledLeftBumper = styled(StyledButton)`
  height: 20px;
`;

export const StyledRightTrigger = styled(StyledButton)`
  height: 30px;
`;

export const StyledRightBumper = styled(StyledButton)`
  height: 20px;
`;

export const StyledYButton = styled(StyledButton)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const StyledBButton = styled(StyledYButton)`
  margin-left: 30px;
`;
export const StyledAButton = styled(StyledYButton)``;
export const StyledXButton = styled(StyledYButton)`
  margin-left: -30px;
  margin-top: -30px;
`;

export const StyledDownButton = styled(StyledAButton)``;
export const StyledUpButton = styled(StyledYButton)``;
export const StyledLeftButton = styled(StyledXButton)``;
export const StyledRightButton = styled(StyledBButton)``;

export const StyledSelectButton = styled(StyledButton)`
  width: 20%;
  margin-right: 15%;
  margin-left: 15%;
  float: left;
`;

export const StyledStartButton = styled(StyledSelectButton)``;
