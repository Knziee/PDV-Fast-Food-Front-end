import { useCart } from "react-use-cart";
import { kitchenItemList } from "../../constants/constants";
import { KitchenListCard } from "./KitchenItemCard";
import {
  KitchenListContainer,
  Notes,
  NotesContainer,
  OnGoingList,
  Title,
} from "./styles";

export const KitchenList: React.FC = () => {
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

  return (
    <KitchenListContainer>
      <Title></Title>
      <OnGoingList>
        {kitchenItemList.map((kitchenItemList: any, index: any) => {
          return (
            <KitchenListCard
              title={kitchenItemList.itemTitle}
              image={kitchenItemList.itemImg}
              key={index}
              name={kitchenItemList.name}
              orderNumber={kitchenItemList.orderNumber}
            />
          );
        })}

      </OnGoingList>
    </KitchenListContainer>
  );
};
