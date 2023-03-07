import CartIcon from "../cart/cartIcon";
import { useContext } from "react";
import CartContext from "../../store/cartContext";

export default function HeaderCartButton(props) {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button
      onClick={props.onShowHandler}
      className="h-12 rounded-full px-10 bg-black/40 hover:bg-black/50 flex gap-3 items-center"
    >
      <span>
        <CartIcon />
      </span>
      <span className="text-lg">Your Cart</span>
      <span className="bg-orange-800 px-2 py-0 rounded-xl">
        {numberOfCartItems}
      </span>
    </button>
  );
}
