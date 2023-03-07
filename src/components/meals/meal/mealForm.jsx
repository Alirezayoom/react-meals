import Input from "../../ui/input";

export default function MealForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input
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
    </form>
  );
}
