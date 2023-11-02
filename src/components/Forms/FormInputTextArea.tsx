"use client";

import TextArea from "antd/es/input/TextArea";
import { useFormContext, Controller } from "react-hook-form";

type SelectInputTextAreaProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  row: number;
  maxLength: number;
};

const FormInputTextArea = ({
  name,
  size,
  value,
  placeholder,
  label,
  row,
  maxLength,
}: SelectInputTextAreaProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            rows={row}
            maxLength={maxLength}
            size={size}
            {...field}
          />
        )}
      />
    </>
  );
};

export default FormInputTextArea;
