import { Button } from "../Button";
import {} from "./styles";

interface PagamentoProps {
  totalPrice?: number;
  itemName?: string;
  itemQuantity?: string;
  itemPrice?: number;
  cancelProps?: any;
  troco?: any;
  arrayProp?: any;
}

export const Pagamento: React.FC<PagamentoProps> = ({
  totalPrice,
  itemName,
  itemPrice,
  itemQuantity,
  troco,
  arrayProp,
}) => {
  return (
    <div>


    </div>
  );
};
