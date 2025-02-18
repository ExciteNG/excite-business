import React from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  passwordType: "text" | "password";
  setPasswordType: React.Dispatch<React.SetStateAction<"text" | "password">>
};

export default function PasswordViewToggle({ passwordType, setPasswordType }: Props) {
  return (
    <>
      {passwordType === "password" ? (
          <Eye
            className="w-4 h-4 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
            onClick={() => setPasswordType("text")}
          />
        ) : (
          <EyeOff
            className="w-4 h-4 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
            onClick={() => setPasswordType("password")}
          />
        )}
    </>
  );
}
