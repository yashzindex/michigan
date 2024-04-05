import React from "react";
import Image from "next/image";
import Link from "next/link";
import SelfPay from "@/Components/Buttons/SelfPay";
const Schedule12B = () => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <Link href="/">
              <div className="mx-auto w-fit max-w-[192px]">
                <Image
                  src="/img/logo.png"
                  alt="avs"
                  width={192}
                  height={74}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="absolute top-[17px] left-0 cursor-pointer">
                <div className="bg-sky h-10 w-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/leftarrow.png"
                    alt="arrow"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </Link>
          </div>
          <h1 className="text-blue text-2xl font-semibold mt-8 text-start sm:text-center">
            We’re unable to verify your insurance information at this time
          </h1>
          <p className="text-slate text-xl font-normal mt-[22px] text-start sm:text-center">
            You can call us at (734) 584-0133 to check your coverage
          </p>
          <div className="mt-14 text-center">
            <SelfPay />
          </div>
          <div className="mt-11 flex justify-center">
            <Link href="/">
              <p className="flex items-center text-lg font-medium text-blue underline hover:opacity-[0.7]">
                &larr; Edit your insurance information
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule12B;
