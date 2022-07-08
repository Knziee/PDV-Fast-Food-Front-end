import styled from "styled-components";

export const KitchenListContainer = styled.div`
  height: 100%;
  max-width: 1440px;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  background-color: #f2eded;
`;
export const Title = styled.div`
  font-size: 25px;
  font-family: "RobotoBlack";
`;

export const OnGoingList = styled.div`
  height: 100%;
  max-width: 400px;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  background-color: #f2eded;
`;

export const Notes = styled.div`
  font-size: 15px;
  margin-top: 20px;
  display: ${(props: any) => props.display};
  font-family: "RobotoBlack";
`;
export const NotesContainer = styled.div`
  height: 100%;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 80px;
  display: ${(props: any) => props.display};
  font-family: "RobotoRegular";
`;


