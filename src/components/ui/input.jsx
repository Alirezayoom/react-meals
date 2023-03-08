import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex gap-2">
      <label className="text-black" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className="w-12 bg-white text-black" {...props.input} />
    </div>
  );
});

export default Input;
