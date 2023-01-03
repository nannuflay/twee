import React from "react";

export default function Button(props) {
  const { text, onClick, customClass } = props;
  return (
    <div>
      <button className={`btn btn-primary` + customClass} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
