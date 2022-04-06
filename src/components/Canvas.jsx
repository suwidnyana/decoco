import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const render = () => {
      draw(canvas);
    };
    render();
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
