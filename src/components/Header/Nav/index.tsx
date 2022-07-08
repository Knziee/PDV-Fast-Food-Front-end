import { useNavigate } from "react-router-dom";
import { NavContainer, NavItem } from "./styles";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <NavContainer>
      <NavItem onPedidos onClick={handleClick}>
        Pedidos
      </NavItem>
      <NavItem
        onClick={() => {
          navigate("/cozinha");
        }}
      >
        Cozinha
      </NavItem>
      <NavItem
        onClick={() => {
          navigate("/retirada");
        }}
      >
        Retirada
      </NavItem>
    </NavContainer>
  );
};
