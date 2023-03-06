export default function Meal({ name, description, price }) {
  const thePrice = `$${price.toFixed(2)}`;

  return (
    <li className=" border-neutral-400 border-b-[1px] py-2">
      <h3 className="text-black font-bold">{name}</h3>
      <div className="text-neutral-800">{description}</div>
      <div className="text-xl text-amber-700 font-bold">{thePrice}</div>
    </li>
  );
}
