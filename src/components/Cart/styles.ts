import styled from "styled-components";

// export const CardContainer = styled.div`
//   height: 85px;
//   width: 600px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   margin-left: 100px;
//   margin-right: 100px;
// `;

// export const Title = styled.div`
//   font-size: 18px;
//   font-family: "RobotoBlack";
// `;

// export const Description = styled.div`
//   font-size: 15px;
//   font-family: "RobotoRegular";
//   color: "#878787";
// `;
// export const Price = styled.div`
//   font-size: 15px;
//   font-family: "RobotoBlack";
//   color: "#878787";
//   margin-right: -80px;
// `;
// export const PriceButtonBox = styled.div`
//   display: flex;
//   justify-content: right;
//   align-items: flex-start;
//   margin-bottom: 30px;
// `;
// export const ImageTitleDescriptionBox = styled.div`
//   display: flex;
// `;
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
`;
export const TotalItens = styled.div`
  font-size: 20px;
  font-family: "RobotoBlack";
  margin-bottom: 40px;
`;
export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
  font-family: "RobotoBlack";
`;
export const TableColumn = styled.td`
  display: flex;
  font-size: 15px;
  font-family: "RobotoBlack";
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: "RobotoBlack";
`;

export const CleanCart = styled.div`
  color: red;
  font-size: 20px;
  font-family: "RobotoBlack";
`;
