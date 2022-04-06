import {
  styled,
  Text,
} from "@nextui-org/react";
import ShopCard from "./ShopCard";

const StyledDiv = styled("div", {
  background: "$gray900",
  p: 10,
  minHeight: "70%",
});

function Store() {
  return (
    <StyledDiv>
      <Text
        h1
        size={30}
        css={{ textGradient: "45deg, $purple500 -20%, $pink500 50%" }}
      >
        Credit Store
      </Text>
      <Text h2 size={20} color="white" css={{ pl: 10, h: 50 }}>
        Buy credits here
      </Text>
      <ShopCard />
    </StyledDiv>
  );
}

export default Store;
