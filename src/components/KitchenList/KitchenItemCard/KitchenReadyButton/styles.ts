import styled from "styled-components";
import okIcon from "../../../../assets/images/iconOk.png";
import xIcon from "../../../../assets/images/xIcon.svg";

export const KitchenButtonBackground = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => (props.sucess ? "green" : "red")};
  opacity: 30%;
  margin-left: 45px;
`;

export const ButtonIconConfirm = styled.div`
  height: 10px;
  width: 10px;
  background-image: url(${okIcon});
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
