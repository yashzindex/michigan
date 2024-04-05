import React from "react";
import Image from "next/image";
import rightarrow from "@/../../public/img/rightarrow.svg";
const SelfPay = () => {
  return (
    <>
      <button className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-lg font-bold leading-normal py-[22px] text-center w-full max-w-[328px]">
        CONTINUE WITH SELF-PAY
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

export default SelfPay;
