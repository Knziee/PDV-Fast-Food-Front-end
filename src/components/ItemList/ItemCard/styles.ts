import styled from "styled-components";
import GreenBackground from "../../../../assets/images/itemGreenBackground.png";
import RedBackground from "../../../../assets/images/itemRedBackground.png";
import YellowBackground from "../../../../assets/images/itemYellowBackground.png";

export const ItemBackground = styled.div`
  background-color: white;
  width: 235px;
  height: 155px;
  border-radius: 20px;
  box-shadow: 0 2px 10px -8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemImgBackground = styled.div`
  width: 235px;
  height: 255px;
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
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
`;
export const ItemDescription = styled.div`
  font-size: 12px;
  color: grey;
  text-align: center;
  margin-bottom: 20px;
`;
export const ItemPrice = styled.div`
  font-size: 15px;
  text-align: center;
  margin-bottom: -50px;
  padding-bottom: 20px;
`;
