import { cn } from "@/lib/utils";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  type = "submit",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        `w-full text-center px-4 py-2 rounded font-medium bg-[#A7CC48] hover:bg-[#8eb726] disabled:bg-gray-200 disabled:cursor-not-allowed`,
        className,
      )}
      disabled={disabled}
    >
      {!disabled ? text : "Loading..."}
    </button>
  );
};

export default PrimaryButton;
