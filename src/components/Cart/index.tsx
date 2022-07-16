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
  NoteInput,
  Notes,
  OrderChange,
  OrderItemPrice,
  OrderItemTitle,
  OrderItemWrapper,
  OrderSumary,
  OrderSumaryContent,
  OrderSumaryLine,
  PaymentFakeInput,
  PaymentInfoContainer,
  PaymentInfoMinorContainer,
  PaymentInput,
  PaymentSelect,
  PaymentSubTitle,
  PaymentTitle,
  QuantityIcon,
  SucessMessage,
  SucessMessageContainer,
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

  const calcWithInput = inputChange - cartTotal;
  const changeCalc =
    inputChange < cartTotal ? " Valor insuficiente " : calcWithInput.toFixed(2);

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
      <SucessMessageContainer>
        <img src={dinnerIcon} alt="" />
        <SucessMessage>Pedido finalizado com sucesso!</SucessMessage>
      </SucessMessageContainer>
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
            <PaymentTitle>Pagamento</PaymentTitle>
            <PaymentSubTitle marginBottom="10px">
              Resumo da compra
            </PaymentSubTitle>
            <OrderSumary>
              <OrderSumaryContent>
                {items.map((item: any, index: any) => {
                  return (
                    <OrderItemWrapper>
                      <OrderItemTitle>
                        <td>{item.quantity}x </td>
                        <td> {item.itemTitle}</td>
                      </OrderItemTitle>
                      <OrderItemPrice>
                        <td>R$ {item.price}</td>
                      </OrderItemPrice>
                    </OrderItemWrapper>
                  );
                })}

                <OrderSumaryLine />
                <TotalValue>
                  Valor total da compra:{" "}
                  <TotalValueNumbers>R$ {cartTotal}</TotalValueNumbers>
                </TotalValue>
              </OrderSumaryContent>
            </OrderSumary>

            <PaymentInfoContainer>
              <PaymentInfoMinorContainer>
                <PaymentSubTitle marginBottom="2px">
                  Nome do cliente
                </PaymentSubTitle>
                <PaymentInput
                  placeholder="Insira seu nome"
                  onChange={(e: any) => setInputName(e.target.value)}
                ></PaymentInput>
                <PaymentSubTitle>Codigo:</PaymentSubTitle>
                <PaymentFakeInput width="30px">
                  {inputOrderNumber}
                </PaymentFakeInput>
              </PaymentInfoMinorContainer>
              <PaymentInfoMinorContainer>
                <PaymentSubTitle>
                  Selecione as formas de pagamento:
                </PaymentSubTitle>{" "}
                <PaymentSelect>
                  <option value="1">Dinheiro</option>{" "}
                  <option value="2">Credito</option>{" "}
                  <option value="3">Debito</option>
                </PaymentSelect>
              </PaymentInfoMinorContainer>
            </PaymentInfoContainer>
            <div>
              <div
              // style={{
              //   display:
              //     PaymentSelect.option.value === "3" ? "block" : "none",
              // }}
              >
                <PaymentSubTitle>Valor entregue:</PaymentSubTitle>
                <PaymentInput
                  placeholder="insira o valor"
                  value={inputChange}
                  onChange={(e: any) => setInputChange(e.target.value)}
                ></PaymentInput>
                <PaymentSubTitle>Troco:</PaymentSubTitle>
                <OrderChange>R$ {changeCalc}</OrderChange>
              </div>
              <Notes>Observações:</Notes>
              <NoteInput onChange={(e: any) => setInputNote(e.target.value)} />
              <ButtonWrapper
                onClick={() => {
                  handleFinishOrder();
                  hideButton();
                }}
              >
                <Button
                  background="#145C15"
                  borderColor="#145C15"
                  text="Finalizar pedido"
                  width="350px"
                  height="50px"
                  color="#ffff"
                />
              </ButtonWrapper>
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
