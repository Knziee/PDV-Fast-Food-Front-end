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

export const CartContainer = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: column;
`;

export const NoteTitle = styled.div`
  font-size: 25px;
  font-family: "RobotoBlack";
`;
export const NoteInput = styled.input`
  background-color: lightgrey;
  height: 100px;
  width: 400px;
`;
export const SummaryContainer = styled.div`
  height: 250px;
  width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  transform:scale(0.5);
`;

export const SummaryTitle = styled.div`
  font-size: 18px;
  font-family: "RobotoRegular";
`;

export const SummaryPrice = styled.div`
  font-size: 18px;
  font-family: "RobotoRegular";
  color: "#878787";
`;
export const SummaryTitlePriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SummaryLine = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;
export const SummaryTotalPriceBox = styled.div`
  display: flex;
`;
export const SummaryTotalPrice = styled.div`
  display: flex;
`;

