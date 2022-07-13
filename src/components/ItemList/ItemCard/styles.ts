import styled from "styled-components";
import GreenBackground from "../../../assets/images/itemGreenBackground.png";
import RedBackground from "../../../assets/images/itemRedBackground.png";
import YellowBackground from "../../../assets/images/itemYellowBackground.png";

export const ItemBackground = styled.div`
  background-color: white;
  width: 225px;
  height: 180px;
  border-radius: 20px;
  box-shadow: 0 2px 10px -8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ItemImgBackground = styled.div`
  width: 225px;
  height: 275px;
  background-image: ${(props: any) =>
    props.red
      ? `url(${RedBackground})`
      : props.green
      ? `url(${GreenBackground})`
      : `url(${YellowBackground})`};
  border-radius: 20px;
  display: flex;
  align-items: end;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
  font-family: "RobotoBlack";
`;

export const ItemDescription = styled.div`
  font-size: 12px;
  color: #515151;
  text-align: center;
  margin-bottom: 20px;
  font-family: "RobotoRegular";
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: -50px;
  padding-bottom: 20px;
  font-family: "RobotoBlack";
`;

export const ItemSelected = styled.div`
  width: inherit;
  height: inherit;
  cursor: pointer;
  background-color: #1fdd1f;
  position: absolute;
  border-radius: 20px;
  opacity: 80%;
  display: ${(props: any) => (props.visible === "yes" ? "flex" : "none")};
`;
