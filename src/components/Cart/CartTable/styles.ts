import styled from "styled-components";

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