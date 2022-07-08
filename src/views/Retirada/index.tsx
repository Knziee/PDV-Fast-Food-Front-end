import { Header } from "../../components/Header";
import {
  RetiradaBox,
  RetiradaDivider,
  RetiradaName,
  RetiradaTitle,
  RetiradaWrapper,
} from "./styles";
export const Retirada: React.FC = () => {
  return (
    <div>
      <Header />
      <RetiradaWrapper>
        <RetiradaBox>
          <RetiradaTitle>Preparando:</RetiradaTitle>
          <RetiradaName>Ricardo</RetiradaName>
          <RetiradaName>Luiza</RetiradaName>
          <RetiradaName>Fernanda</RetiradaName>
          <RetiradaName>Bruna</RetiradaName>
        </RetiradaBox>
        <RetiradaDivider />
        <RetiradaBox>
          <RetiradaTitle>Prontos:</RetiradaTitle>
          <RetiradaName nameReady>Camila</RetiradaName>
        </RetiradaBox>
      </RetiradaWrapper>
    </div>
  );
};
