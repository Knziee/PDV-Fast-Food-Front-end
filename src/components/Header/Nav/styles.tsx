import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  gap: 30px;
  color: white;
  margin-right: 30px;
`;

export const NavItem = styled.div`
  padding: 8px 20px;
  border-radius: 10px;
  background-color: ${(props: any) =>
    props.pedidosProps ? "green" : props.cozinhaProps ? "green" : "green"};
`;
//background-color: ${props => !props.isAvailable ? "#FBE192" : props.selected ? "#8DD7CF" : "#C3CFD9"};
