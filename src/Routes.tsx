import {
  BrowserRouter,
  Route,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Cozinha } from "./views/Cozinha";
import { Pedidos } from "./views/Pedidos";
import { Retirada } from "./views/Retirada";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route
          path="/"
          element={
            <CartProvider>
              <Pedidos />
            </CartProvider>
          }
        />
        <Route path="/cozinha" element={<Cozinha />} />
        <Route path="/retirada" element={<Retirada />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
