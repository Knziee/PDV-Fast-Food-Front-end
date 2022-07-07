import {
  BrowserRouter,
  Route,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { Cozinha } from "./views/Cozinha";
import { Pedidos } from "./views/Pedidos";
import { Retirada } from "./views/Retirada";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Pedidos />} />
        <Route path="/cozinha" element={<Cozinha />} />
        <Route path="/retirada" element={<Retirada />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
