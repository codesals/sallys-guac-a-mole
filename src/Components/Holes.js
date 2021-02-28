import { StyledHole } from "../styles";
import avocado from "../images/avocado.png";
// import empty from "../images/empty.svg";
//image URLs
//https://www.redbubble.com/i/sticker/Cute-Fruit-Evil-Avocado-by-LycheeTees/49586299.EJUG5
//https://ih1.redbubble.net/image.1275464908.6299/st,small,507x507-pad,600x600,f8f8f8.jpg

const holes = [1, 2, 3, 4, 5]; //hole_ids

let getRandom = () => Math.floor(Math.random() * holes.length) + 1;

const Holes = () => {
  const avocadoLocation = getRandom();

  return holes.map((holenumber) => {
    if (avocadoLocation === holenumber) {
      return (
        <StyledHole>
          <img src={avocado} alt="avocado" />
        </StyledHole>
      );
    } else {
      return <StyledHole />;
    }
  });
};

export default Holes;

// Below: alt return using empty image:
// return holes.map((holenumber) => (
//   <>
//     <StyledHole>
//       <img
//         src={avocadoLocation === holenumber ? avocado : empty}
//         alt="hole"
//       />
//       {/* <p>
//         {" "}
//         A:{avocadoLocation}, id:{holenumber}
//       </p> */}
//     </StyledHole>
//   </>
// ));
