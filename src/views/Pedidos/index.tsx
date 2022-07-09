import { Button } from "../../components/Button";
import { CategoryList } from "../../components/CategoryList";
import { CategoryCard } from "../../components/CategoryList/CategoryCard";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { ItemCard } from "../../components/ItemList/ItemCard";
import { categoryImages, itemList } from "../../constants/constants";
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
      categoryImg: categoryImages.burguerImg,
      categoryTitle: "Burguers",
      filter: filterBurguers,
    },
    {
      categoryImg: categoryImages.acompanhamentosImg,
      categoryTitle: "Acompanhamentos",
      filter: filterAcompanhamento,
    },
    {
      categoryImg: categoryImages.bebidasImg,
      categoryTitle: "Bebidas",
      filter: filterBebida,
    },
    {
      categoryImg: categoryImages.sobremesasImg,
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
          <Button
            background="#fff"
            borderColor="#9f9f9f"
            text="Cancelar"
            width="350px"
            height="60px"
            color="#9f9f9f"
          />
          <Button
            background="#9f9f9f"
            borderColor="#9f9f9f"
            text="Finalizar pedido"
            width="350px"
            height="60px"
            color="#fff"
          />
        </ButtonWrapper>
      </PedidosWrapper>
    </div>
  );
};
