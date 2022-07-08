import styled from "styled-components";

export const PedidosWrapper = styled.div`
  height: 100%;
  max-width: 1250px;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding-top: 70px;
  background-color: #ffff;
`;
export const WelcomeMessage = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
  font-family: "RobotoBlack";
`;
export const SearchBar = styled.input`
  width: 320px;
  height: 45px;
  background-color: #f4f4f4;
  padding-left: 15px;
  font-family: "RobotoRegular";
  font-size: 15px;
  ::placeholder {
    color: #b3b3b3;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 120px;
  justify-content: right;
  margin-right: 110px;
`;
export const ItemContainer = styled.div`
  max-width: 1150px;
  gap: 80px;
  display: flex;
  flex-wrap: wrap;
`;
export const CategoryContainer = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: row;
`;
