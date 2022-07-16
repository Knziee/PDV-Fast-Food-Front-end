import styled from "styled-components";

export const CozinhaWrapper = styled.div`
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-direction: row;
  padding-top: 70px;
  background-color: #ffff;
`;

export const CozinhaDivider = styled.div`
  height: 600px;
  width: 2px;
  background-color: black;
`;

export const KitchenListContainer = styled.div`
  height: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: "RobotoBlack";
`;

export const OnGoingList = styled.div`
  height: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const Notes = styled.div`
  font-size: 15px;
  margin-top: 20px;
  display: ${(props: any) => props.display};
  font-family: "RobotoBlack";
  margin-bottom: 10px;
`;

export const NotesContainer = styled.div`
  height: 80px;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 25px;
  margin-bottom: 80px;
  display: ${(props: any) => props.display};
  font-family: "RobotoRegular";
`;
export const KitchenButtonWrapper = styled.div`
  display: flex;
  align-items: row;
  margin-left: 50px;
  margin-top: 20px;
  gap: 10px;
`;
export const KitchenItemContainer = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-between;
`;
