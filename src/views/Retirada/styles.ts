import styled from "styled-components";

export const RetiradaWrapper = styled.div`
  height: 100%;
  max-width: 1440px;

  display: flex;
  margin: auto;
  flex-direction: row;
  padding-top: 70px;
  background-color: #f2eded;
  display: flex;
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
  font-size: 45px;
  font-family: "RobotoBlack";
`;
export const RetiradaName = styled.div`
  width: 700px;
  font-size: 80px;
  color: ${(props: any) => (props.nameReady ? "green" : "grey")};
  font-family: "RobotoMedium";
`;
