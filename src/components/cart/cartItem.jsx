export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between border-b-2 border-orange-800 py-4">
      <div>
        <h2 className="font-bold text-lg mb-1">{props.name}</h2>
        <div className="">
          <span className="text-orange-800 mr-6">{price}</span>
          <span className="border-2 border-black px-2">x {props.amount}</span>
        </div>
      </div>
      <div className="font-bold text-xl flex items-center gap-4 text-white">
        <button
          onClick={props.onRemove}
          className="px-4 py-2 bg-orange-800 hover:bg-orange-900"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="px-4 py-2 bg-orange-800 hover:bg-orange-900"
        >
          +
        </button>
      </div>
    </li>
  );
}
