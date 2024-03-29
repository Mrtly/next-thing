"use client";

import { ChangeEvent } from "react";
import { useState } from "react";

function Textinput(props: {
  id: string;
  label: string;
  onValueChange?: (newValue: string) => void;
}) {
  const [name, setName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    props.onValueChange?.(event.target.value);
  }

  return (
    <div>
      <label htmlFor={props.id}>
        <span className="font-semibold text-slate-900"> {props.label} </span>
        <input
          id={props.id}
          name={props.id}
          type="text"
          value={name}
          className="block border border-slate-500 bg-slate-50 p-2"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Textinput;
