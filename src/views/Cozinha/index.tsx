import { useState } from "react";
import { useCart } from "react-use-cart";
import { Header } from "../../components/Header";
import { KitchenListCard } from "../../components/KitchenList/KitchenItemCard";
import { KitchenButtonConfirm } from "../../components/KitchenList/KitchenItemCard/KitchenButtonConfirm";
import { KitchenButtonRemove } from "../../components/KitchenList/KitchenItemCard/KitchenButtonRemove";
import { kitchenItemList, noteList } from "../../constants/constants";
import {
  CozinhaDivider,
  CozinhaWrapper,
  KitchenListContainer,
  Notes,
  NotesContainer,
  OnGoingList,
  Title,
} from "./styles";

export const Cozinha: React.FC = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
    emptyCart,
  } = useCart();

  const { addItem } = useCart();

  const [remove, setRemove] = useState(kitchenItemList);
  const [show, setShow] = useState("block");

  const handleRemoveItem = (evt: any, itemTitle: any) => {
    setRemove(remove.filter((remove: any) => remove.itemTitle !== itemTitle));
    console.log("funfo butao");
    console.log(remove);
    // handleRemoveItem(evt, kitchenItemList.itemTitle)
  };

  // const testeWithState = (event: any, index: any) => {
  //   console.log(event.target);
  //   console.log("key index: ", index);
  //   setShow("none");
  //   // testeWithState(event, index)}
  //   // key={index}

  // };

  return (
    <div>
      <Header />
      <CozinhaWrapper>
        <KitchenListContainer>
          <Title>Preparando</Title>
          <OnGoingList>
            {remove.map((remove: any, index: number) => {
              return (
                <div>
                  <KitchenListCard
                    title={remove.itemTitle}
                    image={remove.itemImg}
                    key={index}
                    name={remove.name}
                    orderNumber={remove.orderNumber}
                    cardButtons={
                      <div>
                        <div onClick={() => addItem(remove)}>
                          <KitchenButtonConfirm />
                        </div>
                        <div
                          onClick={(evt) =>
                            handleRemoveItem(evt, remove.itemTitle)
                          }
                          key={index}
                        >
                          <KitchenButtonRemove />
                        </div>
                      </div>
                    }
                  />
                </div>
              );
            })}
            <Notes>Observações:</Notes>
            {noteList.map((noteList: any, index: number) => {
              return (
                <NotesContainer>
                  {remove.name} - {noteList.note}
                </NotesContainer>
              );
            })}
          </OnGoingList>
        </KitchenListContainer>

        <CozinhaDivider />

        <KitchenListContainer>
          <Title>Prontos:</Title>
          <OnGoingList>
            {items.map((item: any, index: any) => {
              return (
                <KitchenListCard
                  title={item.itemTitle}
                  image={item.itemImg}
                  key={index}
                  name={remove.name}
                  orderNumber={item.orderNumber}
                  cardButtons={
                    <div onClick={() => removeItem(item.id)}>
                      <KitchenButtonRemove />
                    </div>
                  }
                />
              );
            })}
          </OnGoingList>
        </KitchenListContainer>
      </CozinhaWrapper>
    </div>
  );
};
