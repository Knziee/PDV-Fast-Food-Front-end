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
          <RetiradaName>aaaa</RetiradaName>
        </RetiradaBox>
        <RetiradaDivider />
        <RetiradaBox>
          <RetiradaTitle>Pronto:</RetiradaTitle>
          <RetiradaName nameReady>aaaa</RetiradaName>
        </RetiradaBox>
      </RetiradaWrapper>
    </div>
  );
};
