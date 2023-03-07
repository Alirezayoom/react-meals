import { useState } from "react";

import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideHandler={hideCart} />}
      <Header onShowHandler={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
