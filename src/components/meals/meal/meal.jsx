import { useContext } from "react";
import CartContext from "../../../store/cartContext";
import MealForm from "./mealForm";

export default function Meal(props) {
  const ctx = useContext(CartContext);
  const thePrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className=" border-neutral-400 border-b-[1px] py-2 flex justify-between">
      <div>
        <h3 className="text-black font-bold">{props.name}</h3>
        <div className="text-neutral-800">{props.description}</div>
        <div className="text-xl text-amber-700 font-bold">{thePrice}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
