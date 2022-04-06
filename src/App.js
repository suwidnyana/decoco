import "./App.css";
import { Container, Row, Col, NextUIProvider } from "@nextui-org/react";
import Store from "./components/Store";
import ClawMachine from "./components/ClawMachine";
import Player from "./components/Player";

function App() {
  return (
    <NextUIProvider>
      <Container gap={0} css={{ h: "100%", w: "100%", m:0, p:0 }} responsive={false}>
        <Row gap={0} css={{ h: "100%", m: 0 }}>
          <Col span={7} css={{ h: "100%" }}>
            <ClawMachine />
          </Col>
          <Col span={5} css={{ h: "100%" }}>
            <Player />
            <Store />
          </Col>
        </Row>
      </Container>
    </NextUIProvider>
  );
}

export default App;
