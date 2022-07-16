import plusIcon from "../../../assets/images/testeicon1.svg";
import minusIcon from "../../../assets/images/testeicon4.svg";
import { KitchenButtonRemove } from "../../KitchenList/KitchenItemCard/KitchenButtonRemove";
import {
  InnerTableRow,
  ItemQuantity,
  QuantityIcon,
  TableColumn,
  TableColumnInfo,
  TableRowQuantity,
  TableRowTitle,
  TableWraper,
} from "./styles";

interface CartTableProps {
  imgSrc?: any;
  title?: string;
  price?: string;
  quantityPlus?: any;
  itemQuantity?: any;
  quantityMinus?: any;
  removeItemProp?: any;
}

export const CartTable: React.FC<CartTableProps> = ({
  imgSrc,
  title,
  price,
  quantityPlus,
  itemQuantity,
  quantityMinus,
  removeItemProp,
}) => {
  return (
    <TableWraper>
      <TableColumn>
        <img src={imgSrc} alt="" style={{ height: "6rem" }} />
      </TableColumn>
      <TableColumnInfo>
        <TableRowTitle>
          <InnerTableRow>{title}</InnerTableRow>
          <InnerTableRow>{price}</InnerTableRow>
        </TableRowTitle>
        <TableRowQuantity>
          <InnerTableRow>
            <QuantityIcon>
              <img
                src={plusIcon}
                alt=""
                width={30}
                onClick={() => quantityPlus}
              />
            </QuantityIcon>
            <ItemQuantity>{itemQuantity}</ItemQuantity>
            <QuantityIcon>
              <img
                src={minusIcon}
                alt=""
                width={30}
                onClick={() => quantityMinus}
              />
            </QuantityIcon>
          </InnerTableRow>
          <InnerTableRow>
            <div onClick={() => removeItemProp}>
              <KitchenButtonRemove />
            </div>
          </InnerTableRow>
        </TableRowQuantity>
      </TableColumnInfo>
    </TableWraper>
  );
};
