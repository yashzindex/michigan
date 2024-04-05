import React from "react";
import Header from "@/Components/Shared/Header";
import Image from "next/image";
import Lock from "../../../public/img/Lock.svg";
import Link from "next/link";

interface Schedule13Props {
  nextStep: () => void;
  previousStep: () => void;
}

const Schedule13: React.FC<Schedule13Props> = ({ nextStep, previousStep }) => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />

          <div className="flex items-center sm:justify-center gap-5 bg-sky py-5 px-[10px] rounded-[20px]">
            <div className="rounded-full overflow-hidden h-[100px] w-[100px]">
              <Image
                src="/img/lady.png"
                alt="lady"
                className="w-[100px] h-[100px] max-w-full rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="content">
              <h3 className="text-blue text-[15px] font-semibold">
                Your selected appointment
              </h3>
              <p className="text-blue text-lg font-normal">Tue, March 26</p>
              <p className="text-blue text-lg font-normal">
                3:00pm - 3:55pm with
              </p>
              <p className="text-slate text-lg font-medium">Deirdre Conroy</p>
            </div>
          </div>
          <div className="bg-sky py-5 px-[10px] rounded-[20px] text-center mt-5">
            <h2 className="text-blue text-xl font-semibold">
              Your estimated cost
            </h2>
            <p className="text-slate font-medium text-[42px] my-2 leading-normal">
              $30
            </p>
          </div>
          <div className="mt-8">
            <p className="text-blue text-xl font-normal sm:text-center">
              Your estimated cost is
              <span className="text-blue text-xl font-semibold cursor-pointer">
                &nbsp; $30.&nbsp;
              </span>
              You’ll not be charged until after your appointment.
            </p>
          </div>
          <div className="relative mt-7 w-full">
            <input
              type="text"
              className="p-[15.5px] border border-slate rounded-[10px] w-full focus:outline-none pl-20 text-end"
            />
            <Image
              src="/img/wallet.png"
              alt="wallet"
              width={44}
              height={34}
              className="absolute top-[50%] left-2 translate-y-[-50%]"
            />
          </div>
          <p className="flex justify-center items-center text-slate text-xs mt-2">
            <Image
              src={Lock}
              alt="lock"
              width={20}
              height={24}
              className="mr-1"
            />
            All information you shared is secure and confidential.
          </p>
          <div className="mt-11 text-center">
            <Link href="Schedule14">
              <button className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-[22px] text-center w-full max-w-[328px] mt-11">
                CONFIRM BOOKING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule13;
