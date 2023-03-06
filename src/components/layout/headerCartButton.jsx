import CartIcon from "../cart/cartIcon";

export default function HeaderCartButton() {
  return (
    <button className="h-12 rounded-full px-10 bg-black/40 hover:bg-black/50 flex gap-3 items-center">
      <span>
        <CartIcon />
      </span>
      <span className="text-lg">Your Cart</span>
      <span className="bg-orange-800 px-2 py-0 rounded-xl">3</span>
    </button>
  );
}
