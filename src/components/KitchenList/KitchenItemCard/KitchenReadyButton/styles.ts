import styled from "styled-components";
import xIcon from "../../../../assets/images/xIcon.svg";

export const KitchenButtonBackground = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => (props.sucess ? "#e5f5e6" : "#fae5e5")};
  opacity: 100%;
  margin-left: 45px;
  cursor: pointer;
`;

export const ButtonIconRemove = styled.div`
  height: 10px;
  width: 10px;
  background-image: url(${xIcon});
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  gap: 10px;
`;
