import batataFrita from "../../../assets/images/batataFrita.png";
import cheddar from "../../../assets/images/cheddar.png";
import estacado from "../../../assets/images/estacado.png";
import h20Limao from "../../../assets/images/h20Limao.png";
import ihaaDuplo from "../../../assets/images/ihaaDuplo.png";
import kabooom from "../../../assets/images/kabooom.png";
import misturao from "../../../assets/images/misturao.png";
import nuggets from "../../../assets/images/nuggets.png";
import onionRing from "../../../assets/images/onionRing.png";
import shakeLeiteMocaPacoca from "../../../assets/images/shakeLeiteMocaPacoca.png";
import sucoDeLaranja from "../../../assets/images/sucoDeLaranja.png";
import sundaeOvoMaltino from "../../../assets/images/sundaeOvoMaltino.png";

import { ItemCard } from "./ItemCard";
import { ItemContainer, SubTitle, Title } from "./styles";

export const ItemList: React.FC = () => {
  const itemList = [
    {
      itemImg: cheddar,
      itemTitle: "Cheddar",
      description: "Hmm queijo cheddar",
      price: 10.99,
    },
    {
      itemImg: ihaaDuplo,
      itemTitle: "Ihaa Duplo",
      description: "Dois deliciosos hambúrgueres grelhados ",
      price: 13.99,
    },
    {
      itemImg: estacado,
      itemTitle: "Estacado",
      description: "Se uma camada de cheddar já é bom...",
      price: 18.99,
    },
    {
      itemImg: kabooom,
      itemTitle: "Kaboom",
      description: "quatro carnes e quatro camadas de queijo e bacon",
      price: 28.99,
    },
    {
      itemImg: batataFrita,
      itemTitle: "Crocantes e irresistíveis",
      description: "Cheddar",
      price: 8.59,
    },
    {
      itemImg: onionRing,
      itemTitle: "Onion Ring",
      description: "fresquinhas e crocantes",
      price: 8.59,
    },
    {
      itemImg: nuggets,
      itemTitle: "Nuggets",
      description: "crocantes e com tempero suave",
      price: 8.59,
    },
    {
      itemImg: misturao,
      itemTitle: "Misturão",
      description: "Batata frita com cheddar e bacon crocante",
      price: 14.59,
    },
    {
      itemImg: sucoDeLaranja,
      itemTitle: "Suco de Larnja",
      description: "100% natural",
      price: 9.99,
    },
    {
      itemImg: h20Limao,
      itemTitle: "H20 Limão",
      description: "Sabor Limão",
      price: 9.99,
    },
    {
      itemImg: shakeLeiteMocaPacoca,
      itemTitle: "Shake de Leite Moça com Paçoca",
      description: "Uma deliciosa sobremesa ",
      price: 11.99,
    },
    {
      itemImg: sundaeOvoMaltino,
      itemTitle: "Sundae Ovo Maltino",
      description: "Sabor Ovomaltine",
      price: 6.99,
    },
  ];
  return (
    <div>
      <Title>Produtos</Title>
      <SubTitle>Selecione um produto para adicionar ao seu pedido</SubTitle>
      <ItemContainer>
        {itemList.map((itemList, index) => {
          return (
            <ItemCard
              title={itemList.itemTitle}
              imgSrc={itemList.itemImg}
              key={index}
              description={itemList.description}
              price={"R$" + itemList.price}
            />
          );
        })}
      </ItemContainer>
    </div>
  );
};
