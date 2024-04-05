import React from "react";
import Image from "next/image";
import leftarrow from "../../../public/img/leftarrow.svg";
import lArrow from "../../../public/img/lArrow.svg";
import Link from "next/link";
interface HeaderProps {
  previousStep: () => void;
}

const Header: React.FC<HeaderProps> = ({ previousStep }) => {
  return (
    <div className="relative">
      <Link href="/">
        <div className="mx-auto w-fit max-w-[192px] main-logo cursor-pointer">
          <Image
            src="/img/logo.png"
            alt="avs"
            width={192}
            height={74}
            className="object-cover"
          />
        </div>
      </Link>
      <div
        className="absolute top-[17px] left-0 cursor-pointer"
        onClick={previousStep}
      >
        <div className="bg-sky h-10 w-10 rounded-full flex items-center justify-center">
          <Image src={lArrow} alt="arrow" width={35} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
