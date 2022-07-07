import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavItem } from "./styles";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const [onPedidos, setOnPedidos] = useState("");

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setOnPedidos("pedidosProps");
  };

  return (
    <NavContainer>
      <NavItem onPedidos onClick={handleClick} backgroundColor={onPedidos}>
        Pedidos
      </NavItem>
      <NavItem
        onClick={() => {
          navigate("/cozinha");
        }}
        backgroundColor={onPedidos}
      >
        Cozinha
      </NavItem>
      <NavItem
        onClick={() => {
          navigate("/retirada");
        }}
        backgroundColor={onPedidos}
        Link
        to="/retirada"
      >
        Retirada
      </NavItem>
    </NavContainer>
  );
};
