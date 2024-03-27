import React from "react";
import Image from "next/image";
import Schedule1 from "../Components/Schedule1";
interface Schedule6BProps {
  previousStep: () => void;
  goToStep: () => void;
}
const Schedule6B: React.FC<Schedule6BProps> = ({ previousStep, goToStep }) => {
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
            <div className="absolute top-[17px] left-0">
              <div
                className="bg-sky h-10 w-10 rounded-full flex items-center justify-center"
                onClick={previousStep}
              >
                <Image
                  src="/img/leftarrow.png"
                  alt="arrow"
                  width={18}
                  height={12}
                />
              </div>
            </div>
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
            <button
              className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px] mt-10"
              onClick={goToStep}
            >
              BACK TO HOMEPAGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule6B;
