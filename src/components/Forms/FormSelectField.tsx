"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
    label: string;
    value: string;
}

type SelectInputProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  options: SelectOptions[];
  defaultValue?: SelectOptions
}

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue
}: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: {value, onChange} }) => (
          <Select
          style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            size={size}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
