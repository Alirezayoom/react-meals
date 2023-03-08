import { useRef, useState } from "react";
import Input from "../../ui/input";

export default function MealForm(props) {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 20
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <Input
        ref={amountRef}
        label="Amount : "
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-orange-800 py-1 px-6 rounded-full">+ Add</button>
      {!amountIsValid && <div>Please enter a valid number.</div>}
    </form>
  );
}
