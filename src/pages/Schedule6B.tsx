import React from "react";
import Link from "next/link";
import Image from "next/image";

const Schedule6B = () => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-fit max-w-[192px]">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
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
          <div className="text-blue text-center text-[25px] font-semibold mt-[70px]">
            Unfortunately, we’re unable to help you at this time
          </div>
          <p className="text-start sm:text-center text-slate text-2xl font-medium mt-[34px] px-2">
            CBT-I can still be effective for clients with sleep apnea and
            restless leg syndrome, but it does not treat these conditions.{" "}
            <br />
            <br /> CBT-I is also not indicated for clients with bipolar disorder
            or substance use abuse. <br />
            <br /> Please consult your primary care provider for other treatment
            options.
          </p>
          <div className="mt-10 text-center">
            <Link href="/">
              <button className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px] mt-10">
                BACK TO HOMEPAGE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule6B;
