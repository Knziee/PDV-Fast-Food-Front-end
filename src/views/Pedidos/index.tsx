import { Button } from "../../components/Button";
import { CategoryList } from "../../components/CategoryList";
import { CategoryCard } from "../../components/CategoryList/CategoryCard";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { ItemCard } from "../../components/ItemList/ItemCard";
import { itemList } from "../../constants/constants";
import {
  ButtonWrapper,
  CategoryContainer,
  ItemContainer,
  PedidosWrapper,
  SearchBar,
  WelcomeMessage,
} from "./styles";

import { useState } from "react";

export const Pedidos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [useCategory, setUseCategory] = useState(false);

  const filterBurguers = () => {
    setCategory("burguer");
    setUseCategory(true);
  };
  const filterAcompanhamento = () => {
    setCategory("acompanhamento");
    setUseCategory(true);
  };
  const filterBebida = () => {
    setCategory("bebida");
    setUseCategory(true);
  };
  const filterSobremesa = () => {
    setCategory("sobremesa");
    setUseCategory(true);
  };

  const categoryList = [
    {
      categoryImg: "https://i.imgur.com/5Wg6xa1.png",
      categoryTitle: "Burguers",
      filter: filterBurguers,
    },
    {
      categoryImg: "https://i.imgur.com/UgRVlp9.png",
      categoryTitle: "Acompanhamentos",
      filter: filterAcompanhamento,
    },
    {
      categoryImg: "https://i.imgur.com/itpLGEW.png",
      categoryTitle: "Bebidas",
      filter: filterBebida,
    },
    {
      categoryImg: "https://i.imgur.com/6RR3CVS.png",
      categoryTitle: "Sobremesas",
      filter: filterSobremesa,
    },
  ];

  return (
    <div>
      <Header />
      <PedidosWrapper>
        <WelcomeMessage>Seja bem vindo!</WelcomeMessage>
        <SearchBar
          placeholder="O que você procura?"
          onChange={(event: any) => {
            setSearchTerm(event.target.value);
            setUseCategory(false);
          }}
        />
        <CategoryList />
        <CategoryContainer>
          {categoryList.map((categoryList, index) => {
            return (
              <CategoryCard
                title={categoryList.categoryTitle}
                imgSrc={categoryList.categoryImg}
                key={index}
                action={categoryList.filter}
              />
            );
          })}
        </CategoryContainer>
        <ItemList />
        <ItemContainer>
          {useCategory === false
            ? itemList
                .filter((itemList: any) => {
                  if (searchTerm === "") {
                    return itemList;
                  } else if (
                    itemList.itemTitle
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return itemList;
                  }
                })
                .map((itemList, index) => {
                  return (
                    <ItemCard
                      title={itemList.itemTitle}
                      imgSrc={itemList.itemImg}
                      key={index}
                      description={itemList.description}
                      price={"R$" + itemList.price}
                    />
                  );
                })
            : itemList
                .filter((itemList) => {
                  if (category === "") {
                    return itemList;
                  } else if (
                    itemList.itemCategory
                      .toLowerCase()
                      .includes(category.toLowerCase())
                  ) {
                    return itemList;
                  }
                })
                .map((itemList, index) => {
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
        <ButtonWrapper>
          <Button background="red" borderColor="blue" text="cancelar" />
          <Button background="red" borderColor="blue" text="finalizar pedido" />
        </ButtonWrapper>
      </PedidosWrapper>
    </div>
  );
};
