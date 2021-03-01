import { BoxWrapper } from "../styles";
import Holes from "./Holes";
import { useState, useEffect } from "react";

const Box = () => {
  // // const startGame = () => {
  // //   setInterval(getRandom, 1000);
  // // };

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isGameOn, setIsGameOn] = useState(1);

  let time = 120;
  // let timer;

  const countDown = () => {
    if (time > 0) {
      time -= 1;
      setTimeLeft(time);
    } else {
      setIsGameOn(0);
      // clearInterval(timer);
    }
  };

  useEffect(() => {
    const timer = setInterval(countDown, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* <StyledButton onClick={startGame}>Start!</StyledButton> */}
      <h3>Time Left: {timeLeft}</h3>
      <h3> Score: {score} </h3>
      <BoxWrapper>
        <Holes score={score} setScore={setScore} isGameOn={isGameOn} />
      </BoxWrapper>
      {/* <p>{index}</p> */}
    </>
  );
};

export default Box;
