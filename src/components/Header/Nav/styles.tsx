import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  gap: 50px;
  color: white;
  margin-right: 70px;
  margin-top: 20px;
`;

export const NavItem = styled.div`
  border-bottom: 3px solid #125c13;
  padding: 0px 0px 19px 0px;
  :hover {
    border-bottom: 3px solid #ffff;
  }
  cursor: pointer;
`;
