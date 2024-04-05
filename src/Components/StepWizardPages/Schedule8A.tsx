import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "../../../public/img/star.svg";
import date from "../../../public/img/date.svg";
import Close from "../../../public/img/Close.svg";
import Slider8 from "@/Components/Slider/Slider8";
interface Schedule8AProps {
  handleClose: () => void;
  nextStep: () => void;
}
const Schedule8A: React.FC<Schedule8AProps> = ({ nextStep, handleClose }) => {
  const timeSlots = [
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
  ];
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <Link href="/">
              <div className="mx-auto w-fit max-w-[192px] main-logo">
                <Image
                  src="/img/logo.png"
                  alt="avs"
                  width={192}
                  height={74}
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="absolute top-[17px] right-0 cursor-pointer">
              <div
                className="bg-sky h-10 w-10 rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <p className="text-[22px] font-bold text-blue">
                  X
                  {/* <Image
                    src={Close}
                    alt="avs"
                    width={20}
                    height={25}
                    className="object-cover"
                  /> */}
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/img/lady.png"
              alt="lady"
              width={97}
              height={97}
              className="rounded-full object-cover"
            />
            <h1 className="text-blue text-[22px] font-normal mt-3">
              Deirdre Conroy
            </h1>
            <p className="text-slate text-lg font-semibold mt-3">
              PhD, Insomnia specialist
            </p>
            <div className="flex gap-3 mt-3">
              <div className="star bg-[#FCE8E1] py-2 px-3 sm:px-5 rounded-3xl flex items-center gap-1">
                <Image src={star} alt="'star" width={18} height={18} />
                <span className="text-xs sm:text-base font-medium text-[#9A4728]">
                  great fit for you!
                </span>
              </div>
              <div className="star bg-[#E0EDE2] py-2 px-3 sm:px-5 rounded-3xl flex items-center gap-1">
                <Image src={date} alt="'star" width={18} height={18} />
                <span className="text-xs sm:text-base font-medium text-[#004616]">
                  10 openings in next week
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:px-5">
            <p className="text-blue text-[22px] font-normal leading-[22px] sm:text-center">
              Tue, March 26
            </p>
            <div className="mt-3">
              <Slider8 />
            </div>
            <p className="text-slate text-[15px] font-normal sm:text-center mt-3">
              Timezone: America/New_York
            </p>
            <div className="mt-6">
              <div className="grid grid-cols-3 gap-[14px]">
                {timeSlots.map((slot, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={slot}
                      id={`flexCheckDefault${index}`}
                    />
                    <label
                      style={{ fontSize: "18px", padding: "12px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor={`flexCheckDefault${index}`}
                    >
                      {slot}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
            >
              CONFIRM DATE & TIME
            </button>
          </div>
          <div className="relative px-[30px] border-t-[3px] border-[#EFEFEF] mt-14 sm:mt-20">
            <h2 className="text-blue text-[22px] font-normal sm:text-center mt-7">
              About Deirdre
            </h2>
            <p className="text-slate tet-[22px] font-normal">
              Dr. Conroy is a board certified behavioral sleep medicine
              specialist and a Clinical Professor in the University of Michigan
              Department of Psychiatry. As a clinical sleep psychologist and the
              Clinical Director of Michigan Sleep Center, she focuses on
              behavioral and cognitive interventions for sleep disorders such as
              insomnia and circadian rhythm sleep/wake disorders. She has over
              20 years of experience treating insomnia. She focus on busy
              professionals using an integrative approach to improve sleep,
              mood, and health.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule8A;
