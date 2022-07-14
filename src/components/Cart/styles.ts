import styled from "styled-components";

export const CardContainer = styled.div`
  height: 85px;
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-family: "RobotoBlack";
`;

export const Description = styled.div`
  font-size: 15px;
  font-family: "RobotoRegular";
  color: "#878787";
`;
export const Price = styled.div`
  font-size: 15px;
  font-family: "RobotoBlack";
  color: "#878787";
  margin-right: -80px;
`;
export const PriceButtonBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  margin-bottom: 30px;
`;
export const ImageTitleDescriptionBox = styled.div`
  display: flex;
`;
