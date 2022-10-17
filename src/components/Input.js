import React from "react";

const Input = (props, ref) => {
  return (
    <div className="mt-2 mb-4">
      <label
        htmlFor={props.iid}
        className="block text-gray-700 text-sm font-bold mb-2 text-center border-b-2"
      >
        {props.label}
      </label>
      <input
        ref={ref}
        type="text"
        id={props.iid}
        className="block appearance-none text-center w-full py-2 px-3 focus:outline-gray-300 leading-tight"
        placeholder={props.label}
      />
    </div>
  );
};

export default React.forwardRef(Input);
