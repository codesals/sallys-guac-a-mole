import { StyledHole } from "../styles";
import avocado from "../images/avocado.png";
import guac from "../images/guac.png";
import { useState, useEffect } from "react";

//image URLs
//https://www.redbubble.com/i/sticker/Cute-Fruit-Evil-Avocado-by-LycheeTees/49586299.EJUG5
//https://ih1.redbubble.net/image.1275464908.6299/st,small,507x507-pad,600x600,f8f8f8.jpg

const Holes = ({ score, setScore }) => {
  const holes = [1, 2, 3, 4, 5]; //hole_ids

  const [avocadoLocation, setAvocadoLocation] = useState(0);
  const [image, setImage] = useState();

  const getRandom = () =>
    setAvocadoLocation(Math.floor(Math.random() * holes.length) + 1);
  const makeGuac = () => {
    setScore(score + 5);
    setImage(guac);
  };

  useEffect(() => {
    const interval1 = setInterval(getRandom, 1100);
    const interval2 = setInterval(() => setImage(avocado), 1100);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return holes.map((holenumber) => {
    if (avocadoLocation === holenumber) {
      return (
        <>
          <StyledHole onClick={makeGuac}>
            <img src={image} alt="hole" />
          </StyledHole>
          {/* <p> {score}</p> */}
        </>
      );
    } else {
      return <StyledHole />;
    }
  });
};

export default Holes;
