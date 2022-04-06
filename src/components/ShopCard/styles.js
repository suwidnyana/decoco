import { styled, Grid, Button, Card } from "@nextui-org/react";

export const StyledCard = styled(Card, {
  py: "$2",
  mt: "$8",
  boxShadow: "$lg",
  br: "35px",
  ov: "visible",
  backgroundColor: "$gray800 !important",
  color: "$white",
});

export const GridItem = styled(Grid, {
  d: "flex",
  fd: "column",
  justifyContent: "center",
  cursor: "pointer",
  transition: "$default",
  "&:hover": {
    opacity: 0.8,
  },
  ai: "center",
  color: "#666",
  variants: {
    selected: {
      true: {
        color: "$primary",
      },
    },
  },
});

export const TabText = styled("p", {
  m: 0,
  mt: "$3",
  fontSize: "$space$8",
  fontWeight: "$semibold",
  color: "currentColor",
});

export const ProductImageContainer = styled("div", {
  height: "150px",
  width: "150px",
  br: "32px",
  ml: "-$4",
  transform: "scale(1.2)",
  background: "linear-gradient(135deg, #010187 0%,#18000E 100%)",
  boxShadow: "20px 30px 60px rgba(0, 0, 0, 0.15)",
  '@mdMax': {
    m: "$10"
  },
});

export const ProductImage = styled("img", {
  zIndex: "$10",
  minWidth: "150px",
  width: "100%",
  p: 10,
});

export const ProductSize = styled("div", {
  fontSize: "$xs",
  dflex: "center",
  fontWeight: "$bold",
  width: "70px",
  position: "relative",
  zIndex: 10,
  borderRadius: "$sm",
  cursor: "pointer",
  transition: "background 0.3s ease 0s, border-radius 0.3s ease 0s",
  color: "$white",
  variants: {
    selected: {
      true: {
        background: "$primary",
        color: "$white",
      },
    },
  },
});

const BaseText = styled("p", {
  p: 0,
  m: 0,
  transformOrigin: "left",
  fontFamily: "$mono",
  fontWeight: "$normal",
});

export const StyledTitle = styled(BaseText, {
  transformOrigin: "left",
  fontWeight: "$bold",
  fontSize: "$md",
});

export const StyledSubtitle = styled(BaseText, {
  color: "$gray300",
  fontWeight: "$semibold",
  fontSize: "$base",
});

export const StyledPrice = styled(BaseText, {
  fontSize: "18px",
  fontWeight: "$bold",
});

export const StyledOldPrice = styled(BaseText, {
  ml: "$8",
  textDecorationLine: "line-through",
  fontWeight: "$semibold",
  fontSize: "18px",
  color: "$gray300",
});

export const StyledDiscount = styled(BaseText, {
  ml: "$4",
  color: "$success",
  fontSize: "18px",
  fontWeight: "$semibold",
});

export const BuyButton = styled(Button, {
  ov: "hidden",
  tt: "none",
  transition: "$default",
  borderRadius: "$pill",
});

export const AddToBagButton = styled(BuyButton, {});
