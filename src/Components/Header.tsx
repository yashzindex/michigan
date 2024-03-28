import React from "react";
import Image from "next/image";

interface HeaderProps {
  previousStep: () => void;
}

const Header: React.FC<HeaderProps> = ({ previousStep }) => {
  return (
    <div className="relative">
      <div className="mx-auto w-fit max-w-[192px] main-logo">
        <Image
          src="/img/logo.png"
          alt="avs"
          width={192}
          height={74}
          className="object-cover"
        />
      </div>
      <div
        className="absolute top-[17px] left-0 cursor-pointer"
        onClick={previousStep}
      >
        <div className="bg-sky h-10 w-10 rounded-full flex items-center justify-center">
          <Image src="/img/leftarrow.png" alt="arrow" width={18} height={12} />
        </div>
      </div>
    </div>
  );
};

export default Header;
