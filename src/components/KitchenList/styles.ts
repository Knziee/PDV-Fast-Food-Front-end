import styled from "styled-components";

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
  margin-bottom: 80px;
  display: ${(props: any) => props.display};
  font-family: "RobotoRegular";
`;
