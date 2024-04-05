import React from "react";
import Image from "next/image";
import rightarrow from "@/../../public/img/rightarrow.svg";
interface ContinueProps {
  disabled?: boolean;
  onClick?: () => void;
}
const Continue: React.FC<ContinueProps> = ({ disabled, onClick }) => {
  return (
    <>
      <button
        className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold 
        leading-normal py-[22px] text-center w-full max-w-[328px] mt-5"
        disabled={disabled}
        onClick={onClick}
      >
        CONTINUE
        <Image
          src={rightarrow}
          alt="rightarrow"
          width={33}
          height={33}
          className="ml-2"
        />
      </button>
    </>
  );
};

export default Continue;
