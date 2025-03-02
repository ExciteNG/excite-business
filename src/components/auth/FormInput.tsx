import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  type: string;
  label: string;
  id: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error: string | undefined;
  disabled?: boolean;
};

export default function FormInput<T extends FieldValues>({
  type,
  label,
  id,
  placeholder,
  register,
  error,
  disabled,
}: FormInputProps<T>) {
  return (
    <div className="w-full flex flex-col gap-1 my-3">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border rounded w-full p-2 text-sm focus:outline-none placeholder:font-light placeholder:text-sm text-inherit disabled:cursor-not-allowed"
        placeholder={placeholder ? placeholder : ""}
        disabled={!!disabled}
        {...register(id)}
      />
      {error && <p className="text-xs text-[#F04438]">{error}</p>}
    </div>
  );
}

