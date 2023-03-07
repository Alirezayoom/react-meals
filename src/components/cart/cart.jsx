import Modal from "../ui/modal";

export default function Cart() {
  const cartItems = (
    <ul className="mb-2">
      {[{ id: 1, name: "Sushi", amount: 2, price: 12.59 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="flex justify-between font-bold text-xl mb-4">
        <span>Total Amount</span>
        <span>34.44</span>
      </div>
      <div className="flex justify-end">
        <button className="py-1 px-4 border-2 border-orange-800 text-orange-800 rounded-full">
          Close
        </button>
        <button className="py-1 px-4  ml-2 rounded-full text-white bg-orange-800 ">
          Order
        </button>
      </div>
    </Modal>
  );
}
