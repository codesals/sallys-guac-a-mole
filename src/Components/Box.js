import { BoxWrapper, Hole } from "../styles";

const Box = () => {
  const hole_ids = [1, 2, 3, 4, 5];

  return (
    <BoxWrapper>
      {hole_ids.map(() => (
        <Hole />
      ))}
    </BoxWrapper>
  );
};

export default Box;
