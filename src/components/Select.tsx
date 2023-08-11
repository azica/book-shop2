import React from "react";

interface SelectProps {
  selectOptions: Array<string>;
  labelText: string;
  defaultValue: string;
  setSelect: (value: string) => void;
}
const Select: React.FC<SelectProps> = ({
  selectOptions,
  labelText,
  defaultValue,
  setSelect,
}) => {
  const ChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  return (
    <div className="select__group">
      <label htmlFor="select">{labelText}</label>
      <select id="select" onChange={ChangeHandler}>
        <option value={defaultValue}>{defaultValue}</option>
        {selectOptions?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
