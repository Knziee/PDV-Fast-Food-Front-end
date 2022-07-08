import styled from "styled-components";

export const RetiradaWrapper = styled.div`
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  flex-direction: row;
  padding-top: 70px;
  background-color: #ffff;
  justify-content: center;
`;

export const RetiradaDivider = styled.div`
  height: 600px;
  width: 5px;
  background-color: black;
`;

export const RetiradaBox = styled.div`
  width: 700px;
`;
export const RetiradaTitle = styled.div`
  width: 700px;
  font-size: 55px;
  font-family: "RobotoBlack";
  margin-left: 115px;
  margin-bottom: 30px;
`;
export const RetiradaName = styled.div`
  width: 700px;
  font-size: 100px;
  color: ${(props: any) => (props.nameReady ? "#125c13" : "#9f9f9f")};
  font-family: "RobotoBlack";
  margin-left: 115px;
`;
