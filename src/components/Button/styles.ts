import styled from "styled-components";

export const ButtonBackground = styled.button`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  color: ${(props: any) => props.color};
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 20px;
  border: 2px solid;
  border-color: ${(props: any) => props.borderColor};
  cursor: pointer;
`;

export const ButtonText = styled.div`
  font-size: 20px;
  font-family: "RobotoMedium";
`;
