import React from "react";

interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: any;
  textColor?: any;
  fullwidth?: string;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center 
    gap-2 font-mulish rounded-full leading-none px-4 py-3
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} border`
        : `bg-coral-red text-lg 
     text-white hover:bg-[#23A16E] border-none ${fullwidth && "w-full"}`
    }
     `}
    >
      {label}
      {iconUrl && <img src={iconUrl} />}
    </button>
  );
};

export default Button;
