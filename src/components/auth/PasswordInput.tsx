import React, { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import PasswordViewToggle from "./PasswordViewToggle";

type PasswordInputProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  error: string | undefined;
};

export default function PasswordInput<T extends FieldValues>({
  label,
  id,
  register,
  error,
  placeholder,
}: PasswordInputProps<T>) {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password",
  );

  return (
    <div className="w-full flex flex-col gap-1 my-3">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="w-full relative">
        <input
          type={passwordType}
          id={id}
          className="border rounded w-full text-sm p-3 focus:outline-none placeholder:font-light text-inherit"
          placeholder={placeholder}
          {...register(id)}
        />

        <PasswordViewToggle
          passwordType={passwordType}
          setPasswordType={setPasswordType}
        />
      </div>
      <div className="">
        {error && <p className="text-xs text-[#F04438]">{error}</p>}
      </div>
    </div>
  );
}
