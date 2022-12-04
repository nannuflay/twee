import React, { useState } from "react";

export default function FormInput(props) {
  const [focused, setfocused] = useState(false);
  const { id, onChange, errorMessage, ...otherProps } = props;
  const handleFocus = (e) => {
    setfocused(true);
  };
  return (
    <div className="mb-3 formInput">
      <input
        {...otherProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className="input input-bordered w-full  invalid:input-error invalid:text-pink-600"
      />
      <span className="err-message text-error font-medium text-sm my-1">
        {errorMessage}
      </span>
    </div>
  );
}
