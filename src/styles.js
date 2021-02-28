import styled from "styled-components";

export const BoxWrapper = styled.div`
  height: 300px;
  width: 470px;
  border-color: black;
  border-style: solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledHole = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: black;
  margin: 20px;

  img {
    width: 90px;
    margin-top: 7px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 5%;
  margin: 2%;
  height: 30px;
  width: 60px;
  font-weight: bold;
  font-size: large;
`;
