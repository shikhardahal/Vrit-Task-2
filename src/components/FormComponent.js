import React from "react";

export const TextInput = ({ id, label, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export const SelectInput = ({ id, label, options, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export const RadioGroup = ({ id, label, options, value, onChange }) => (
  <fieldset>
    <legend>{label}</legend>
    {options.map((opt) => (
      <label key={opt.value}>
        <input
          type="radio"
          name={id}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
        {opt.label}
      </label>
    ))}
  </fieldset>
);
