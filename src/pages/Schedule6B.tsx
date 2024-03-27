import React from "react";
import Header from "@/Components/Header";
import Link from "next/link";

interface Schedule6BProps {
  previousStep: () => void;
  goToStep: () => void;
}
const Schedule6B: React.FC<Schedule6BProps> = ({ previousStep, goToStep }) => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
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
