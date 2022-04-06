import { useState } from "react";
import { Button, styled, Modal, Text, keyframes } from "@nextui-org/react";

import { ReactComponent as DedoClaw } from "../images/dedoclaw.svg";
import { ReactComponent as Hook } from "../images/hook.svg";
import { populateCanvas } from "../utils/populateCanvas";
import Canvas from "./Canvas";

export const PRIZE_LIST = ["rabbit", "bear", "dog", "chick", "orangutan"];

export const PRIZE_EMOJI_LIST = {
  bear: "🧸",
  rabbit: "🐇",
  chick: "🐥",
  dog: "🐶",
  orangutan: "🦧",
};

const hookAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10vh);
  }

  100% {
    transform: translateY(0px);
  }
`;

const StyledDiv = styled("div", {
  background: "$gray900",
  p: 10,
  h: "100%",
  d: "flex",
  justifyContent: "center",
  flexDirection: "column",
  minWidth: "400px",
  position: "relative",
});

const StyledDedoClaw = styled(DedoClaw, {
  fill: "$pink200",
  maxHeight: "70vh",
  p: "$20",
  minWidth: "640px",
});

const StyledHook = styled(Hook, {
  fill: "black",
  height: "10vh",
  minWidth: "640px",
  position: "absolute",
  top: "37.5vh",
  left: "10vw",
  variants: {
    animate: {
      true: {
        animation: `${hookAnimation} 1s linear`,
      },
    },
  },
});

const StyledCanvas = styled(Canvas, {
  w: "340px",
  h: "290px",
  position: "absolute",
  left: "0",
  right: "0",
  m: "auto",
  top: "34%",
});

const StyledButton = styled(Button, {
  mx: "200px",
});

function ClawMachine() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const determinePrize = () => {
    return "rabbit";
  };

  const playGame = () => {
    setAnimate(true);
    const prize = determinePrize();
    console.log(`You won: ${prize}`);
    setTimeout(() => setVisible(true), 1000);
  };

  const closeHandler = () => {
    setVisible(false);
    setAnimate(false);
  };

  const handlePlayAgain = () => {
    setAnimate(false);
    setVisible(false);
    setTimeout(() => playGame(), 500);
  };

  const ResultModal = ({ title, message }) => {
    return (
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        blur
      >
        <Modal.Header>
          <Text b size={36}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text size={20}>{message}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={handlePlayAgain}>
            Play again
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <StyledDiv>
      <ResultModal
        title={"Congratulations!"}
        message={"You have won a rabbit 🐇 plushie"}
      />
      <StyledHook animate={animate.toString()} />
      <StyledCanvas width="350" height="300" draw={populateCanvas} />
      <StyledDedoClaw />
      <StyledButton onClick={playGame}>Play now with 2 Credits</StyledButton>
    </StyledDiv>
  );
}

export default ClawMachine;
