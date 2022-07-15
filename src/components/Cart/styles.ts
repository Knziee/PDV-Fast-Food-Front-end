import styled from "styled-components";

export const Notes = styled.div`
  font-size: 15px;
  margin-top: 20px;
  display: ${(props: any) => props.display};
  font-family: "RobotoBlack";
  margin-bottom: 10px;
`;
export const EmptyCartMessage = styled.div`
  font-size: 30px;
  font-family: "RobotoBlack";
  text-align: center;
  margin-bottom: 40px;
`;
export const EmptyCartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
export const CartSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const TotalItens = styled.div`
  font-size: 20px;
  font-family: "RobotoBlack";
  margin-bottom: 40px;
`;

export const TableRowTitle = styled.tr`
  display: flex;
  font-size: 15px;
  font-family: "RobotoBlack";
  margin-top: 10px;
  justify-content: space-between;
  gap: 100px;
`;
export const TableRowQuantity = styled.tr`
  display: flex;
  font-size: 15px;
  font-family: "RobotoBlack";
  margin-top: 20px;
  justify-content: space-between;
`;
export const TableWraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  border-bottom: 0.5px solid lightgrey;
`;
export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TableColumnInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
`;
export const InnerTableRow = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-family: "RobotoBlack";
`;
export const ItemQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-family: "RobotoBlack";
  margin: 0 10px 0 10px;
`;
export const QuantityIcon = styled.div`
  border-radius: 30px;
  display: flex;
  filter: invert(24%) sepia(33%) saturate(1879%) hue-rotate(81deg)
    brightness(96%) contrast(90%);
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: "RobotoBlack";
`;

export const CleanCart = styled.div`
  color: red;
  font-size: 12px;
  font-family: "RobotoBlack";
  text-align: right;
  cursor: pointer;
`;

export const TotalValue = styled.div`
  font-size: 25px;
  font-family: "RobotoRegular";
`;
export const TotalValueNumbers = styled.div`
  font-size: 35px;
  font-family: "RobotoBlack";
`;
export const ButtonWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
