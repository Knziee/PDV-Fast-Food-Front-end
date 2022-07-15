import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useCart } from "react-use-cart";
import { kitchenItemList } from "../../constants/constants";
import { Button } from "../Button";
import {
  CartSummaryContainer,
  EmptyCartMessage,
  EmptyCartWrapper,
  Notes,
  TableRow,
  TotalItens,
} from "./styles";

import dinnerIcon from "../../assets/images/dinnerIcon.png";
import emptyCartIcon from "../../assets/images/emptyCart.png";

interface CartProps {
  closeModalProp?: any;
  hideButton?: any;
}

export const Cart: React.FC<CartProps> = ({ closeModalProp, hideButton }) => {
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

  const [paymentsIsOpen, setPaymentsIsOpen] = useState(false);
  const [inputChange, setInputChange]: any = useState("");
  const [inputName, setInputName]: any = useState();
  const [sucessMessage, setSucessMessage] = useState(false);
  const [inputNote, setInputNote] = useState();
  const [inputCode, setInputCode] = useState();

  const changeCalc =
    inputChange < cartTotal ? " Valor insuficiente " : inputChange - cartTotal;

  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // items.item.itemName = inputName

  function openPayment() {
    setPaymentsIsOpen(true);
    console.log("funfobotao");
  }
  function sendDataKitchen() {
    items.map((data:any) => {
      kitchenItemList.push({name: inputName, ...data})
    })
    // kitchenItemList.push(...items);
    // kitchenItemList.push({ name: inputName, orderNumber: inputCode, note: inputNote });
    console.log(kitchenItemList);
  }

  function handleFinishOrder() {
    handlePrint();
    sendDataKitchen();
    emptyCart();
    setSucessMessage(true);
  }

  if (isEmpty && sucessMessage === false)
    return (
      <EmptyCartWrapper>
        <EmptyCartMessage>Adicione um item!</EmptyCartMessage>
        <img src={emptyCartIcon} alt="" width={300} />
      </EmptyCartWrapper>
    );
  else if (sucessMessage === true)
    return (
      <div>
        <img src={dinnerIcon} alt="" />
        <h2>Pedido finalizado com sucesso!</h2>
        <h3>O pedido foi encaminhado para a cozinha</h3>{" "}
      </div>
    );
  return (
    <CartSummaryContainer>
      <div>
        <div style={{ display: paymentsIsOpen === false ? "block" : "none" }}>
          <TotalItens>Total de items: {totalItems}</TotalItens>
          <div>
            {items.map((item: any, index: any) => {
              return (
                <div>
                  <TableRow key={index}>
                    <td>
                      <img src={item.itemImg} style={{ height: "6rem" }} />
                    </td><TableRow>
                    <td>{item.itemTitle}</td> <td>{item.price}</td>
                    </TableRow>
                    <td>Quantidade: {item.quantity}</td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>{" "}
                    <button onClick={() => removeItem(item.id)}>
                      Remover Item
                    </button>{" "}
                  </TableRow>{" "}
                </div>
              );
            })}
          </div>

          <h2>Total price: {cartTotal}</h2>
          <button onClick={() => emptyCart()}>Limpar carrinho</button>
          <div>
            <div onClick={() => openPayment()}>
              <Button
                background="#fff"
                borderColor="#9f9f9f"
                text="Finalizar pedido"
                width="350px"
                height="50px"
                color="#9f9f9f"
              />
            </div>
          </div>
        </div>
        <div ref={componentRef}>
          <div style={{ display: paymentsIsOpen === false ? "none" : "block" }}>
            <h1>Pagamento</h1>
            <div>Resumo da compra</div>
            <br />
            {items.map((item: any, index: any) => {
              return (
                <div>
                  <tr>
                    <td>{item.quantity}</td>
                    <td>{item.itemTitle}</td>
                    <td>{item.price}</td>
                  </tr>
                </div>
              );
            })}
            <br />
            <div>
              <div>Valor total da compra: {cartTotal}</div>
              <div>
                <label>Nome do cliente</label>
                <input
                  placeholder="Insira seu nome"
                  onChange={(e) => setInputName(e.target.value)}
                ></input>
                <label>Codigo do pedido:</label>
                <input value={inputCode} />
              </div>
              <div>Selecione as formas de pagamento:</div>{" "}
              <select>
                <option>Debito</option> <option>Credito</option>{" "}
                <option>Dinheiro</option>
              </select>
            </div>
            <div>
              <label>Valor entregue:</label>
              <input
                placeholder="insira o valor"
                value={inputChange}
                onChange={(e) => setInputChange(e.target.value)}
              ></input>
              <label>Troco:</label>
              <div>{changeCalc}</div>
              <Notes>Observações:</Notes>
              <input></input>
              <div
                onClick={() => {
                  handleFinishOrder();
                  hideButton();
                  //   closeModalProp();
                }}
              >
                <Button
                  background="#fff"
                  borderColor="#9f9f9f"
                  text="Concluir pedido"
                  width="350px"
                  height="50px"
                  color="#9f9f9f"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          closeModalProp();
        }}
      >
        <Button
          background="#9f9f9f"
          borderColor="#9f9f9f"
          text="Continuar adicionando"
          width="350px"
          height="60px"
          color="#fff"
        />
      </div>
    </CartSummaryContainer>
  );
};
