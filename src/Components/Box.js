import { BoxWrapper, StyledButton } from "../styles";
import Holes from "./Holes";
import { useState, useEffect } from "react";

const Box = () => {
  // // const startGame = () => {
  // //   setInterval(getRandom, 1000);
  // // };

  const [score, setScore] = useState(0);

  return (
    <>
      {/* <StyledButton onClick={startGame}>Start!</StyledButton> */}
      <h3> Score: {score} </h3>
      <BoxWrapper>
        <Holes score={score} setScore={setScore} />
      </BoxWrapper>
      {/* <p>{index}</p> */}
    </>
  );
};

export default Box;
