import { useRef, useState } from "react";
import { useCart } from "react-use-cart";
import { Button } from "../Button";
import {} from "./styles";

import { useReactToPrint } from "react-to-print";

interface CartProps {
  closeModalProp?: any;
}

export const Cart: React.FC<CartProps> = ({ closeModalProp }) => {
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
  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  function openPayment() {
    setPaymentsIsOpen(true);
    console.log("funfobotao");
  }

  const changeCalc =
    inputChange < cartTotal ? " Valor insuficiente " : inputChange - cartTotal;

  if (isEmpty) return <div>Adicione um item!</div>;
  return (
    <div>
      <div style={{ display: paymentsIsOpen === false ? "block" : "none" }}>
        <div>Total de items:({totalItems})</div>
        <div>
          {items.map((item: any, index: any) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.itemImg} style={{ height: "6rem" }} />
                </td>
                <td>{item.itemTitle}</td>
                <td>{item.price}</td>
                <td>Quantidade: {item.quantity}</td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>{" "}
                <button onClick={() => removeItem(item.id)}>
                  Remover Item
                </button>
              </tr>
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
          </div>
        </div>
      </div>
      <div onClick={handlePrint}>
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
  );
};
