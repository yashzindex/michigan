import React, { useState } from "react";
import Image from "next/image";
import greaterthen from "../../../public/img/greaterthen.svg";
import Header from "@/Components/Shared/Header";
import Slider8 from "@/Components/Slider/Slider8";
import star from "../../../public/img/star.svg";

import Link from "next/link";
import date from "../../../public/img/date.svg";
import Close from "../../../public/img/Close.svg";
import Schedule8A from "@/Components/StepWizardPages/Schedule8A";
interface Schedule8Props {
  nextStep: () => void;
  previousStep: () => void;
}

const Schedule8: React.FC<Schedule8Props> = ({ nextStep, previousStep }) => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const timeSlots1 = [
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
  ];
  const handleClick = () => {
    setShowAnotherComponent(true);
  };

  const handleClose = () => {
    setShowAnotherComponent(false);
  };
  return (
    <>
      <div
        className={`${showAnotherComponent ? "hidden" : "block"} relative py-5`}
        // className={`relative py-5`}
      >
        <div className="container">
          <Header previousStep={previousStep} />
          <h1 className="text-blue text-2xl font-semibold sm:text-center mt-[14px] mb-8">
            Schedule your initial 55 min appointment
          </h1>
          <div className="custom_slider rounded-[20px] border-[3px] border-[#EFEFEF] p-4">
            <p className="text-blue text-[22px] font-normal mb-[10px] leading-[22px]">
              Tue, March 26
            </p>
            <Slider8 />
            <p className="text-slate text-[15px] font-normal mt-[9px]">
              Timezone: America/New_York
            </p>
          </div>
          <div className="relative mt-6">
            <div className="rounded-[20px] border-[3px] border-[#EFEFEF] p-4">
              <div className="star w-fit bg-[#FCE8E1] py-2 px-5 rounded-3xl flex items-center gap-1">
                <Image src={star} alt="'star" width={20} height={20} />
                <span className="text-base font-medium text-[#9A4728]">
                  great fit for you!
                </span>
              </div>
              <div className="flex flex-row items-center gap-4 mt-5">
                <Image
                  src="/img/s21.png"
                  alt="labelimg"
                  width={97}
                  height={97}
                  className="object-cover"
                />
                <div className="w-full">
                  <h3 className="text-blue text-[22px] font-normal">
                    Deirdre Conroy
                  </h3>
                  <p className="text-slate text-lg font-semibold leading-[24px]">
                    PhD <br /> Insomnia specialist
                  </p>
                </div>
                {/* <Link href="/Schedule8A"> */}
                <div onClick={handleClick}>
                  <Image
                    src={greaterthen}
                    alt="greaterthen"
                    height={18}
                    width={18}
                    className="cursor-pointer"
                  />
                </div>
                {/* </Link> */}
              </div>
              <div className="mt-[30px]">
                <div className="grid grid-cols-3 gap-[14px]">
                  {timeSlots1.map((slot, index) => (
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
              <div className="mt-10 text-center">
                <button
                  className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
                  onClick={nextStep}
                >
                  CONFIRM DATE & TIME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAnotherComponent && (
        <div className={`${showAnotherComponent ? "block" : "hidden"}`}>
          <Schedule8A handleClose={handleClose} nextStep={nextStep} />
        </div>
      )}
    </>
  );
};

export default Schedule8;
