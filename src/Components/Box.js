import { BoxWrapper, StyledButton } from "../styles";
import Holes from "./Holes";
import { useState, useEffect } from "react";

const Box = () => {
  const [index, setIndex] = useState(0);

  const getRandom = () => setIndex(Math.floor(Math.random() * 5) + 1);

  // const startGame = () => {
  //   setInterval(getRandom, 1000);
  // };

  useEffect(() => {
    const interval = setInterval(getRandom, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <StyledButton onClick={startGame}>Start!</StyledButton> */}
      <BoxWrapper>
        <Holes />
      </BoxWrapper>
      {/* <p>{index}</p> */}
    </>
  );
};

export default Box;
