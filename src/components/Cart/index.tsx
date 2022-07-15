import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useCart } from "react-use-cart";
import { kitchenItemList, noteList } from "../../constants/constants";
import { Button } from "../Button";
import { KitchenButtonRemove } from "../KitchenList/KitchenItemCard/KitchenButtonRemove";
import {
  ButtonWrapper,
  CartSummaryContainer,
  CleanCart,
  EmptyCartMessage,
  EmptyCartWrapper,
  InnerTableRow,
  ItemQuantity,
  Notes,
  QuantityIcon,
  TableColumn,
  TableColumnInfo,
  TableRowQuantity,
  TableRowTitle,
  TableWraper,
  TotalItens,
  TotalValue,
  TotalValueNumbers,
} from "./styles";

import dinnerIcon from "../../assets/images/dinnerIcon.png";
import emptyCartIcon from "../../assets/images/emptyCart.png";
import plusIcon from "../../assets/images/testeicon1.svg";
import minusIcon from "../../assets/images/testeicon4.svg";

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
  const [inputNote, setInputNote]: any = useState();
  const [inputOrderNumber, setInputOrderNumber]: any = useState(201);

  const changeCalc =
    inputChange < cartTotal ? " Valor insuficiente " : inputChange - cartTotal;

  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleIncrement = () => {
    setInputOrderNumber(inputOrderNumber + 1);
  };

  function openPayment() {
    setPaymentsIsOpen(true);
    console.log("funfobotao");
  }
  function sendDataKitchen() {
    items.map((data: any) => {
      kitchenItemList.push({
        name: inputName,
        orderNumber: inputOrderNumber,

        ...data,
      });
    });
    noteList.push({ note: inputNote });
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
          <div style={{ marginBottom: "50px" }}>
            {items.map((item: any, index: any) => {
              return (
                <TableWraper key={index}>
                  <TableColumn>
                    <img src={item.itemImg} alt="" style={{ height: "6rem" }} />
                  </TableColumn>
                  <TableColumnInfo>
                    <TableRowTitle>
                      <InnerTableRow>{item.itemTitle}</InnerTableRow>
                      <InnerTableRow>{item.price}</InnerTableRow>
                    </TableRowTitle>
                    <TableRowQuantity>
                      <InnerTableRow>
                        <QuantityIcon>
                          <img
                            src={plusIcon}
                            alt=""
                            width={30}
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          />
                        </QuantityIcon>
                        <ItemQuantity>{item.quantity}</ItemQuantity>
                        <QuantityIcon>
                          <img
                            src={minusIcon}
                            alt=""
                            width={30}
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          />
                        </QuantityIcon>
                      </InnerTableRow>
                      <InnerTableRow>
                        <div onClick={() => removeItem(item.id)}>
                          <KitchenButtonRemove />
                        </div>
                      </InnerTableRow>
                    </TableRowQuantity>
                  </TableColumnInfo>
                </TableWraper>
              );
            })}
            <CleanCart onClick={() => emptyCart()}>Limpar carrinho</CleanCart>
          </div>

          <TotalValue>Valor total:</TotalValue>
          <TotalValueNumbers> R$ {cartTotal.toFixed(2)}</TotalValueNumbers>

          <ButtonWrapper
            onClick={() => {
              openPayment();
              handleIncrement();
            }}
          >
            <Button
              background="#145C15"
              borderColor="#145C15"
              text="Concluir pedido"
              width="350px"
              height="50px"
              color="#ffff"
            />
          </ButtonWrapper>
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
                <div>{inputOrderNumber}</div>
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
              <input onChange={(e) => setInputNote(e.target.value)} />
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
          background="none"
          borderColor="#145C15"
          text="Continuar adicionando"
          width="350px"
          height="50px"
          color="#145C15"
        />
      </div>
    </CartSummaryContainer>
  );
};
