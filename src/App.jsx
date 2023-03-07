import { useState } from "react";

import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }

  return (
    <div className="">
      {cartIsShown && <Cart onHideHandler={hideCart} />}
      <Header onShowHandler={showCart} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
