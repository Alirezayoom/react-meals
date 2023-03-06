import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./headerCartButton";

export default function Header() {
  return (
    <>
      <header className="relative bg-orange-800 flex justify-between h-16 items-center px-8 z-10">
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="absolute top-0 w-full -translate-y-12 -skew-y-3 h-96 overflow-hidden">
        <img src={mealsImage} alt="meals image" className="w-full" />
      </div>
    </>
  );
}
