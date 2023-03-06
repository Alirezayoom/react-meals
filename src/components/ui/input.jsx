export default function Input(props) {
  return (
    <div className="flex gap-2">
      <label className="text-black" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className="w-12" {...props.input} />
    </div>
  );
}
