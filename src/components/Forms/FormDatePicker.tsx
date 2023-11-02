"use client";

import { DatePicker, DatePickerProps, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type UMDatePickerProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
}

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
}: UMDatePickerProps) => {
  const { control } = useFormContext();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: {value, onChange} }) => (
            <DatePicker onChange={onChange} />
        )}
      />
    </>
  );
};

export default FormSelectField;
