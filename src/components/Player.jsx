import { styled, Text } from "@nextui-org/react";

const Container = styled("div", {
  background: "$gray900",
  p: 10,
  h: "30%",
  d: "flex",
  justifyContent: "flex-end",
  flexDirection: "column"
});

const StyledDiv = styled('div', {})

function Player() {
  return (
    <Container>
      <StyledDiv>
        <Text
          h1
          size={30}
          css={{ textGradient: "45deg, $blue500 -20%, $pink500 50%" }}
        >
          Your Inventory
        </Text>
        <Text h3 size={20} css={{ color: "$white", m: 0, p: 10 }}>
          Credit Balance: 200
        </Text>
        <Text h3 size={20} css={{ color: "$white", m: 0, p: 10 }}>
          Prizes won: 🧸🐇🐥🐶🦧🧸🐇🐥🐶🦧🧸🐇🐥🐶🦧🧸🐇🐥🐶🦧🧸🐇🐥🐶
        </Text>
      </StyledDiv>
    </Container>
  );
}

export default Player;
