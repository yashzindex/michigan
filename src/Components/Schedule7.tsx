import React, { useState } from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
import Lock from "../../public/img/Lock.svg";
import Header from "@/Components/Header";
import Progressbar from "@/Components/Progressbar";

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
                className="block relative appearance-none w-full border border-[#5E616C] text-slate py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[#5E616C] mt-2"
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
                src="/img/down.png"
                alt="down"
                width={30}
                height={30}
                className="absolute right-3 top-0 bottom-0 translate-y-[50%]"
              />
            </div>
          </div>
          {/* continue button */}
          <div className="mt-10 text-center">
            <button
              disabled={!selectedOption}
              className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px] mt-5"
              onClick={nextStep}
            >
              CONTINUE
              <Image
                src={rightarrow}
                alt="rightarrow"
                width={37}
                height={41}
                className="ml-2"
              />
            </button>
          </div>
          <div className="flex items-center my-7">
            <hr className="flex-grow h-[3px] bg-[#5e616c7f] mr-4" />
            <span className="text-slate text-2xl font-semibold text-center">
              OR
            </span>
            <hr className="flex-grow h-[3px] bg-[#5e616c7f] ml-4" />
          </div>
          <div className="text-center">
            <button
              disabled={!selectedOption}
              className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-lg font-bold leading-normal py-4 text-center w-full max-w-[328px]"
            >
              CONTINUE WITH SELF-PAY
              <Image
                src={rightarrow}
                alt="rightarrow"
                width={30}
                height={30}
                className="ml-2"
              />
            </button>
          </div>
          <p className="flex justify-center items-center text-slate text-xs mt-[130px]">
            <Image
              src={Lock}
              alt="lock"
              width={24}
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
