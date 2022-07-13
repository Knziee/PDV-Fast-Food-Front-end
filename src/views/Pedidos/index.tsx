import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../../components/Button";
import { CartCard } from "../../components/CartCard";
import { CategoryList } from "../../components/CategoryList";
import { CategoryCard } from "../../components/CategoryList/CategoryCard";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { ItemCard } from "../../components/ItemList/ItemCard";
import { KitchenReadyButton } from "../../components/KitchenList/KitchenItemCard/KitchenReadyButton";
import { categoryImages, itemList } from "../../constants/constants";
import {
  ButtonWrapper,
  CartContainer,
  CategoryContainer,
  ItemContainer,
  PedidosWrapper,
  SearchBar,
  WelcomeMessage,
} from "./styles";

export const Pedidos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [useCategory, setUseCategory] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSelected, SetIsSelected] = useState("nop");
  const [cart, setCart] = useState([""]);

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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
    console.log("funcionou");
  }

  function closeModal() {
    setIsOpen(false);
  }
  function selectItem() {
    if (isSelected === "nop") {
      SetIsSelected("yes");
      console.log("sim");
    } else if (isSelected === "yes") {
      SetIsSelected("nop");
      console.log("nao");
    }
  }

  const handleClick = (itemList: any) => {
    cart.push(itemList);
    console.log(cart);
    // if (cart.indexOf(itemList) !== -1) return;
    // setCart([...cart, itemList])
  };

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
                    <div onClick={() => handleClick(itemList)}>
                      <ItemCard
                        title={itemList.itemTitle}
                        imgSrc={itemList.itemImg}
                        key={index}
                        description={itemList.description}
                        price={"R$" + itemList.price}
                        selected={isSelected}
                      />
                    </div>
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
                    <div onClick={() => handleClick(itemList)}>
                      <ItemCard
                        title={itemList.itemTitle}
                        imgSrc={itemList.itemImg}
                        key={index}
                        description={itemList.description}
                        price={"R$" + itemList.price}
                        selected={isSelected}
                      />
                    </div>
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
          <div onClick={openModal}>
            <Button
              background="#9f9f9f"
              borderColor="#9f9f9f"
              text="Finalizar pedido"
              width="350px"
              height="60px"
              color="#fff"
            />
          </div>
        </ButtonWrapper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>

          {cart.map((cart: any, index) => {
            return (
              <CartContainer>
                <CartCard
                  title={cart.itemTitle}
                  imgSrc={cart.itemImg}
                  key={index}
                  description={cart.description}
                  price={"R$" + cart.price}
                  cardButtons={<KitchenReadyButton />}
                />
              </CartContainer>
            );
          })}
        </Modal>
      </PedidosWrapper>
    </div>
  );
};
