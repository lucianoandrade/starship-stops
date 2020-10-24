import React from "react";
import "./styles.scss"

const Input = props => {
  const {
    id = "id",
    type = "text",
    name = "name",
    placeholder = "placeholder",
    label = "label",
    disabled = false,
    required = false,
    onChange,
    value,
  } = props;

  return (
    <>
      <fieldset className="field">
        <label className="label" htmlFor={id}>{label}</label>
        <input
          className="input"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          value={value} 
        />
      </fieldset>
    </>
  );
};

export default Input;