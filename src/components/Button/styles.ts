import styled from "styled-components";

export const ButtonBackground = styled.button`
  width: 250px;
  height: 40px;
  color: white;
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 13px;
  border: 1px solid;
  border-color: ${(props: any) => props.borderColor};
  cursor: pointer;
`;

export const ButtonText = styled.div`
  font-size: 20px;
  color: white;
  font-family: "RobotoMedium";
`;
