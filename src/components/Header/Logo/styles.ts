import styled from "styled-components";
import LogoIconSVG from "../../../assets/images/logoIcon.svg";

export const LogoIcon = styled.div`
  background-image: url(${LogoIconSVG});
  width: 30px;
  height: 30px;
  filter: invert();
  margin-right: 10px;
  margin-left: 40px;
`;

export const LogoText = styled.div`
  font-size: 25px;
  color: white;
  font-family: "RobotoMedium";
`;

export const LogoContainer = styled.div`
  display: flex;
`;
