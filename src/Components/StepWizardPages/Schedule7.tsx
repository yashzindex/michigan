import React, { useState } from "react";
import Image from "next/image";
import Lock from "../../../public/img/Lock.svg";
import down from "../../../public/img/down.svg";
import Header from "@/Components/Shared/Header";
import Continue from "@/Components/Buttons/Continue";
import SelfPay from "@/Components/Buttons/SelfPay";

interface Schedule7Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule7: React.FC<Schedule7Props> = ({ nextStep, previousStep }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          <h1 className="w-fit text-start sm:mx-auto text-blue text-2xl font-semibold mt-7">
            Who’s your health insurance provider?
          </h1>
          <div className="relative mt-9">
            <label className="text-slate text-lg font-bold text-start  sm:text-center">
              Insurance Provider
            </label>
            <div className="relative">
              <select
                className="block relative appearance-none w-full border border-[#5E616C] text-slate py-5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[#5E616C] mt-2"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option className="text-slate" value="Michigan Medicare">
                  Michigan Medicare
                </option>
                <option className="text-slate" value="With options">
                  With options
                </option>
              </select>
              <Image
                src="/img/down.svg"
                alt="down"
                width={20}
                height={20}
                className="absolute right-4 top-[50%] translate-y-[-50%]"
              />
            </div>
          </div>
          {/* continue button */}
          <div className="mt-10 text-center">
            <Continue disabled={!selectedOption} onClick={nextStep} />
          </div>
          <div className="flex items-center my-7">
            <hr className="flex-grow h-[3px] bg-[#5e616c7f] mr-4" />
            <span className="text-slate text-2xl font-semibold text-center">
              OR
            </span>
            <hr className="flex-grow h-[3px] bg-[#5e616c7f] ml-4" />
          </div>
          <div className="text-center">
            <SelfPay />
          </div>
          <p className="flex justify-center items-center text-slate text-xs mt-[130px]">
            <Image
              src={Lock}
              alt="lock"
              width={20}
              height={24}
              className="mr-1"
            />
            All information you shared is secure and confidential.
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule7;
