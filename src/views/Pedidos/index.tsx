import { Button } from "../../components/Button";
import { CategoryList } from "../../components/CategoryList";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import {
  ButtonWrapper,
  PedidosWrapper,
  SearchBar,
  WelcomeMessage,
} from "./styles";

export const Pedidos: React.FC = () => {
  return (
    <div>
      <Header />
      <PedidosWrapper>
        <WelcomeMessage>Seja bem vindo!</WelcomeMessage>
        <SearchBar placeholder="O que você procura?" />
        <CategoryList />
        <ItemList />
        <ButtonWrapper>
          <Button background="red" borderColor="blue" text="cancelar" />
          <Button background="red" borderColor="blue" text="finalizar pedido" />
        </ButtonWrapper>
      </PedidosWrapper>
    </div>
  );
};
