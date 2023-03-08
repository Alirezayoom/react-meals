import { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../ui/modal";
import CartItem from "./cartItem";

export default function Cart(props) {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="mb-2 max-h-[16rem] overflow-scroll">
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideHandler={props.onHideHandler}>
      {cartItems}
      <div className="flex justify-between font-bold text-xl mb-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={props.onHideHandler}
          className="py-1 px-4 border-2 border-orange-800 text-orange-800 rounded-full"
        >
          Close
        </button>
        {hasItems && (
          <button className="py-1 px-4  ml-2 rounded-full text-white bg-orange-800 ">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
